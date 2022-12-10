import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HeroImg from "./heroImg/HeroImg";
import HeroInfo from "./heroInfo/HeroInfo";

const home = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          pt: 14,
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Grid rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid sm="auto" md={6}>
            <HeroInfo />
          </Grid>
          <Grid sm="auto" md={6}>
            <HeroImg />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default home;
