const w            = 800;
const h            = 800;
const padding      = 60;
const r            = 150;
const maxHeight    = Math.min( w/2 - r, h/2 - r );
var parser         = d3.timeParse("%m/%d/%Y");


function fractionToRadian( fraction ){
    return fraction * 2 * Math.PI;
}

function radianToDegree( radian ){
    return (radian / (2 * Math.PI)) * 360;
}

// Outputs x coordinate on circle, beginning at the top and moving clockwise
function xCoord( angle, radius ){
    return radius * Math.cos( angle - Math.PI / 2 ) + (w/2);
}

// Outputs y coordinate on circle, beginning at the top and moving clockwise
function yCoord( angle, radius ){
    return radius * Math.sin( angle - Math.PI / 2 ) + (h/2);
}

function slugify( text ){
    return text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
        ;
}

const svg = d3.select("article")
              .append("svg")
              .attr("width", w)
              .attr("height", h)
    
svg.append("circle")
    .attr("cx", w / 2)
    .attr("cy", h / 2)
    .attr("r", r)
    .attr("fill", "none")
    .attr("stroke", "black")


d3.csv("/assets/astronauts.csv", function(data) {
    data.forEach(function(d) {

        // Convert strings to numbers
        d["Space Flight (hr)"] = +d["Space Flight (hr)"];

        // Parse date
        d["Birth Date"] = parser( d["Birth Date"] );

        // Categorize Military Branch Data
        d["Military Branch"] = d["Military Branch"].replace(" (Retired)", "")
        d["Military Branch"] = d["Military Branch"].replace(" Reserves", "")
        if (d["Military Branch"].length < 1 ){
            d["Military Branch"] = "No Affiliation"
        }
      });

      // Sort data by Military Branch
      data.sort(function(x, y){
        return d3.ascending(x["Military Branch"], y["Military Branch"]);
     })

     // Print
     console.log(data[data.length -1]); 

///////////////////////

    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(data, (d, i) => i)])
                    .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                    .domain([0, d3.max(data, (d) => d["Space Flight (hr)"])])
                    .range([h - padding, padding]);

    const radianScale = d3.scaleLinear()
                    .domain([0, d3.max(data, (d, i) => i)])
                    .range([0, Math.PI * 2]);

    const radiusScale = d3.scaleLinear()
                    .domain([0, d3.max(data, (d) => d["Space Flight (hr)"])])
                    .range([maxHeight, 0]);

    // Create an ordinal scale for every Military Branch category 
    const branchScale = d3.scaleOrdinal()
                    .domain(d3.map(data, function(d){return d["Military Branch"];}).keys())
                    .range(["#032963", "#0553C7", "#0664ED", "#1F76F9", "#043E94", "#5094FA", "#82B3FC"])

    // Create bars for each astronaut
    svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i)   => xCoord(radianScale(i), r ))
        .attr("y", (d, i)   => yCoord(radianScale(i), r ))
        .attr("height", (d) => maxHeight - radiusScale( d["Space Flight (hr)"] ))
        .attr("transform", (d, i) => "rotate(" + (180 + radianToDegree(radianScale( i ))) + " " + xCoord(radianScale(i), r ) + " " + yCoord(radianScale(i), r ) + ")")
        .attr("width", 2)
        .attr("fill", (d) => branchScale(d["Military Branch"]))
        .attr("class", (d) => slugify(d["Military Branch"]))
        // Add tooltip
        .append("title")
        .text((d)=> d["Space Flight (hr)"] + ", " + d["Name"])


    // svg.selectAll("text")
    //     .data(data)
    //     .enter()
    //     .append("text")
    //     .text((d) =>  (d["Space Flight (hr)"] + "," + d["Name"]))
    //     .attr("x", (d, i)   => xCoord(radianScale(i), radiusScale( d["Space Flight (hr)"] ) ))
    //     .attr("y", (d, i)   => yCoord(radianScale(i), radiusScale( d["Space Flight (hr)"] ) ))
    //     .style("font-size", function(d) {
    //         if (d["Space Flight (hr)"] === 0) {return "0px"}
    //         else 	{ return "7px" }
    //     ;})

    // const xAxis = d3.axisBottom(xScale);

    // svg.append("g")
    // .attr("transform", "translate(0," + (h - padding) + ")")
    // .call(xAxis);

    // Create classes for branchScale categories
    // fill with CSS, then add hover fills as well
    // var style = document.createElement('style');
    // style.type = 'text/css';
    // style.innerHTML = '.cssClass { color: #F00; }';
    // document.getElementsByTagName('head')[0].appendChild(style);
    // document.getElementById('someElementId').className = 'cssClass';

    // Create axis for space flight hrs
    const yAxis = d3.axisRight(radiusScale);

    // Add radial axis
    svg.append("g")
        .attr("transform", "translate(" + (w/2 + 3) + ", " + 0 + ")")
        .call(yAxis);

    // text label for the y axis
    svg.append("text")
        .attr("fill", "none")
        .attr("stroke", "rgb(255, 255, 255)")
        .attr("stroke-linejoin", "round")
        .attr("stroke-width", "3")
        .attr("y", (h/2 - r) / 2 )
        .attr("x", h/2 + 100 )
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Hours in Space")
    svg.append("text")
        .attr("y", (h/2 - r) / 2 )
        .attr("x", h/2 + 100 )
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Hours in Space")


    // Create legend for military branch color data
    svg.append("g")
      .attr("class", "legendOrdinal")
      .attr("transform", "translate(" + (w/2 - r/2) + ", " + (h/2 - r/2) + ")");

    var legendOrdinal = d3.legendColor()
    	.scale(branchScale);
    
    svg.select(".legendOrdinal")
	  	.call(legendOrdinal);
    

////////////////////////




  });

