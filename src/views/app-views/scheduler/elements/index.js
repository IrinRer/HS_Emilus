import React from "react";
import ComponentChair from "./card/ComponentChair";
import ComponentTable from "./card/ComponentTable";

export const Elements = () => {
  return (
    <div className="api-container-scheduler ">
      <div className="api-scheduler-block">
        <ComponentChair />
        <ComponentTable/>
      </div>
      <div className="api-scheduler-board"> </div>
    </div>
  );
};

export default Elements;
