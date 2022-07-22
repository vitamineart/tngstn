function drawChart(){

  // set the dimensions and margins of the graph
  var margin = {top: 20, right: 40, bottom: 30, left: 40},
      width = 650 - margin.left - margin.right,
      height = 350 - margin.top - margin.bottom,
      ease = d3.easeBack;

  // append the svg object to the body of the page
  var svG = d3.select("#chart")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

  // Create data
  var data = [
      {x:1965, y:0.25},
      {x:1967, y:0.4},
      {x:1968, y:0.32},
      {x:1970, y:0.55},
      {x:1973, y:0.43},
      {x:1974, y:0.45},
      {x:1975, y:0.65},
      {x:1976, y:0.68},
      {x:1979, y:0.99},
      {x:1980, y:0.97},
      {x:1983, y:1.25},
      {x:1984, y:1.2},
      {x:1985, y:1.34},
      {x:1986, y:1.31},
      {x:1987, y:1.57},
      {x:1988, y:1.52},
      {x:1989, y:1.78},
      {x:1992, y:1.55},
      {x:1993, y:1.72},
      {x:1994, y:2.2},
      {x:1995, y:1.99},
      {x:1997, y:2.3},
      {x:1998, y:2.8},
      {x:1999, y:3.8},
      {x:2001, y:3.6},
      {x:2003, y:3.76},
      {x:2004, y:3.82},
      {x:2005, y:3.5},
      {x:2006, y:3.9},
      {x:2007, y:4.2},
      {x:2008, y:4.17},
      {x:2009, y:4.24},
      {x:2011, y:4.85},
      {x:2012, y:5.25},
      {x:2014, y:5.75},
      {x:2015, y:6.2},
      {x:2017, y:6.4},
      {x:2019, y:6.28},
      {x:2020, y:6.8}
    ]

  var pointYears = [1970, 1979, 1986, 1994, 1999, 2005, 2012, 2019];

  var dataPoints = data.filter(el => pointYears.includes(el.x));

  // X scale and Axis
  var xScale = d3.scaleLinear()
      .domain([1965, 2020])         // This is the min and the max of the data: 0 to 100 if percentages
      .range([0, width]);       // This is the corresponding value I want in Pixel



  var x_axis = d3.axisBottom(xScale)
    .ticks(9).tickFormat((x,index)=> index !== 0 ? `'${x}` : "").tickSizeInner(-height);

  svG
    .append('g')
    .attr("transform", "translate(0," + height + ")")
    .call(x_axis);


  // X scale and Axis
  var yScale = d3.scaleLinear()
      .domain([0, 7])         // This is the min and the max of the data: 0 to 100 if percentages
      .range([height, 0]);       // This is the corresponding value I want in Pixel
  var y_axis = d3.axisLeft(yScale);
  y_axis.ticks(9).tickFormat((y,index)=> index !== 0 ? `$${y}M` : `${y}`).tickSizeInner(-width);

  svG
    .append('g')
    .call(y_axis);



  /*define line*/
  let lines = d3.line()
    .x(d => xScale(d[0]))
    .y(d => yScale(d[1]));

  /*append line*/
  let path = svG.append("path").attr({
    d: lines(data),
    class: "lineChart"
  });






// Add the line
let line = svG.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "#3D35F1")
    .attr("stroke-width", 2)
    .attr("d", d3.line()
        .x(function(d) { return xScale(d.x) })
        .y(function(d) { return yScale(d.y) })
    )

// from here forward the code is exactly like the original....
var totalLength = line.node().getTotalLength();

line
  .attr("stroke-dasharray", totalLength + " " + totalLength)
  .attr("stroke-dashoffset", totalLength)
  .transition()
  .duration(4000)
  .attr("stroke-dashoffset", 0)




// Add 3 dots for 0, 50 and 100%
let points = svG.selectAll("w")
  .data(dataPoints)
  .enter()
  .append("circle")
    .attr("cx", function(d){ return xScale(d.x) - 500 })
    .attr("cy", function(d){ return yScale(d.y) - 500 })
    .attr("fill", "white")
    .attr('stroke', '#3D35F1')
    .style("filter", "blur(3px)")


points
    .attr('cy', 0)
    .attr('cx', 0)
    .attr("r", 0)
    .attr("opacity", 0)
    .attr('stroke-width', 0)
    .transition()
    .ease(ease)
    .delay((d, i) => i * 120 + 500)
    .duration(800)
    .ease(ease)
    .attr("cx", function(d){ return xScale(d.x) })
    .attr("cy", function(d){ return yScale(d.y) })
    .attr("r", 3.2)
    .attr('stroke-width', 2.2)
    .attr("opacity", 1)
    .style("filter", "none")

}


  const observer = new IntersectionObserver((entry, observer) => {
      entry.forEach(entry => {
          if (entry.isIntersecting) {
             drawChart();
             console.log(`Drawing a chart...`)
             console.log(entry.threshold)
             observer.unobserve(entry.target)
          }
      })
  }, { threshold: 0.4 })

  const target = document.querySelector('#chart-container')
  observer.observe(target);
