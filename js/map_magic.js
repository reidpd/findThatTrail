let map, myLat, myLng, myLatLng, places, myMap;
let gmarkers = [];

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

  latLon() {
    return [this.lat, this.lon];
  }

  emptyActivities(activities) {
    return (this.activities.length===0);
  }

  activityTypes(activities) {
    let activityTypes = [];
    if (!emptyActivities(this.activities)) {
      for (let i = 0; i < this.activities.length; i++) {
        activityTypes.push(this.activities[i].activity_type_name);
      }
    }
    return activityTypes.join(', ');
  }

  thumbnails(activities) {
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

  milage(activities) {
    let mileages = [];
    for (let h = 0; h < this.activities.length; h++) { mileages.push(this.activities[i].length); }
    return mileages.join(', ');
  }

}

let myForm = document.getElementsByTagName("form")[0]; //target form inputs
myForm.addEventListener('submit', function(evt) {
  evt.preventDefault(); //stop page from reloading
  user_radius = myForm.elements[0].value; //target radius value desired by user
  places = trailApiResults(myLat, myLng, user_radius) //initial fetch gets JSON data from API
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
      let place = new Place(data[i].city, data[i].state, data[i].name, data[i].unique_id, data[i].directions, data[i].lat, data[i].lon, data[i].description, data[i].activities);
      console.log(place);
      mapMaker(place);
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
  });
});

function contentStringGenerator(place) {
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
  finale+=`<a href="#" class="blue-text">GOOGLE DIRECTIONS</a>`;
  finale+=`<a href="#" class="blue-text">INSTAGRAM</a>`;
  finale+=`<a href="#" class="blue-text">CURRENT WEATHER</a>`;
  finale+=`</div>`;
  finale+=`<div class="card-reveal">`;
  let revealString = `<span class="card-title grey-text text-darken-4">${place.name}<i class="material-icons right">close</i></span>`;
  revealString+=`<p><strong>Directions:</strong> ${place.directions}</p>`
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

function mapMaker(place) {
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
    marker.addListener('click', function() {
        infowindow.open(myMap, marker);
    });
    marker.setMap(myMap);
}

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

    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

} //create map seen on first loading of the website
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
    return places;
  });
  return promise;
} //initial fetch function
function handleLocationError(browserHasGeolocation, infoWindow, myLatLng) {
  infoWindow.setPosition(myLatLng);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
} //displays error message if browser doesn't support geolocation with HTML5
