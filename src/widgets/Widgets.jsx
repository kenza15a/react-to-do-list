import React from "react";
import "./Widgets.scss";
import ProductivityChart from "../components/ProductivityChart/ProductivityChart";
import DigitalClock from "../components/DigitalClock/DigitalClock";
function Widgets() {
  return (
    <div className="widgets">
      <div className="widget">
        <ProductivityChart />
      </div>
      <div className="widget">
       <DigitalClock/>
      </div>
    </div>
  );
}

export default Widgets;
