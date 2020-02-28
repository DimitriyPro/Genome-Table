import React, { useState, useEffect } from "react";
import "./GenesTable.css";
import { TableRow } from "./tableRow/TableRow"

export const GenesTable = () => {
  let [data, setData] = useState();

  useEffect(() => {
    if (!data) {
      const request = "https://demo6922545.mockable.io/"
      fetch(request)
        .then(response => response.json())
        .then((newData) => {
          function compare( a, b ) {
            if ( a.association_score.overall < b.association_score.overall ){
              return 1;
            }
            if ( a.association_score.overall > b.association_score.overall ){
              return -1;
            }
            return 0;
          }

          newData.data.sort( compare );
          console.log(newData.data)
          setData(newData.data.splice(0, 5));
      })
    }
  });

return (    
  <div className="genetable">
    <div className="heading">
    <div className="expandCol"></div>
      <div className="headerCol"> Symbol </div>
      <div className="headerCol"> Gene Id </div>
      <div className="headerCol"> Gene name </div>             
      <div className="headerCol"> Overall association score</div>     
    </div>
    { data && data.map((row, index) => {
      return(<TableRow data = { row } key = { index }/>)
    })}
  </div>
);

};
