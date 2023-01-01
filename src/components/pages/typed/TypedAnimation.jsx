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
        "React developer",
        "Jr. MERN stack developer",
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
          fontFamily: "calibri",
          marginTop: "-20px",
          fontSize: { xs: "18px", sm: "24px", md: "40px" },
          fontWeight: { xs: "600", sm: "200", md: "200" },
        }}
        ref={el}
        variant="span"
      ></Typography>
    </div>
  );
};

export default TypedAnimation;
