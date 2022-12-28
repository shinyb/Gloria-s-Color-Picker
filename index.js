const schemeBtn = document.getElementById("get-scheme")
let seedColor = document.getElementById('color');
const modes = document.getElementById("modes")
const options = document.getElementsByTagName('option')
const modeValue = document.getElementById("mode-value")
let colorSwatches = []



function currentModeValue(){ 
    output = modes.options[modes.selectedIndex].value
 }
 

 seedColor.addEventListener('input', function(e) {
  document.getElementById("hex-place0").innerHTML = this.value
  seedColor.value = this.value;
  swatch1.style.backgroundColor = this.value
  
})
console.log("event listener seed color is:" + seedColor)


modes.addEventListener('input', function(){
   renewMode()
   callfetch()
})
   


function renewMode() {
   output = modes.options[modes.selectedIndex].value
}

schemeBtn.addEventListener('click', function() {
       
       renewMode()
       callfetch()
       
})
     
   
async function callfetch() {
   const initColor = seedColor.value.slice(1, 7)
   const getMode = modes.options[modes.selectedIndex].value
   console.log(getMode)
   console.log("init color before fetch" + initColor)
 
   const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${initColor}&mode=${getMode}&count=5`)

      const data = await response.json()
      console.log(response)
      console.log("seed color" + data.colors[0].hex.value)
      colorSwatches.push(data.colors[0].hex.value)
      colorSwatches.push(data.colors[1].hex.value)
      colorSwatches.push(data.colors[2].hex.value)
      colorSwatches.push(data.colors[3].hex.value)
      colorSwatches.push(data.colors[4].hex.value)
            console.log(colorSwatches)
            console.log("initial color" + initColor)
          
            document.getElementById("swatch1").style.backgroundColor = initColor
               document.getElementById("hex-place0").textContent = initColor

            document.getElementById("swatch2").style.backgroundColor = colorSwatches[0]
               document.getElementById("hex-place1").textContent = colorSwatches[0]

            document.getElementById("swatch3").style.backgroundColor = colorSwatches[1]
               document.getElementById("hex-place2").textContent = colorSwatches[1]

            document.getElementById("swatch4").style.backgroundColor = colorSwatches[2]
               document.getElementById("hex-place3").textContent = colorSwatches[2]

            document.getElementById("swatch5").style.backgroundColor = colorSwatches[3]
               document.getElementById("hex-place4").textContent = colorSwatches[3]


            colorSwatches.splice(0, colorSwatches.length)
              
            
        } 
        
      

   

            
                    
              

                  
           
           
           
                          
    
    
    
       
   
   
    
    
    



