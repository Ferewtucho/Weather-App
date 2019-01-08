$(document).ready(function() {
  //
  navigator.geolocation.getCurrentPosition(success, error);
  function success(pos) {
    weather();
    function weather() {
      var lat = pos.coords.latitude;
      var long = pos.coords.longitude;
      var apiKey = "****************************";
      var url = `http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${long}&cnt=10`;

      $.ajax({
        url: url + "&units=imperial&APPID=" + apiKey,
        type: "GET",
        dataType: "jsonp",
        success: function(data) {
          console.log(data);
          var list = data.list;
          for (var i = 0; i < list.length; i++) {
            // console.log(list[i])
          }
          var city = list[0].name;
          $("#city").html(city);
          var temp = Math.round(list[0].main.temp);
          $("#temp").html(temp);
          var desc = list[0].weather[0].description;
          $("#desc").html(desc);
          var min = Math.round(list[0].main.temp_min);
          $("#min").html(" / " + min);
          var max = Math.round(list[0].main.temp_max);
          $("#max").html(max);
          var icon =
            "http://openweathermap.org/img/w/" +
            list[0].weather[0].icon +
            ".png";
          $("#icon").attr("src", icon);
        }
      });
    }
  }
  function error() {
    console.log("error");
  }

  $("#submit").on("click", function(e) {
    e.preventDefault();
    //

    var one = $("#pac-input").val();
    console.log(one);
    var spl = one.split(",");
    var city = spl[0];
    console.log(city);
    var url = "api.openweathermap.org/data/2.5/weather?q=";
    var apiKey = "****************************";

    // http://api.openweathermap.org/data/2.5/weather?q=Philadelphia&APPID=APIKEY

    if (city != "") {
      $.ajax({
        url: "http://" + url + city + "&units=imperial&APPID=" + apiKey,
        type: "GET",
        dataType: "jsonp",
        success: function(data) {
          console.log(data);
          update(data);
          $("#pac-input").val("");
        }
      });
    } else {
      // console.log("error");
      // $("#error").html("<h2> Filled can not be empty</h2>");
    }
  });
  $("#pac-input").keypress(function(e) {
    if (e.which == 13) {
      $("#submit").click();
    }
  });
  $("#pac-input").click(function(e) {
    $("#submit").click();
  });
});
function update(data) {
  var city = data.name;
  var temp = Math.round(data.main.temp);
  var desc = data.weather[0].description;
  var min = Math.round(data.main.temp_min);
  var max = Math.round(data.main.temp_max);
  var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

  $("#city").html(city);
  $("#temp").html(temp);
  $("#desc").html(desc);
  $("#min").html(" / " + min);
  $("#max").html(max);
  $("#icon").attr("src", icon);
}
