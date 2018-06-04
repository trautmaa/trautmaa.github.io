const w = 500;
const h = 500;
const padding = 60;

const svg = d3.select("body")
              .append("svg")
              .attr("width", w)
              .attr("height", h);


d3.csv("/assets/astronauts.csv", function(data) {
    data.forEach(function(d) {
        d["Space Flight (hr)"] = +d["Space Flight (hr)"];
      });
      console.log(data[1]);
///////////////////////

    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(data, (d, i) => i)])
                    .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                    .domain([0, d3.max(data, (d) => d["Space Flight (hr)"])])
                    .range([h - padding, padding]);

    svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => xScale( i ))
        .attr("width", 1)
        .attr("y",(d)       => yScale( d["Space Flight (hr)"] ))
        .attr("height", (d) => h - padding - yScale( d["Space Flight (hr)"] ))
        .attr("fill", "navy")
        // .attr("transform", (d, i) => "rotate(45 " + xScale( i ) + " " + (h - padding) + ")")

    svg.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text((d) =>  (d["Space Flight (hr)"] + "," + d["Name"]))
        .attr("x", (d, i) => xScale( i ))
        .attr("y", (d) => yScale( d["Space Flight (hr)"] ))

    const xAxis = d3.axisBottom(xScale);

    svg.append("g")
    .attr("transform", "translate(0," + (h - padding) + ")")
    .call(xAxis);

    // Add your code below this line

    const yAxis = d3.axisLeft(yScale);

    svg.append("g")
    .attr("transform", "translate(" + (w - padding) + ", 0)")
    .call(yAxis);

    // Add your code above this line

////////////////////////




  });

