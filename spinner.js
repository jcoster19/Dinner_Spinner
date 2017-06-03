var padding = {
  top: 20,
  right: 40,
  bottom: 0,
  left: 0
},
//width and height of the restourant name area
w = 400 - padding.left - padding.right,
h = 400 - padding.top - padding.bottom,
// calculating the radius of the spin
r = Math.min(w, h) / 2,
rotation = 0,
oldrotation = 0,
picked = 100000,
oldpick = [],
color = d3.scale.category20();
// Labling the spinner with default restourant
var data = [{
  "label": "Chinese",
  "restourantInfo": "The Spinner Chooses Chinese Restourant For You! Would you be interested on this one",
},
{
  "label": "korean",
  "restourantInfo": "The Spinner Chooses Korean Restourant For You! Would you be interested on this one",
},
{
  "label": "Japanese",
  "restourantInfo": "The Spinner Chooses Japanese Restourant For You! Would you be interested on this one",
},
{
  "label": "Nepalese",
  "restourantInfo": "The Spinner Chooses Nepalese Restourant For You! Would you be interested on this one",
},
{
  "label": "Thai",
  "restourantInfo": "The Spinner Chooses Thai Restourant For You! Would you be interested on this one",
},
{
  "label": "Viatnami",
  "restourantInfo": "The Spinner Chooses Viatnami Restourant For You! Would you be interested on this one",
},
{
  "label": "Indian",
  "restourantInfo": "The Spinner Chooses Indian Restourant For You! Would you be interested on this one",
},
{
  "label": "Afgan",
  "restourantInfo": "The Spinner Chooses Afgan Restourant For You! Would you be interested on this one",
},
{
  "label": "Ethiopean",
  "restourantInfo": "The Spinner Chooses Ethiopean Restourant For You! Would you be interested on this one",
},
{
  "label": "Italian",
  "restourantInfo": "The Spinner Chooses Italian Restourant For You! Would you be interested on this one",
},
{
  "label": "French",
  "restourantInfo": "The Spinner Chooses French Restourant For You! Would you be interested on this one",
},
{
  "label": "Malasyan",
  "restourantInfo": "The Spinner Chooses Malasyan Restourant For You! Would you be interested on this one",
},
{
  "label": "American",
  "restourantInfo": "The Spinner Chooses American Restourant For You! Would you be interested on this one",
},
{
  "label": "Jamaican",
  "restourantInfo": "The Spinner Chooses Jamaican Restourant For You! Would you be interested on this one",
},
{
  "label": "Maxican",
  "restourantInfo": "The Spinner Chooses Maxican Restourant For You! Would you be interested on this one",
},
{
  "label": "Hawaian",
  "restourantInfo": "The Spinner Chooses Hawaian Restourant For You! Would you be interested on this one",
},
];
//creating the chart for the spinner using svg(scalable vector graphics)
var svg = d3.select('#chart')
.append("svg")
.data([data])
.attr("width", w + padding.left + padding.right)
.attr("height", h + padding.top + padding.bottom);
var container = svg.append("g")
.attr("class", "chartholder")
.attr("transform", "translate(" + (w / 2 + padding.left) + "," + (h / 2 + padding.top) + ")");
var vis = container
.append("g");
var pie = d3.layout.pie().sort(null).value(function(d) {
  return 1;
});
// declare an arc generator function
var arc = d3.svg.arc().outerRadius(r);
// select paths, use arc generator to draw
var arcs = vis.selectAll("g.slice")
.data(pie)
.enter()
.append("g")
.attr("class", "slice");
arcs.append("path")
.attr("fill", function(d, i) {
  return color(i);
})
.attr("d", function(d) {
  return arc(d);
});
// adding the text from the data
arcs.append("text").attr("transform", function(d) {
  d.innerRadius = 0;
  d.outerRadius = r;
  d.angle = (d.startAngle + d.endAngle) / 2;
  return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius - 10) + ")";
})
.attr("text-anchor", "end")
.text(function(d, i) {
  return data[i].label;
});
//adding click function for the chart/container
// when you click anywhere in the chart it will spin arround
container.on("click", spin);

function spin(d) {
  container.on("click", null);
  //all slices have been seen, all done
  console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
  if (oldpick.length == data.length) {
    console.log("done");
    container.on("click", null);
    return;
  }
  var ps = 360 / data.length,
  pieslice = Math.round(1440 / data.length),
  rng = Math.floor((Math.random() * 1440) + 360);
  rotation = (Math.round(rng / ps) * ps);
  picked = Math.round(data.length - (rotation % 360) / ps);
  picked = picked >= data.length ? (picked % data.length) : picked;
  if (oldpick.indexOf(picked) !== -1) {
    d3.select(this).call(spin);
    return;
  } else {
    oldpick.push(picked);
  }
  rotation += 90 - Math.round(ps / 2);
  vis.transition()
  .duration(3000)
  .attrTween("transform", rotTween)
  .each("end", function() {
    //mark the restourant as seen
    d3.select(".slice:nth-child(" + (picked + 1) + ") path")
    //hight light the selected restourant yellow color
    .attr("fill", "yellow");
    //populate the restourant
    d3.select("#restourantInfo h1")
    .text(data[picked].restourantInfo);
    oldrotation = rotation;
    //
    container.on("click", spin);
  });
}
//creating the arrow and giving a color of black
svg.append("g")
.attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h / 2) + padding.top) + ")")
.append("path")
.attr("d", "M-" + (r * .15) + ",0L0," + (r * .05) + "L0,-" + (r * .05) + "Z")
.style({
  "fill": "black"
});
//draw spin circle
container.append("circle")
.attr("cx", 0)
.attr("cy", 0)
.attr("r", 60)
.style({
  "fill": "white",
  "cursor": "pointer"
});
//adding text to the spinner and seeting it bold, 30px,
container.append("text")
.attr("x", 0)
.attr("y", 15)
.attr("text-anchor", "middle")
.text("SPIN")
.style({
  "font-weight": "bold",
  "font-size": "30px"
});
//
function rotTween(to) {
  var i = d3.interpolate(oldrotation % 360, rotation);
  return function(t) {
    return "rotate(" + i(t) + ")";
  };
}
function getRandomNumbers() {
  var array = new Uint16Array(1000);
  var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);
  if (window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function") {
    window.crypto.getRandomValues(array);
    console.log("works");
  } else {
    // get crappy random numbers
    for (var i = 0; i < 1000; i++) {
      array[i] = Math.floor(Math.random() * 100000) + 1;
    }
  }
  return array;
}
