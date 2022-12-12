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
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
        }}
        className="hero-shape"
      ></Box>
      <Typography variant="image" sx={{ zIndex: "20" }}>
        <img
          src="https://i.ibb.co/WxKGxP3/Rakibul.png"
          alt="me"
          style={{
            maxWidth: "100%",
            position: "absolute",
            bottom: 0,
            right: "2%",
          }}
        />
      </Typography>
    </Box>
  );
};

export default HeroImg;
