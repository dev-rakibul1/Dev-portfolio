import { Box, Button, Typography } from "@mui/material";
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

        <Button
          href="Resume.pdf"
          download
          target="_blank"
          sx={{
            mt: 2,
            textTransform: "capitalize",
            boxShadow: "1px 1px 1pc #ff432191",
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
