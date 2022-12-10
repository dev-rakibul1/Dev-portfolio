import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
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
          <Typography sx={{ color: "#FF4321" }} variant="span">
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
          href="../../resume/Resume.pdf"
          download
          sx={{
            mt: 2,
            textTransform: "capitalize",
            boxShadow: "1px 1px 1pc #ff432191",
          }}
          variant="contained"
        >
          Download CV
        </Button>

        {/* Social icons */}
        <Box sx={{ position: "absolute", bottom: 0, mb: 2 }}>
          <Link to="https://github.com/dev-rakibul1" target="_blank">
            <Typography sx={{ color: "#91C73E", p: 1 }} variant="span">
              <GitHub />
            </Typography>
          </Link>
          <Link to="https://www.linkedin.com/in/dev-rakibul/" target="_blank">
            <Typography sx={{ color: "#91C73E", p: 1 }} variant="span">
              <LinkedIn />
            </Typography>
          </Link>
          <Link to="https://www.facebook.com/dev.rakibul1/" target="_blank">
            <Typography sx={{ color: "#91C73E", p: 1 }} variant="span">
              <Facebook />
            </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default HeroInfo;
