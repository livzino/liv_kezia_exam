import React from "react";

export default function Title(props) {
  return (
    <div className="titlecontainer">
      <div style={{ fontFamily: "Syncopate, sans-serif", fontWeight: 700 }} className="titletxt">
        {props.title}
      </div>
      <div className="titleline"></div>
    </div>
  );
}
