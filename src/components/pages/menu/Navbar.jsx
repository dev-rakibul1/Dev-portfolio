import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import ResponsiveDrawer from "./ResponsiveDrawer";

const Navbar = () => {
  const navItems = (
    <>
      <NavLink className="navbarItems" to="/">
        <Tab
          sx={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: "600",
            textTransform: "uppercase",
            fontSize: "15px",
          }}
          label="Home"
        />
      </NavLink>
      <NavLink className="navbarItems" to="/about">
        <Tab
          sx={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: "600",
            textTransform: "uppercase",
            fontSize: "15px",
          }}
          label="About"
        />
      </NavLink>
      <NavLink className="navbarItems" to="/projects">
        <Tab
          sx={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: "600",
            textTransform: "uppercase",
            fontSize: "15px",
          }}
          label="Project"
        />
      </NavLink>
      <NavLink className="navbarItems" to="/contact">
        <Tab
          sx={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: "600",
            textTransform: "uppercase",
            fontSize: "15px",
          }}
          label="Contact me"
        />
      </NavLink>
    </>
  );

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "transparent",
          minWidth: "xl",
          margin: "0 auto",
          left: 0,
          top: 0,
          position: "absolute",
          boxShadow: 0,
        }}
      >
        <Toolbar
          style={{ margin: 0, padding: "10px" }}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItem: "center",
            width: "100%",
            margin: 0,
            padding: 0,
          }}
        >
          {/* Navbar brand */}
          <Link to="/">
            <Typography>
              <img
                style={{ maxWidth: "135px" }}
                src="https://i.ibb.co/BZs0fTX/logo.png"
                alt="Logo"
              />
            </Typography>
          </Link>

          {/* Nav items */}
          <Tabs sx={{ ml: "auto" }}>
            {isMatch ? <ResponsiveDrawer /> : navItems}
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
