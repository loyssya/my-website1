 const apikey = "d16289f37ffcda3ba49b652f6fcc41b5";


// const locationA = $('#location')
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition);
//     } else { 
//         locationA.text( "Geolocation is not supported by this browser.");
//     }

// function showPosition(position){
//     console.log(position)
//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;
//     $.get( `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${apikey}`,
//     function( data ) {
//    console.log(data)
//    });
   
// }

$.get("http://ipinfo.io", function(response) {
    console.log(response);
    const [lat , lon] = response.loc.split(",");
    $.get( `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,daily&appid=${apikey}`,
    function( data ) {
   console.log(data)
   $("#city").text(response.city)
   $("#temp").text(data.current.temp)
   });
}, "jsonp");
