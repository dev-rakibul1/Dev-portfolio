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
        <Tab label="Home" />
      </NavLink>
      <NavLink className="navbarItems" to="/about">
        <Tab label="About" />
      </NavLink>
      <NavLink className="navbarItems" to="/project">
        <Tab label="Project" />
      </NavLink>
      <NavLink className="navbarItems" to="/contact">
        <Tab label="Contact me" />
      </NavLink>
      <NavLink className="navbarItems" to="/hire">
        <Tab label="Hire me" />
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
          maxWidth: "lg",
          margin: "0 auto",
          left: 0,
          top: 0,
          position: "absolute",
          boxShadow: 0,
        }}
      >
        <Toolbar>
          {/* Navbar brand */}
          <Link>
            <Typography sx={{ maxWidth: "80px" }}>
              <img
                style={{ maxWidth: "220px" }}
                src="https://i.ibb.co/FWgyC41/Rakibul2-01.png"
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
