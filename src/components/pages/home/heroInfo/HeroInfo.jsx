import { Box, Typography } from "@mui/material";
import React from "react";
import Social from "../../shared/spinner/social/Social";
import TypedAnimation from "../../typed/TypedAnimation";

const HeroInfo = () => {
  return (
    <>
      <Box className="hero">
        <Typography
          sx={{ fontFamily: "calibri", fontWeight: "bold" }}
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

        {/* <Button
          href="https://drive.google.com/file/d/1kUEAa-gyg2STpL14bHKTugeukOE3F3Q6/view?usp=share_link"
          download
          sx={{
            mt: 2,
            textTransform: "capitalize",
            boxShadow: "1px 1px 1pc #ff432191",
          }}
          variant="contained"
        >
          Download CV
        </Button> */}

        <a
          download="true"
          target="_blank"
          href="https://drive.google.com/file/d/1kUEAa-gyg2STpL14bHKTugeukOE3F3Q6/view?usp=share_link"
          rel="downoad noreferrer"
        >
          download
        </a>

        <Social />
      </Box>
    </>
  );
};

export default HeroInfo;
