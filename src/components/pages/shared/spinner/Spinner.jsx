import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Spinner = () => {
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        minHeight: "600px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </Box>
  );
};

export default Spinner;
