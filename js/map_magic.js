let map, myLat, myLng, myLatLng, searchLat, searchLng, searchLatLng, places, myMap;
class Place {
  constructor (city, state, name, unique_id, directions, lat, lon, description, activities) {
    this.city = city;
    this.state = state;
    this.name = name;
    this.unique_id = unique_id;
    this.directions = directions;
    this.lat = lat;
    this.lon = lon;
    this.description = description;
    this.activities = activities;
  }
  // latLon() {
  //   return [this.lat, this.lon];
  // }
  // activityTypes(activities) {
  //   let activityTypes = [];
  //   if (!emptyActivities(this.activities)) {
  //     for (let i = 0; i < this.activities.length; i++) {
  //       activityTypes.push(this.activities[i].activity_type_name);
  //     }
  //   }
  //   return activityTypes.join(', ');
  // }
  thumbnails(activities) { // selects thumbnail urls for infowindow display
    let thumbnail_urls = [];
    for (let i = 0; i < this.activities.length; i++) {
      if (this.activities[i].thumbnail !== null) {
        thumbnail_urls.push(this.activities[i].thumbnail);
      }
    }
    if (thumbnail_urls.length===0) {
      thumbnail_urls.push('https://mir-s3-cdn-cf.behance.net/project_modules/disp/7c3e0b10010291.560ddf96ea074.png')
    }
    return thumbnail_urls;
  }
  milage(activities) { // return array of mile
    let mileages = [];
    for (let h = 0; h < this.activities.length; h++) { mileages.push(this.activities[i].length); }
    return mileages.join(', ');
  }
}
let myForm = document.getElementsByTagName("form")[0]; //target form inputs
myForm.addEventListener('submit', function(evt) { // what happens when user casts submit spell
  evt.preventDefault(); //stop page from reloading
  let user_radius = myForm.elements[0].value;
  let latLongAfterDrag = false;
  parseDataAndMap(user_radius, latLongAfterDrag);
  // }
});

function parseDataAndMap(user_radius, latLongAfterDrag) {
  myMap = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.8282, lng: -98.5795},  //look later
    zoom: 12,
    streetViewControl: false,
    zoomControl: true,
    mapTypeId: 'terrain',
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.TOP_RIGHT
    }
  }); //create new map object
  let homeLatLng = new google.maps.LatLng(myLat, myLng); // lat&lon for home marker
  let homeMarker = new google.maps.Marker({
    position: homeLatLng,
    map: myMap,
    icon: 'https://www.stevensmithteam.com/templates/version_0001/images/general/icons_misc/markers/home.png'
  }); // create homeMarker
  let searchLatLng = new google.maps.LatLng(searchLat, searchLng);
  let destination_marker = new google.maps.Marker({
    position: searchLatLng,
    map: myMap,
    icon: '../images/1486704181_compass.png',
    draggable:true,
    title:"Drag me!"
  });
  destination_marker.addListener('dragend', function(e) {
    let latLongAfterDrag = e;
    searchLat = latLongAfterDrag.latLng.lat()
    searchLng = latLongAfterDrag.latLng.lng()
    searchLatLng = new google.maps.LatLng(searchLat, searchLng);
    parseDataAndMap(user_radius, latLongAfterDrag);
  })
  let circleOptions = { //create options for future circle
    center: searchLatLng,
    fillOpacity: 0,
    strokeOpacity: 0,
    map: map,
    radius: 1609.344*user_radius
  } //create future new circle's options
  let myCircle = new google.maps.Circle(circleOptions); //create new (hidden) circle
  let bounds = myCircle.getBounds(); //get bounds of new circle
  myMap.fitBounds(bounds); // fit edges of map object to new circle's bounds
  parseData(user_radius);
}

