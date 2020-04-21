/**
 * Emory Walsh & Sophie Nichol
 * SoftDev pd9
 * K18 -- Come Up For Air
 * 2020-04-21
 */

 const width = 800;
 const height = 500;

 d3.select("#read")
   .on("click", () => {
       //console.log("start")
       makeGraph(reading(data))
   });

 d3.select("#math")
   .on("click", () => {
       //console.log("start")
       makeGraph(math(data))
   });

 d3.select("#write")
   .on("click", () => {
     //console.log("start")
     makeGraph(writing(data))
   });


 function reading(origData){
   reading = []
   for(let step = 0; step < origData.length; step++){
     reading.push(origData[step]["reading"])
   }
   return reading
 }

 function math(origData){
   math = []
   for(let step = 0; step < origData.length; step++){
     math.push(origData[step]["math"])
   }
   return math
 }

 function writing(origData){
   writing = []
   for(let step = 0; step < origData.length; step++){
     writing.push(origData[step]["writing"])
   }
   return writing
 }

 function makeGraph(data){
   //console.log(data)
   data_viz.innerHTML = ""

   min = d3.min(data);
   max = d3.max(data);
   domain = [min,max];

   var margin = { top: 30, right: 30, bottom: 30, left: 50 },
     width = 460 - margin.left - margin.right,
     height = 400 - margin.top - margin.bottom;

   // The number of bins
   Nbin = 10;

   var x = d3
     .scaleLinear()
     .domain([0, 800])
     .range([0, width]);

   var histogram = d3
     .histogram()
     .domain(x.domain()) // then the domain of the graphic
     .thresholds(x.ticks(Nbin)); // then the numbers of bins

   // And apply this function to data to get the bins
   var bins = histogram(data);

   // Add the svg element to the body and set the dimensions and margins of the graph
   var svg = d3.select("#data_viz")
     .append("svg")
     .attr("width", width + margin.left + margin.right)
     .attr("height", height + margin.top + margin.bottom)
     .append("g")
     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

   svg
     .append("g")
     .attr("transform", "translate(0," + height + ")")
     .call(d3.axisBottom(x));

   var y = d3
     .scaleLinear()
     .range([height, 0])
     .domain([0, 300]
    );

   svg.append("g").call(d3.axisLeft(y));

   svg
     .selectAll("rect")
     .data(bins)
     .enter()
     .append("rect")
     .attr("x", 1)
     .attr("transform", function(d) {
       return "translate(" + x(d.x0) + "," + y(d.length) + ")";
     })
     .attr("width", function(d) {
       return x(d.x1) - x(d.x0) - 1;
     })
     .attr("height", function(d) {
       return height - y(d.length);
     })
     .style("fill", "#69b3a2");
 }



 fetch("/data")
   .then((response) => response.json())
   .then((entries) => {
   data = entries;

 });


 d3.select("#end")
   .on("click", () => {
     data_viz.innerHTML = ""
     console.log("stop")
 });
