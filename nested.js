var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  var gloveBoxContents = undefined;
  gloveBoxContents = myStorage.car.inside['glove box'];
  console.log(gloveBoxContents);