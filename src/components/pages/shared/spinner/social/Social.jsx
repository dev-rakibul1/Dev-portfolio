import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <>
      {/* Social icons */}
      <Box sx={{ position: "absolute", bottom: 0, mb: 2 }}>
        <Link to="https://github.com/dev-rakibul1" target="_blank">
          <Typography sx={{ color: "#000", p: 1 }} variant="span">
            <GitHub />
          </Typography>
        </Link>
        <Link to="https://www.linkedin.com/in/dev-rakibul/" target="_blank">
          <Typography sx={{ color: "#000", p: 1 }} variant="span">
            <LinkedIn />
          </Typography>
        </Link>
        <Link to="https://www.facebook.com/dev.rakibul1/" target="_blank">
          <Typography sx={{ color: "#000", p: 1 }} variant="span">
            <Facebook />
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default Social;
