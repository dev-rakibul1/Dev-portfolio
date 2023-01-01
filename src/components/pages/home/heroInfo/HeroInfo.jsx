import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Social from "../../shared/spinner/social/Social";
import TypedAnimation from "../../typed/TypedAnimation";

const HeroInfo = () => {
  const resumeDownload = (url) => {
    window.open(url, "noreferrer");
  };

  return (
    <>
      <Box className="hero" sx={{ zIndex: 1 }}>
        <Typography
          sx={{
            fontFamily: "calibri",
            fontWeight: "bold",
            fontSize: { xs: "25px", sm: "40px", md: "60px" },
          }}
          variant="h2"
        >
          I'm{" "}
          <Typography color="primary" variant="span">
            Rakibul
          </Typography>{" "}
          Islam
        </Typography>
        <TypedAnimation />
        <Typography variantMapping="p" sx={{ fontFamily: "calibri" }}>
          An intensive long coding Bootcamp in which I learned to design and
          build <br />
          web applications from the front -end to back-end with <br /> the MERN
          stack (MongoDB, Express.js, React.js, Node.js).
        </Typography>

        <Button
          href="Resume.pdf"
          download
          target="_blank"
          sx={{
            mt: 2,
            textTransform: "capitalize",
            // boxShadow: "1px 1px 1pc #ff432191",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
          }}
          variant="contained"
        >
          Download CV
        </Button>

        <Social />
      </Box>
    </>
  );
};

export default HeroInfo;