function parseData(user_radius, latLongAfterDrag) { //target radius value desired by user
  if (latLongAfterDrag) {
      searchLat = latLongAfterDrag.latLng.lat()
      searchLng = latLongAfterDrag.latLng.lng()
      searchLatLng = new google.maps.LatLng(searchLat, searchLng);
      console.log("searchLatLng changed!");
  }
  places = trailApiResults(searchLat, searchLng, user_radius) //initial fetch gets JSON data from API
  .then(function(data) {
    for (let i = 0; i < data.length; i++ ) { //instantiate new place class, call mapMaker()
      let place = new Place(data[i].city, data[i].state, data[i].name, data[i].unique_id, data[i].directions, data[i].lat, data[i].lon, data[i].description, data[i].activities);
      // console.log(place);
      mapMaker(place);
    }
  }) // update map with new markers & bounds
}
function contentStringGenerator(place) { // create content within infoWindows above markers
  let finale = "";
  finale+=`<div class="card sticky-action hoverable">`;
  finale+=`<div class="card-image waves-effect waves-block waves-light">`;
  finale+=`<img class="activator" src="${place.thumbnails(place.activities)[0]}">`;
  //https://mir-s3-cdn-cf.behance.net/project_modules/disp/7c3e0b10010291.560ddf96ea074.png
  // let carousel = `<div class="carousel carousel-slider">`;
  // for (let k = 0; k < place.activities.length; k++) {
  //   let imgURL = place.activities[k].thumbnail;
  //   if (imgURL !== null) {
  //     carousel += `<a class="carousel-item"><img src="${imgURL}"></a>`;
  //   }
  // }
  // carousel+=`</div>`;
  // finale+=carousel;
  finale+=`</div>`;
  finale+=`<div class="card-content">`;
  finale+=`<span class="card-title activator grey-text text-darken-4">${place.name}<i class="material-icons right">more_vert</i></span>`;
  finale+=`<p>Location: ${place.city}, ${place.state}</p>`;
  finale+=`</div>`;
  finale+=`<div class="card-action center">`;
  // let gDirectionsHref = `https://maps.googleapis.com/maps/api/directions/json?origin=${myLat},${myLng}&destination=${place.lat},${place.lon}&key=${GMAPS_KEY}`;
  let jsonStringifyPlace = JSON.stringify(place);
  // finale+=`<p hidden>${jsonStringifyPlace}</p>`
  finale+=`<button id="directions_button" class="blue darken-1 white-text" onclick="giveDirections(${place.lat}, ${place.lon})"><a href="../html/directions.html" onclick="giveDirections(${place.lat}, ${place.lon})">GOOGLE DIRECTIONS</a></button>`;
  // finale+=`<a href="#" class="blue-text">INSTAGRAM</a>`;
  // finale+=`<a href="#" class="blue-text">CURRENT WEATHER</a>`;
  finale+=`</div>`;
  finale+=`<div class="card-reveal">`;
  let revealString = `<span class="card-title grey-text text-darken-4">${place.name}<i class="material-icons right">close</i></span>`;
  revealString+=`<p><strong>Directions:</strong> ${place.directions}</p>`;
  for (let i = 0; i < place.activities.length; i++ ) {
    revealString+=activityCardInterpolation(place.activities[i]);
  }
  revealString+="</div></div>"
  finale+=revealString;
  return finale;
  function activityCardInterpolation(activity) {
    let activityTitle = `<h4>${activity.activity_type_name}</h4>`;
    let activityDescription = `<p>Description: ${activity.description}</p>`;
    let activityMilage = `<p><strong>Milage:</strong> ${activity.length}</p>`;
    let activityExternalLink = `<p><a href="${activity.url}">More information</a></p><br>`
    let activitySegment = activityTitle + activityDescription + activityMilage + activityExternalLink;
    return activitySegment;
  }
}

function giveDirections(placeLat, placeLon) {
  localStorage.setItem('destination_lat', placeLat);
  localStorage.setItem('destination_lng', placeLon);
  // let directionsService = new google.maps.DirectionsService;
  // let directionsDisplay = new google.maps.DirectionsRenderer({
  //   draggable: true,
  //   map: myMap,
  //   panel: document.getElementById('right-panel')
  // })
}

function homeMarkerCreator() {
  let homeLatLng = new google.maps.LatLng(myLat, myLng); // lat&lon for home marker
  let homeMarker = new google.maps.Marker({
    position: homeLatLng,
    map: myMap,
    icon: 'https://www.stevensmithteam.com/templates/version_0001/images/general/icons_misc/markers/home.png'
  }); // create homeMarker
}

