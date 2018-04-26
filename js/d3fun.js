// var troutSVG = d3.select("#troutSVG")
//     .attr("width", 200);

var eye = d3.select("#Iris_1_");

function update() {
    eye.transition()
        .ease(d3.easeLinear)
        .duration(9000)
        .attr("transform", translate)
    console.log("here we go");
}

function translate(d) {
    return "translate(" + d + "," + 100 + ")";
  }

update();
