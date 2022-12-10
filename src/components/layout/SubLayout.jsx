import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/menu/Navbar";

const SubLayout = () => {
  return (
    <Box
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

export default SubLayout;
