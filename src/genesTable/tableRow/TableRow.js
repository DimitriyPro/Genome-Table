import React, { useState, useEffect } from "react";
import { RowChart } from "./rowChart/RowChart.js"

export const TableRow = (props) => {

let [expanded, toggleExpand] = useState(false);

const toggleRow = (e) => {
  toggleExpand(!expanded);
}


return (    
<div>
	<div className="heading">
    <div onClick={ toggleRow }  className="expandCol"> { expanded ? "-" : "+" } </div>
    <div className="col">{props.data.target.gene_info.symbol}</div>
    <div className="col"> {props.data.target.id} </div>
    <div className="col"> {props.data.target.gene_info.name} </div>             
    <div className="col"> {props.data.association_score.overall} </div>     
  </div>
  { expanded && <RowChart score={props.data.association_score.datatypes} />}
</div>
);

};