import { Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedAnimation = () => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Time management",
        "Project management",
        "Creative design",
        "debugging code",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 10,
      typeSpeed: 5,
      backSpeed: 5,
      backDelay: 1000,
      loop: true,
      bindInputFocusEvents: true,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
      fadeOut: false,
      fadeOutDelay: 1000,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      {/* Element to display typing strings */}
      <Typography
        sx={{
          fontSize: "40px",
          fontWeight: 200,
          fontFamily: "calibri",
          marginTop: "-20px",
        }}
        ref={el}
        variant="span"
      ></Typography>
    </div>
  );
};

export default TypedAnimation;
