var lat;
var long;
function onSuccess(position) {
    lat = position.coords.latitude.toFixed(2)
    long = position.coords.longitude.toFixed(2)
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

function getLocation() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}