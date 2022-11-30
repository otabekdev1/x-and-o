import React from "react";
import "./resetbtn.css";
export default function ResetButton({ resetboard }) {
  return (
    <button className="rest-btn" onClick={resetboard}>
      reset
    </button>
  );
}
