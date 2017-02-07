let map, myLat, myLng, myLatLng, places, myMap;
let gmarkers = [];

let myForm = document.getElementsByTagName("form")[0];
myForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  user_radius = myForm.elements[0].value;
  places = trailApiResults(myLat, myLng, user_radius/** search-bar val goes here **/)
  .then(function(data) {
    myMap = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 39.8282, lng: -98.5795},
      zoom: 12,
      streetViewControl: false,
      zoomControl: true,
      mapTypeId: 'terrain',
      zoomControl: true,
      zoomControlOptions: {
          position: google.maps.ControlPosition.RIGHT_CENTER
      }
    });
    let homeLatLng = new google.maps.LatLng(myLat, myLng);
    let homeMarker = new google.maps.Marker({
      position: homeLatLng,
      map: myMap,
      icon: 'http://www.stevensmithteam.com/templates/version_0001/images/general/icons_misc/markers/home.png'
    });
    for (let i = 0; i < data.length; i++ ) {
      let currentPlace = data[i];
      console.log(currentPlace);
      let coords = [currentPlace.lat, currentPlace.lon];
      let latLng = new google.maps.LatLng(coords[0],coords[1]);
      let marker = new google.maps.Marker({
        position: latLng,
        map: myMap,
        title: currentPlace.name
        // infoWindow: false
      });
      // let infowindow = new google.maps.InfoWindow({
      //   content: (currentPlace.name).toString()
      // });
      // marker.addEventListener('click', function(evt) {
      //   evt.preventDefault();
      //   infoWindow.open(myMap, marker);
      // });
    }
    let circleOptions = {
      center: myLatLng,
      fillOpacity: 0,
      strokeOpacity: 0,
      map: map,
    radius: 1609.344*user_radius
    }
    let myCircle = new google.maps.Circle(circleOptions);
    let bounds = myCircle.getBounds();
    myMap.fitBounds(bounds);
    console.log(myMap.bounds);
  });
});


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.8282, lng: -98.5795},
    zoom: 12,
    streetViewControl: false,
    zoomControl: true,
    mapTypeId: 'terrain',
    zoomControl: true,
    zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER
    }
  });


  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      myLatLng = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      myLat = myLatLng.lat;
      myLng = myLatLng.lng;
      map.setCenter(myLatLng);
      var infoWindow = new google.maps.InfoWindow({map: map});
      infoWindow.setPosition(myLatLng);
      infoWindow.setContent('You are here!');
      // let places = trailApiResults(myLat, myLng, 10/** search-bar val goes here **/)
      // .then(function(data) {
      //   for (let i = 0; i < data.length; i++ ) {
      //     let currentPlace = data[i];
      //     let coords = [currentPlace.lat, currentPlace.lon];
      //     let latLng = new google.maps.LatLng(coords[0],coords[1]);
      //     let marker = new google.maps.Marker({
      //       position: latLng,
      //       map: map
      //     });
      //   }
      // });

    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

}
function trailApiResults(lat, lon, radius) {
  let myHeaders = new Headers();
  myHeaders.append('X-Mashape-Key', TRAIL_KEY);
  myHeaders.append('Accept', 'text/plain');
  let promise = fetch(`https://trailapi-trailapi.p.mashape.com/?lat=${lat}&limit=1000&lon=${lon}&radius=${radius}`, {
    method: 'GET',
    headers: myHeaders
  }).then(function(response) {
    let responseJSON = response.json();
    return responseJSON;
  }).then(function(json) {
    let places = json.places;
    console.log(places);
    for (let i = 0; i < places.length; i++ ) {
      let currentPlace = places[i];
      let latLng = new google.maps.LatLng(currentPlace.lat, currentPlace.lon);
      let marker = new google.maps.Marker({
        position: latLng,
        map: map
      });
    }
    console.log(places);
    return places;
  });
  return promise;
}

function handleLocationError(browserHasGeolocation, infoWindow, myLatLng) {
  infoWindow.setPosition(myLatLng);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}
