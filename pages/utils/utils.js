

export function codeAddress(address) {
  var geocoder;
  var map;
  var mapOptions = {
    zoom: 8,
  };
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: address }, function (results, status) {
    if (status == "OK") {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
      });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}
