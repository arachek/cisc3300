$(document).ready(function() {
    $.ajax({
        url: 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m',
        type: 'GET',
        success: function(data) {
            displayWeather(data);
        },
        error: function(xhr, status, error) {
            console.error('Error fetching weather data:', error);
        }
    });

    // Function to display weather data
    function displayWeather(data) {
        var hourlyData = data.hourly;

        var weatherHtml = '';

        $.each(hourlyData.time, function(index, time) {
            var temperature = hourlyData.temperature_2m[index];
            weatherHtml += '<div>';
            weatherHtml += '<p>Time: ' + time + '</p>';
            weatherHtml += '<p>Temperature: ' + temperature + '°C</p>';
            weatherHtml += '</div>';
        });

        $('#weather-data').html(weatherHtml);
    }
});
