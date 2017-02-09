function initMap() {
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;
    let myLat = localStorage.myLat;
    console.log(myLat);
    let myLng = localStorage.myLng;
    console.log(myLng);
    let destination_lat = localStorage.destination_lat;
    let destination_lng = localStorage.destination_lng;
    let myCenter = new google.maps.LatLng(myLat, myLng);
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: myCenter,
      streetViewControl: false,
      mapTypeId: 'terrain',
      zoomControl: true,
      zoomControlOptions: {
          position: google.maps.ControlPosition.TOP_RIGHT
      }
    });
    // let circleOptions = {
    //   center: myLatLng,
    //   fillOpacity: 0,
    //   strokeOpacity: 0,
    //   map: map,
    //   radius: 1609.344*user_radius
    // } //create future new circle's options
    // let myCircle = new google.maps.Circle(circleOptions); //create new (hidden) circle
    // let bounds = myCircle.getBounds(); //get bounds of new circle
    // map.fitBounds(bounds); // fit edges of map object to new circle's bounds


    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('right-panel'));

    function calculateAndDisplayRoute(directionsService, directionsDisplay) {
      var start = new google.maps.LatLng(myLat, myLng);
      var end = new google.maps.LatLng(destination_lat, destination_lng);
      directionsService.route({
        origin: start,
        destination: end,
        travelMode: 'DRIVING'
      }, function(response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
        window.alert('Directions request failed due to ' + status);
        }
      });
   }
   calculateAndDisplayRoute(directionsService, directionsDisplay);
}
