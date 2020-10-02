function ageCalculate(){
    
    var yourAge =document.getElementById('date').value;
      var myName =document.getElementById('name').value;
  
  
       
        //  var myName = name.toString();
        // var yourAge = parseInt(birthDate);
 
         days_lived = yourAge * 365;
          
              document.getElementById("result").innerHTML = "Name: "+ myName + 
              "<br/><br/> Here's your age in days: <br/>" + days_lived + " days lived " ;
             
          
          if (yourAge < 20) {
             document.getElementById("message").innerHTML = ("You are Under-age");
         }
         else{
             document.getElementById("message").innerHTML = ("You are an Adult");
         }
     }