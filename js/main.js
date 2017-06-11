var key='a29c9f151391d0cdcd5f982278943e69';
$(document).ready(function(){
$('#weather-location').click(function(){
    var city=$('#location').val();
    $('#location').val("");
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial'+'&appid='+key,function(response){

        $('.showWeather').text("The city you have chosen is "+city+". ");
        $('.country').text("Country: "+response.sys.country);
        $('.city').text("Temp: "+response.main.temp+"F");
        $('.humidity').text("Humidity is "+response.main.humidity+".");
        $('.description').text("Weather Conditions: "+response.weather[0].description);
        var icon = ("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png'>");
        $('.icon').html(icon);
       // $('.icon').image("<img src="+response.weather[0].icon);

        //create a json object
    });

});

});
