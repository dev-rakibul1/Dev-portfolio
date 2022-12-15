import DehazeIcon from "@mui/icons-material/Dehaze";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const navItems = (
  <>
    <Link to="/">
      <ListItemButton>
        <ListItemIcon>
          <ListItemText>
            <Typography variant="img">
              <img
                src="https://i.ibb.co/FWgyC41/Rakibul2-01.png"
                style={{ maxWidth: "135px" }}
                alt="logo"
              />
            </Typography>
          </ListItemText>
        </ListItemIcon>
      </ListItemButton>
    </Link>
    <Link to="/">
      <ListItemButton>
        <ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItemIcon>
      </ListItemButton>
    </Link>
    <Link to="/">
      <ListItemButton>
        <ListItemIcon>
          <ListItemText>About</ListItemText>
        </ListItemIcon>
      </ListItemButton>
    </Link>
    <Link to="/">
      <ListItemButton>
        <ListItemIcon>
          <ListItemText>Project</ListItemText>
        </ListItemIcon>
      </ListItemButton>
    </Link>
    <Link to="/">
      <ListItemButton>
        <ListItemIcon>
          <ListItemText>Contact me</ListItemText>
        </ListItemIcon>
      </ListItemButton>
    </Link>
    <Link to="/">
      <ListItemButton>
        <ListItemIcon>
          <ListItemText>Hire me</ListItemText>
        </ListItemIcon>
      </ListItemButton>
    </Link>
  </>
);

const ResponsiveDrawer = () => {
  const [menuDrawer, setMenuDrawer] = useState(false);

  return (
    <div>
      {/* Responsive drawer */}
      <Drawer
        open={menuDrawer}
        onClose={() => setMenuDrawer(false)}
        sx={{
          maxWidth: "50%",
        }}
      >
        <List>{navItems}</List>
      </Drawer>
      <IconButton onClick={() => setMenuDrawer(!menuDrawer)}>
        <Typography variant="body2" sx={{ border: "1px solid #fff", p: 0.5 }}>
          <DehazeIcon />
        </Typography>
      </IconButton>
    </div>
  );
};

export default ResponsiveDrawer;
