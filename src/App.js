import { Box, Container, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import WaterWave from "react-water-wave";
import router from "./components/router/Router";
import "./components/styles/RootHero.css";
import themes from "./components/themes/Themes";
const heroImages = "https://i.ibb.co/SPfh9Q5/city-be6db825.jpg";
// https://i.ibb.co/SPfh9Q5/city-be6db825.jpg

function App() {
  return (
    <>
      <div className="root-wrap">
        <Container maxWidth="xl" sx={{}} className="wrap clearfix">
          <Box
            className="hero-bg"
            sx={{
              boxShadow: "1px 1px 1pc #1d2340",
              overflow: "hidden",
              width: "100%",
              // backgroundImage: `url(${heroImages})`,
              // backgroundRepeat: "no-repeat",
              // backgroundSize: "cover",
              // backgroundPositionX: "right",
              background: "#fff",
            }}
          >
            <WaterWave
              imageUrl={heroImages}
              style={{
                backgroundSize: "contain",
                with: "100%",
                height: "100%",
                backgroundPosition: "center-bottom",
              }}
            >
              {(methods) => (
                /* children components */
                <ThemeProvider theme={themes}>
                  <CssBaseline />
                  <RouterProvider router={router}></RouterProvider>
                </ThemeProvider>
              )}
            </WaterWave>
          </Box>
        </Container>
      </div>
      <Toaster />
    </>
  );
}

export default App;
