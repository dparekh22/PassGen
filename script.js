//Function to generate password using keylist and math.rand function to add character in string to tmp pass
var keylist="abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*"
    var tmp = ''
    function generatepass(plength){
        tmp=''
        for(i=0;i<plength;i++){
            tmp+=keylist.charAt(Math.floor(Math.random()*keylist.length))
        }
        return tmp
    }
//Function to pass length of password into generator function 
     function populateform(enterlength){
         document.passGen.output.value = generatepass(enterlength)
     }   