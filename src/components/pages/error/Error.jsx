import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link, useRouteError } from "react-router-dom";
const images = "https://i.ibb.co/2Zqwmd2/9467819-4140519.jpg";

const Error = () => {
  const error = useRouteError();

  return (
    <>
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
          backgroundImage: `url(${images})`,
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
        <p>{error.statusText || error.message}</p>

        <Link to="/">
          <Button
            variant="outlined"
            sx={{ color: "#fff", border: "1px solid #fff" }}
          >
            Go to Home
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default Error;
