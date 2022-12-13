import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Social = () => {
  return (
    <>
      {/* Social icons */}
      <Box sx={{ position: "absolute", bottom: 0, mb: 2 }}>
        <a
          href="https://github.com/dev-rakibul1"
          target="_blank"
          rel="noreferrer"
        >
          <Typography color="primary" sx={{ color: "", p: 1 }} variant="span">
            <GitHub />
          </Typography>
        </a>
        <a
          href="https://www.linkedin.com/in/dev-rakibul/"
          target="_blank"
          rel="noreferrer"
        >
          <Typography color="primary" sx={{ color: "", p: 1 }} variant="span">
            <LinkedIn />
          </Typography>
        </a>
        <a
          href="https://www.facebook.com/dev.rakibul1/"
          target="_blank"
          rel="noreferrer"
        >
          <Typography color="primary" sx={{ color: "", p: 1 }} variant="span">
            <Facebook />
          </Typography>
        </a>
      </Box>
    </>
  );
};

export default Social;
