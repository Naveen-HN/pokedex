import React from "react";
import CapturedFilter from "../CapturedFilter/CapturedFilter";
import TypeFilter from "../TypeFilter/TypeFilter";
import "./styles.css";

export default function Filterbar(props) {
  return (
    <nav
      className="navbar navbar-light bg-light"
      style={{
        width: "75%",
      }}
    >
      <div className="selectFilters">
        <TypeFilter
          data={props.data}
          handleTypeChange={props.handleTypeChange}
        />{" "}
        <CapturedFilter
          data={props.data}
          handleCapturedChange={props.handleCapturedChange}
        />{" "}
      </div>{" "}
    </nav>
  );
}
