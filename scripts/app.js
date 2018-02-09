// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.78, lng: -122.44},
    zoom: 2
  });
  //USGS site
  $.ajax({
    method: "GET",
    url: weekly_quakes_endpoint,
    data: {

    },
    success: function(response){
      $('#info').empty();
      $(response.features).each(function(){
        $("#info").append(`<p>${this.properties.title}</p>`);
        var marker = new google.maps.Marker({
          position: {
            lat: parseInt(this.geometry.coordinates[1]),
            lng: parseInt(this.geometry.coordinates[0])
          },
          map: map,
          icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
        });
      })
    },
      error: function(response){
        console.log('Dang it!');
      },
      beforeSend: function(){
        $("#info").append('<img src ="https://media.giphy.com/media/3o7bubiK9vDtxXCOgU/giphy.gif">');
      }
    })

  });
