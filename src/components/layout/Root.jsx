import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/menu/Navbar";

const Root = () => {
  return (
    <Box
      className="root-hero"
      sx={{
        minHeight: "600px",
        // backgroundColor: "#fff",
        position: "relative",
      }}
    >
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default Root;
