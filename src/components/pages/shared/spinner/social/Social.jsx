import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Social = () => {
  const socialIcon = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <>
      {/* Social icons */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          mb: 2,
          backgroundImage:
            "linear-gradient(180deg,transparent, #fff, transparent ) !important",
          py: 2,
        }}
      >
        <Link
          role="link"
          onClick={() => socialIcon("https://github.com/dev-rakibul1")}
        >
          <Typography color="#000" sx={{ color: "", p: 1 }} variant="span">
            <GitHub />
          </Typography>
        </Link>
        <Link
          role="link"
          onClick={() => socialIcon("https://www.linkedin.com/in/dev-rakibul/")}
        >
          <Typography color="#000" sx={{ color: "", p: 1 }} variant="span">
            <LinkedIn />
          </Typography>
        </Link>
        <Link
          rel="link"
          onClick={() => socialIcon("https://www.facebook.com/dev.rakibul1/")}
        >
          <Typography color="#000" sx={{ color: "", p: 1 }} variant="span">
            <Facebook />
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default Social;
