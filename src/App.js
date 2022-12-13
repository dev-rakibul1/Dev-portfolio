import { Box, Container, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider } from "react-router-dom";
import router from "./components/router/Router";
import "./components/styles/RootHero.css";
import themes from "./components/themes/Themes";
const heroImages = "https://i.ibb.co/tL2W75X/ezgif-com-gif-maker-5.jpg";

function App() {
  return (
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
          <ThemeProvider theme={themes}>
            <CssBaseline />
            <RouterProvider router={router}></RouterProvider>
          </ThemeProvider>
        </Box>
      </Container>
    </div>
  );
}

export default App;
