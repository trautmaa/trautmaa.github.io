// Constants
var height = 300;
var width = 600;

// Create svg
var svg = d3.select("body")
    .append("svg")
    .attr("height", height)
    .attr("width", width)

// Load data
d3.csv("/assets/gvaga.csv", function(data) {

    // Retrieve canvas 2d context
    var canvas = document.getElementById("a");
    var context = canvas.getContext("2d");

    // Remove data points with missing latitude longitude values
    var i = data.length;
    while (i--) {
        if ( isNaN( data[i].latitude) | isNaN( data[i].longitude) ) {
            data.splice(i, 1);
        } 
    }
    
    // Convert strings to numbers.
    data.forEach(function(d) {
        d.latitude = +d.latitude;
        d.longitude = +d.longitude;
    });

    // Get min and max latitude and longitude
    var latExtent = d3.extent(data, function(d) { return d.latitude; } );
    var longExtent = d3.extent(data, function(d) { return d.longitude; } );
    var minLat = latExtent[0];
    var maxLat = latExtent[1];
    var minLong = longExtent[0];
    var maxLong = longExtent[1];

    // Create scales based on lowest and highest values of lat and long
    var latitudeScale = d3.scaleLinear()
        .domain([minLat,maxLat])
        .range([height,0]);
    var longitudeScale = d3.scaleLinear()
        .domain([minLong,maxLong])
        .range([0,width]);

    var i = data.length;

    // Iterate through data, scale and round lat and long
    while (i--) {

        // Run latitude and longitude through linear scale and round
        var lat = Math.round( latitudeScale( data[i].latitude ) );
        var long = Math.round( longitudeScale( data[i].longitude ) );
        data[i].latitude = lat;
        data[i].longitude = long;

        // Next line fills the canvas with these points
        // context.fillRect(data[i].longitude, data[i].latitude, 1, 1);
        
    }

    // Draw circles for each datapoint
    svg.selectAll("circle")
        .data(data)
        .enter().append("circle")
            .attr("cx", function( d ) { return d.longitude; })
            .attr("cy", function( d ) { return d.latitude; })
            .attr("r", 0.5);

});

