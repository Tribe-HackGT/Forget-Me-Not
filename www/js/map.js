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

var map;
function initMap() {
    getLocation();
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: lat, lng: long},
      zoom: 8
    });
}