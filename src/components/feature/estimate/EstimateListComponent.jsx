import React from "react";
import Estimate from "./Estimate";

export const EstimateListComponent = listData => {
  return (
    <div>
      {listData.map((item, index) => (
        <Estimate data={item} index={index} />
      ))}
    </div>
  );
};
