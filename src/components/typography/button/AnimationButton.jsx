import { Button } from "@mui/material";
import React from "react";
import "./Button.css";

const AnimationButton = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <div className="button-circle-wrapper">
        <div className="button-wrapper">
          <div className="animation-btn">
            <Button className="btn-link">{children}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationButton;
