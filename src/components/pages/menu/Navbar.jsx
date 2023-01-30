import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import AnimationButton from "../../typography/button/AnimationButton";
import ResponsiveDrawer from "./ResponsiveDrawer";
const logo1 = "https://i.ibb.co/G2qy7fX/logo-white.png";
const logo2 = "https://i.ibb.co/BZs0fTX/logo.png";

const Navbar = () => {
  const [navClass, setNavClass] = useState("");
  const [logo, setLogo] = useState(logo2);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setNavClass("home-nav-color");
      setLogo(logo1);
    } else if (location.pathname === "/about") {
      setNavClass("about-nav-color");
      setLogo(logo2);
    }
  }, [location]);

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

      <NavLink to="/contact">
        <AnimationButton>Contact me</AnimationButton>
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
              <img style={{ maxWidth: "135px" }} src={logo} alt="Logo" />
            </Typography>
          </Link>

          {/* Nav items */}
          <Tabs sx={{ ml: "auto" }} className={navClass}>
            {isMatch ? <ResponsiveDrawer /> : navItems}
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
