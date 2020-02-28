import React, { useState, useEffect, useRef } from "react";
import "./RowChart.css"
import { select, axisBottom, axisRight, scaleLinear, scaleBand, axisLeft } from "d3";

export const RowChart = (props) => {

const svgRef = useRef();	

 
var data = [] ;
  for (let [key, value] of Object.entries(props.score)) {
  data.push({source: key, score: value});
}

useEffect(() => {  	

  const svg = select(svgRef.current);

  const xScale = scaleBand()
    .domain(Object.keys(props.score))
    .range([0, 800]);


  const yScale = scaleLinear()
    .domain([0, 1])
    .range([120, 0]);

  const xAxis = axisBottom(xScale).tickValues(Object.keys(props.score));

  svg
    .select(".x-axis")
    .style("transform", "translateY(120px)")
    .call(xAxis);

function make_y_gridlines() {		
 		return axisLeft(yScale)
      .ticks(5)
}

svg.append("g")			
  .attr("class", "grid")
  .call(make_y_gridlines()
      .tickSize(-800)
      .tickFormat("")
  )

svg.append("text")
  .attr("text-anchor", "middle") 
  .attr("transform", "translate(0, 50)rotate(-90)")  
  .text("Score");

svg.append("text")
  .attr("text-anchor", "middle")  
  .attr("transform", "translate(400, 160)") 
  .text("Data type");

svg.append("text")
  .attr("text-anchor", "middle")  
  .attr("transform", "translate(120, -8)") 
  .text("Association score vs data type");

const yAxis = axisRight(yScale).ticks(4);

svg
  .select(".y-axis")
  .style("transform", "translateX(3px)")
  .call(yAxis);

svg
  .selectAll(".bar")
  .data(data)
  .join("rect")
  .attr("class", "bar")
  .style("transform", "scale(1, -1)")
  .attr("x", (value) => xScale(value.source) + 40)
  .attr("y", -120)
  .attr("width", xScale.bandwidth() - 30)
  .transition()
  .attr("fill", "#5DADE2")
  .attr("height", value => 150 - yScale(value.score));
}, [data]);

return (        
   <svg ref={svgRef} className='chart'>
     <g className="x-axis" />
     <g className="y-axis" />
   </svg>
);

};