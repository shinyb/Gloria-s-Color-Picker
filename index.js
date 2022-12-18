const schemeBtn = document.getElementById("get-scheme")
const seedColor = document.getElementById('color');
const modes = document.getElementById("modes")
const options = document.getElementsByTagName('option')
const modeValue = document.getElementById("mode-value")
let colorSwatches = []


function currentModeValue(){ 
    output = modes.options[modes.selectedIndex].value
 }
 

 
 seedColor.addEventListener('input', function(e) {
  document.getElementById("hex-place1").innerHTML = this.value;
  seedColor.value = this.value;
  swatch1.style.background = this.value;
  
})




function renewMode() { 
   modes.addEventListener('input', function() {
   output = modes.options[modes.selectedIndex].value
   console.log("this is output " + output)
   callfetch()
})


schemeBtn.addEventListener('click', function() {
       
       renewMode()
       callfetch()
       
})

       
   
function callfetch() {
      const initColor = seedColor.value.slice(1, 7)
       const getMode = modes.options[modes.selectedIndex].value
       console.log(getMode)

   fetch(`https://www.thecolorapi.com/scheme?hex=${initColor}&mode=${getMode}&count=5`)
            .then(response => response.json())
            .then(data => {
                for(const color of data.colors) {
                    console.log(color.hex.value)
                    colorSwatches.push(color.hex.value)
                    console.log(colorSwatches)
            document.getElementById("swatch0").style.backgroundColor = colorSwatches[0]
            document.getElementById("swatch0").value = colorSwatches[0]
               document.getElementById("hex-place0").textContent = colorSwatches[0]
            document.getElementById("swatch1").style.backgroundColor = colorSwatches[1]
               document.getElementById("hex-place1").textContent = colorSwatches[1]
            document.getElementById("swatch2").style.backgroundColor = colorSwatches[2]
               document.getElementById("hex-place2").textContent = colorSwatches[2]
            document.getElementById("swatch3").style.backgroundColor = colorSwatches[3]
               document.getElementById("hex-place3").textContent = colorSwatches[3]
             
            
        }colorSwatches.splice(0, colorSwatches.length)
        console.log("removed values" + colorSwatches)
     })}}

            
                    
              

                  
           
           
           
                          
    
    
    
       
   
   
    
    
    



