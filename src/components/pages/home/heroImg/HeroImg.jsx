import { Box, Typography } from "@mui/material";
import React from "react";

const HeroImg = () => {
  return (
    <Box>
      {/* <Typography
        variant="image"
        sx={{
          maxWidth: "200px",
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <img
          src="https://i.ibb.co/zfbrXXh/shap.png"
          alt="shape"
          style={{
            maxWidth: "35%",
            position: "absolute",
            bottom: 0,
            right: "2%",
          }}
        />
      </Typography> */}

      {/* React icon */}
      <Box
        title="React"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
        }}
        className="hero-react"
      ></Box>

      {/* node icon */}
      <Box
        title="Node.js"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
        }}
        className="hero-node"
      ></Box>

      {/* mongoDB icon */}
      <Box
        title="MongoDB"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
        }}
        className="hero-mongodb"
      ></Box>

      {/* express icon */}
      <Box
        title="Express"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
        }}
        className="hero-express"
      ></Box>

      {/* javascript icon */}
      <Box
        title="Javascript"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
        }}
        className="hero-javascript"
      ></Box>

      {/* firebase icon */}
      <Box
        title="Firebase"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
        }}
        className="hero-firebase"
      ></Box>

      {/* material icon */}
      <Box
        title="Material UI"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
        }}
        className="hero-materialUi"
      ></Box>

      {/* tailwind icon */}
      <Box
        title="Tailwind"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
        }}
        className="hero-tailwind"
      ></Box>

      {/* bootstrap icon */}
      <Box
        title="Bootstrap"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
        }}
        className="hero-bootstrap"
      ></Box>

      {/* socket io icon */}
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
        }}
        className="hero-socketIo"
      ></Box>

      <Typography variant="image" sx={{ zIndex: "-200" }}>
        <img
          src="https://i.ibb.co/WxKGxP3/Rakibul.png"
          alt="me"
          style={{
            maxWidth: "100%",
            position: "absolute",
            bottom: 0,
            right: "2%",
            zIndex: "-1",
          }}
        />
      </Typography>
    </Box>
  );
};

export default HeroImg;