function mapMaker(place) { // set marker placement & info
    let contentString = contentStringGenerator(place);
    let latLng = new google.maps.LatLng(place.lat, place.lon);
    let marker = new google.maps.Marker({
        position: latLng,
        icon: "https://mt.googleapis.com/vt/icon/name=icons/onion/22-blue-dot.png&scale=1.0",
        title: place.name
    });
    let infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    // let directions_button = infowindow.content.getElementById('directions_button');
    // console.log(directions_button);
    // directions_button.addListener('click', function() {
    //     console.log(this);
    // });
    marker.addListener('click', function() {
        infowindow.open(myMap, marker);
    });
    marker.setMap(myMap);
}
function initMap() { // create first map upon first website loading
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.8282, lng: -98.5795}, // center of the US
    zoom: 12,
    streetViewControl: false,
    mapTypeId: 'terrain',
    zoomControl: true,
    zoomControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT
    }
  });
  let instructionWindow = new google.maps.InfoWindow({map: map});
  instructionWindow.setPosition({lat:39.8282, lng:-98.5795});
  instructionWindow.setContent(`<div class="card-panel teal">
          <span class="white-text"><h4>Please wait for your location to be tracked before entering a radius above.</h4>
          </span>
        </div>`);

  // Try HTML5 geolocation.
  if (navigator.geolocation) { // if browser can handle html5 geolocation
    navigator.geolocation.getCurrentPosition(function(position) { // get current coordinates
      myLatLng = {
        lat: position.coords.latitude, // set GPS latitude
        lng: position.coords.longitude // set GPS longitude
      };
      myLat = myLatLng.lat; // set lat to var
      localStorage.setItem('myLat', myLat); // store lat in local storage
      myLng = myLatLng.lng; // set lng to var
      localStorage.setItem('myLng', myLng); // store lng in local storage
      map.setCenter(myLatLng); // make first map center on
      searchLat = myLat; // initiate searchLat to equal myLat
      searchLng = myLng; // initiate searchLng to equal myLng
      var infoWindow = new google.maps.InfoWindow({
        map: map,
        position: myLatLng,
        content: `<div class="card">
          <div class="card-content green lighten-1">
            <h4 class="white-text">It's time to findThatTrail!</h4>
            <p class="white-text">Finding your next great outdoor adventure will feel effortless after using this map. With findThatTrail, you can search for trailheads (and descriptions detailing how to find them) on the fly!</p>
            <br>
            <p class="white-text">Your first search will return trailheads within your radius (in miles), and a few extra symbols will pop up on the screen.</p>
            <br>
            <p class="white-text"><strong>This is what those symbols look like:</strong></p>
          </div>
          <div class="card-tabs">
            <ul class="tabs tabs-fixed-width">
              <li class="tab"><a href="#homeIconContent"><img src="http://www.stevensmithteam.com/templates/version_0001/images/general/icons_misc/markers/home.png"></a></li>
              <li class="tab"><a href="#compassIconContent"><img src="../images/1486704181_compass.png"></a></li>
              <li class="tab"><a href="#trailheadIconContent"><img src="https://mt.googleapis.com/vt/icon/name=icons/onion/22-blue-dot.png&scale=1.0"></a></li>
            </ul>
          </div>
          <div class="card-content grey lighten-4">
            <div id="homeIconContent">The <strong>yellow house icon</strong> represents your current GPS position: this is where Google directions will originate from.</div>
            <div id="compassIconContent">The <strong>compass icon</strong> represents your current search position: trailheads that are within a given radius from this point will appear on the map, and you can drag this icon to new places on the map to receive an updated set of trailhead markers.</div>
            <div id="trailheadIconContent">The <strong>blue pin-marker icon</strong> represents a trailhead result. Click on these to open up info cards containing trailhead names, descriptions, and google directions!</div>
          </div>
        </div>`
      });
      let destination_marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: '../images/1486704181_compass.png'
      });
      // infoWindow.setPosition(myLatLng);
      // infoWindow.setContent('You are here! Please enter a radius above to begin searching for trailheads near you.');
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

} //create map seen on first loading of the website
function trailApiResults(lat, lon, radius) { // fetch JSON objects from trailAPI
  let myHeaders = new Headers();
  myHeaders.append('X-Mashape-Key', localStorage.TRAIL_KEY);
  myHeaders.append('Accept', 'text/plain');
  let promise = fetch(`https://trailapi-trailapi.p.mashape.com/?lat=${lat}&limit=1000&lon=${lon}&radius=${radius}`, {
    method: 'GET',
    headers: myHeaders
  }).then(function(response) {
    let responseJSON = response.json();
    return responseJSON;
  }).then(function(json) {
    let places = json.places;
    return places;
  });
  return promise;
} //initial fetch function
function handleLocationError(browserHasGeolocation, infoWindow, myLatLng) { //handle geolocation problems
  infoWindow.setPosition(myLatLng);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
} //displays error message if browser doesn't support geolocation with HTML5
