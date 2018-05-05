// var troutSVG = d3.select("#troutSVG")
//     .attr("width", 200);



// function draw_b() {
//     var b_canvas = document.getElementById("a");
//     var context = b_canvas.getContext("2d");
//     //context.fillRect(50, 25, 150, 100);
//     var my_gradient = context.createRadialGradient(0, 0, 5, 100, 100, 50);
//     my_gradient.addColorStop(0, "black");
//     my_gradient.addColorStop(1, "white");
//     context.fillStyle = my_gradient;
//     context.fillRect(0, 0, 300, 225);
//   }

// draw points on canvas

d3.csv("/assets/gvamini.csv", function(data) {

    var height = 300;
    var width = 600;

    var canvas = document.getElementById("a");
    var context = canvas.getContext("2d");

    var latitudeScale = d3.scaleLinear()
        .domain([23,50])
        .range([height,0]);
    var longitudeScale = d3.scaleLinear()
        .domain([-130,-65])
        .range([0,width]);

    var scaledData = [];

    for (var i = 0; i < data.length; i++) {

        // Run latitude and longitude through linear scale and round
        var lat = Math.round( latitudeScale( data[i].latitude ) );
        var long = Math.round( longitudeScale( data[i].longitude ) );

        scaledData[i] = data[i];
        scaledData[i].latitude = lat;
        scaledData[i].longitude = long;
        context.fillRect(scaledData[i].longitude, scaledData[i].latitude, 1, 1);
    }

    console.log(scaledData);




});

