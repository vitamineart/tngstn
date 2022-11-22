function drawChart(){

  // set the dimensions and margins of the graph
  var margin = {top: 20, right: 40, bottom: 30, left: 40},
      width = 650 - margin.left - margin.right,
      height = 350 - margin.top - margin.bottom,
      animationDelay = 2000;


  const createGradient = select => {
    const gradient = select
      .select('defs')
        .append('linearGradient')
          .attr('id', 'gradient')
          .attr('x1', '0%')
          .attr('y1', '100%')
          .attr('x2', '0%')
          .attr('y2', '0%');

    gradient
      .append('stop')
        .attr('offset', '0%')
        .attr('style', 'stop-color:#2028E833;');

    gradient
      .append('stop')
        .attr('offset', '100%')
        .attr('style', 'stop-color:#2028E8bb;');
  }

  // append the svg object to the body of the page
  var svG = d3.select("#chart")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .call(responsivefy) // Call responsivefy to make the chart responsive
            .append('g').
        attr('transform', `translate(${margin.left}, ${margin.top})`);

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
    .ticks(9)
    .tickFormat((x,index)=> index !== 0 ? `'${x}` : "")
    .tickSizeInner(-height);

  svG
    .append('g')
    .attr("transform", "translate(0," + height + ")")
    .call(x_axis);


  // X scale and Axis
  var yScale = d3.scaleLinear()
      .domain([0, 7])
      .range([height, 0]);
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

   // Add the area
  svG.append("path")
   .datum(data)
   .attr("fill", "url(#gradient)")
   .attr("stroke", "none")
   .attr("fill-opacity", .0)
   .transition()
   .delay(animationDelay)
   .duration(10000)
   .attr("fill-opacity", .35)
   .attr("d", d3.area()
     .x(function(d) { return xScale(d.x) })
     .y0( height )
     .y1(function(d) { return yScale(d.y) })
     )

  svG.append('defs');
  svG.call(createGradient);


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
  .delay(animationDelay)
  .duration(6000)
  .ease(d3.easeBounceIn)
  .attr("stroke-dashoffset", 0)






// Add 3 dots for 0, 50 and 100%
let points = svG.selectAll("w")
  .data(dataPoints)
  .enter()
  .append("circle")


  points
    .attr("fill", "#3D35F1")
    .attr('stroke', 'white')
    .attr('cy', height)
    .attr('cx', function(d){ return xScale(d.x)})
    .attr("r", 0)
    .attr("opacity", 0)
    .attr('stroke-width', 0)
    .attr("fill", "#3D35F1")
    .transition()
    // .delay(animationDelay)
    .ease(d3.easeBackOut)
    .delay((d, i) => i * 120 + animationDelay/2)
    .duration(1000)
    .ease(d3.easeBackOut)
    .attr("cx", function(d){ return xScale(d.x) })
    .attr("cy", function(d){ return yScale(d.y) })
    .attr("r", 3)
    .attr('stroke-width', 2.3)
    .attr("fill", "white")
    .attr('stroke', '#3D35F1')
    .attr("opacity", 1)



    function responsivefy(svg) {

      // Container is the DOM element, svg is appended.
      // Then we measure the container and find its
      // aspect ratio.
      const container = d3.select(svg.node().parentNode),
          width = parseInt(svg.style('width'), 10),
          height = parseInt(svg.style('height'), 10),
          aspect = width / height;

      // Add viewBox attribute to set the value to initial size
      // add preserveAspectRatio attribute to specify how to scale
      // and call resize so that svg resizes on page load
      svg.attr('viewBox', `0 0 ${width} ${height}`).
      attr('preserveAspectRatio', 'xMinYMid').
      call(resize);

      d3.select(window).on('resize.' + container.attr('id'), resize);

      function resize() {
          const targetWidth = parseInt(container.style('width'));
          svg.attr('width', targetWidth);
          svg.attr('height', Math.round(targetWidth / aspect));
      }
    }

}



const observer = new IntersectionObserver((entry, observer) => {
    entry.forEach(entry => {
        if (entry.isIntersecting) {
            drawChart();
            observer.unobserve(entry.target)
        }
    })
}, { threshold: 0.2 })

const target = document.querySelector('#chart-container')
observer.observe(target);



// gsap.from('#megaphone', {
//   x: 300,
//   y: 100,
//   opacity: 0,
//   scale: 0.1,
//   duration: 1,
//   delay: 1,
//   ease: "back.out(1.9)"
// })
