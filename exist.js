// Check for property existance

var myObj = {
    top: "hat",
    bottom: "pants"
  };
  console.log(myObj.hasOwnProperty("top"));
  console.log(myObj.hasOwnProperty("middle"));
  if(myObj.hasOwnProperty("top")){
    console.log("top exists");
  }