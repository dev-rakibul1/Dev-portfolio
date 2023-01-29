import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import WaterWave from "react-water-wave";
const images = "https://i.ibb.co/Xt2qJhc/sd.jpg";

const Error = () => {
  const error = useRouteError();

  return (
    <WaterWave
      imageUrl={images}
      style={{
        // backgroundImage: `url(${images})`,
        backgroundPosition: " center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        textAlign: "center",
        width: "100%",
        height: "100%",
      }}
    >
      {(methods) => (
        <Box>
          <Box
            className="error"
            sx={{
              minHeight: "600px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              margin: 0,
              padding: 0,
            }}
            style={{
              // backgroundImage: `url(${images})`,
              backgroundPosition: "top center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <Typography variant="h1" sx={{ fontWeight: "bold" }}>
              404
            </Typography>
            <Typography variant="h3">Something is wrong</Typography>
            <p>
              {(error?.statusText
                ? "Your Page " + error.statusText
                : undefined) || error.message}
            </p>

            <Link to="/">
              <Button
                variant="outlined"
                sx={{ color: "#fff", border: "1px solid #fff" }}
              >
                Go to Home
              </Button>
            </Link>
          </Box>
        </Box>
      )}
    </WaterWave>
  );
};

export default Error;
