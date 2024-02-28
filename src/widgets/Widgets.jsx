import React, { useState } from "react";
import "./Widgets.scss";
import { MdOutlineWidgets } from "react-icons/md";

import ProductivityChart from "../components/ProductivityChart/ProductivityChart";
import DigitalClock from "../components/DigitalClock/DigitalClock";
function Widgets() {
  
  return (
    <div className="widgets">
     
          <div className="widget">
            <ProductivityChart />
          </div>
          <div className="widget">
            <DigitalClock />
          </div>
       
    </div>
  );
}

export default Widgets;
