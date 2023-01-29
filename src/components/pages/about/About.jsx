import {
  Box,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import UseTitle from "../../hook/useTitle";
import Social from "../shared/spinner/social/Social";
import Spinner from "../shared/spinner/Spinner";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const About = () => {
  UseTitle("About");
  const { data: skills, isLoading } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const res = await fetch("skill.json");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Box sx={{ pt: 14, bgcolor: "#fff" }} className="about-manage">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card sx={{ minWidth: 275, boxShadow: 0 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14, color: "primary" }}
                color="text.secondary"
                gutterBottom
              >
                I'm a
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontSize: "35px",
                  fontFamily: "calibri",
                  fontWeight: "normal",
                  mb: -1.5,
                  p: 0,
                }}
              >
                Rakibul Islam
              </Typography>
              <Typography
                sx={{
                  mb: 1.5,
                  fontSize: "14px",
                  fontFamily: "calibri",
                  fontWeight: "normal",
                }}
                color="text.secondary"
              >
                Jr. MERN stack developer
              </Typography>

              {/* PROFESSIONAL SUMMARY */}
              <Typography
                color="primary"
                sx={{
                  mb: 1.5,
                  fontSize: "17px",
                  fontFamily: "calibri",
                  fontWeight: "bold",
                }}
                variant="span"
              >
                PROFESSIONAL SUMMARY
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "calibri",
                  fontWeight: "normal",
                  fontSize: "15px",
                  mb: 3,
                }}
              >
                MERN stack developer specializing in front-end development is
                adept at building responsive web applications from front to
                back. Passionate about learning new technologies, bringing ideas
                to life, and working with dedicated terms to build effective and
                robust applications suitable to the user's needs.
              </Typography>

              {/* SKILLS SUMMARY*/}
              <Typography
                color="primary"
                sx={{
                  mb: 1.5,
                  fontSize: "17px",
                  fontFamily: "calibri",
                  fontWeight: "bold",
                  pt: 2,
                }}
                variant="span"
              >
                SKILLS SUMMARY
              </Typography>
              <Typography
                className="skill-summary"
                variant="body2"
                sx={{
                  fontFamily: "calibri",
                  fontWeight: "normal",
                  fontSize: "15px",
                }}
              >
                <span>
                  <strong>Languages</strong> – JavaScript (ES5 + 6)
                </span>
                <br />
                <span>
                  <strong>Front-end</strong> – HTML5, CSS3, SASS.
                </span>
                <span>
                  <strong>Responsive design</strong> – Flexbox, Grid, Bootstrap,
                  Tailwind, Material UI,
                </span>
                <span>
                  <strong>Client scripting</strong> – React.js, Styled
                  components.
                </span>
                <span>
                  <strong>Server Scripting</strong> – Node.js (Express),
                  Firebase, MongoDB, Socket.io(beginner)
                </span>
                <span>
                  <strong>Project management</strong> – Communication, Time
                  management, Flexibility, Creative design, Cross browser
                  compatibility.
                </span>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          {/* skill column */}
          <Typography
            variant="h4"
            color="primary"
            sx={{
              textAlign: "center",
              mb: 2,
              fontSize: "22px",
              textTransform: "uppercase",
            }}
          >
            My Skills
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {skills?.map((skill) => (
                <Card sx={{ maxWidth: "100px" }}>
                  <CardActionArea sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      image={skill?.image}
                      alt="green iguana"
                      sx={{ maxWidth: "100%", height: "100%" }}
                    />

                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="span"
                        sx={{
                          display: "flex",
                          alignItems: "start",
                          justifyContent: "end",
                          height: "100%",
                        }}
                      >
                        {skill?.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant="p" sx={{ mt: 5 }}>
              Contact us
            </Typography>
            <Social />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
