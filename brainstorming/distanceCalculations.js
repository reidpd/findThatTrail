function earthDistance(coord1, coord2) {
  var RADIUS_OF_EARTH = 3961; // miles
  var lat1 = coord1.lat * Math.PI / 180;
  var lat2 = coord2.lat * Math.PI / 180;
  var lon1 = coord1.lon * Math.PI / 180;
  var lon2 = coord2.lon * Math.PI / 180;

  var dlon = lon2 - lon1;
  var dlat = lat2 - lat1;

  var a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(lat1) *
    Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return RADIUS_OF_EARTH * c;
}
