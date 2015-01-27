document.addEventListener("DOMContentLoaded", function(){
  
  if( navigator.geolocation ){ 
    //code goes here to find position
    var params = {
        enableHighAccuracy: false,
        timeout:3600,
        maximumAge:60000
    
    };
  
      
    //enableHighAccuracy means try to use GPS and drain the battery
    //for improved accuracy within a few meters.
    //maximum age is how long to cache the location info
    //timeout is how long to wait for the network to respond after the user says ok
  
    
    navigator.geolocation.getCurrentPosition(reportPosition, gpsError, params); 
    
    //to continually check the position (in case it changes) use
    // navigator.geolocation.watchPosition( reportPosition, gpsError, params)
  }else{
    //browser does not support geolocation api
    alert("Sorry, but your browser does not support location based awesomeness.")
  }
});

function reportPosition(position){
    var locationHere = "http://maps.googleapis.com/maps/api/staticmap?sensor=false&center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=14&size=400x400&markers=color:red|label:Q|" + position.coords.latitude + "," + position.coords.longitude;
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 400;
    
    var imageObj = new Image();
    imageObj.src = locationHere;

imageObj.onload = function() {
  context.drawImage(imageObj, 0, 0);

    document.body.appendChild(canvas);
    
}
};

function gpsError(error){   
  var errors = {
    1: 'Permission denied',
    2: 'Position unavailable',
    3: 'Request timeout'
  };
  alert("Error: " + errors[error.code]);
}



                          
