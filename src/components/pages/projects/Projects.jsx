import InfoIcon from "@mui/icons-material/Info";
import { Grid, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Box } from "@mui/system";
import { useQuery } from "@tanstack/react-query";

import * as React from "react";
import { Link } from "react-router-dom";
import Spinner from "../shared/spinner/Spinner";

function Projects() {
  const projectShape = "https://i.ibb.co/9wZxcFF/Iqra-themes.jpg";

  const { data: projectInfo, isLoading } = useQuery({
    queryKey: ["projectInfo"],
    queryFn: async () => {
      const res = await fetch(
        "https://my-portfolio-server-chi.vercel.app/projects"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Box>
      <Box className="project-shape">
        <Box
          className="project-manage"
          sx={{
            pt: 14,
            px: "15px",
            //   backgroundImage: `url(${projectShape})`,
            //   backgroundPosition: "top",
            //   backgroundRepeat: "no-repeat",
            //   backgroundSize: "cover",
            //   bottom: 0,
          }}
        >
          <Grid container spacing={3}>
            {/* project article */}
            <Grid item xs={12} sm={6} md={6} sx={{ zIndex: 3 }}>
              <Typography
                variant="h4"
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "light",
                  fontFamily: "calibri",
                  color: "#fff",
                }}
              >
                Projects
              </Typography>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "light",
                  fontFamily: "calibri",
                  fontSize: "14px",
                  color: "#fff",
                }}
                variant="small"
              >
                {" "}
                My favourite four projects{" "}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "calibri",
                  fontWeight: "light",
                  mt: 2,
                  color: "#fff",
                }}
              >
                An intensive long coding Bootcamp in which I learned to design
                and build web <br /> applications from the front -end to
                back-end with the MERN stack (MongoDB, Express.js, React.js,
                Node.js).{" "}
              </Typography>
            </Grid>

            {/* project images or details */}
            <Grid item xs={12} sm={6} md={6} sx={{ zIndex: 5 }}>
              <ImageList>
                {/* project images */}

                {projectInfo?.map((project) => (
                  <Grid container spacing={1} key={project._id}>
                    <Grid item xs={12} style={{ maxWidth: "100%" }}>
                      <ImageListItem key={project?._id}>
                        <img
                          style={{
                            maxWidth: "100%",
                            width: "400px",
                            height: "220px",
                            backgroundPosition: "top",
                          }}
                          src={`${project?.img1}?w=248&fit=crop&auto=format`}
                          srcSet={`${project?.img1}?w=248&fit=crop&auto=format&dpr=2 2x`}
                          alt={project?.title}
                          loading="lazy"
                        />
                        <ImageListItemBar
                          sx={{ zIndex: 3 }}
                          title={project?.title}
                          subtitle={project?.author}
                          actionIcon={
                            <Link
                              title="Project details"
                              to={`/projectDetails/${project._id}`}
                              style={{ zIndex: "5" }}
                            >
                              <IconButton
                                className="project-btn"
                                sx={{
                                  color: "rgba(255, 255, 255, 0.54)",
                                  mx: 2,
                                }}
                                aria-label={`info about ${project.title}`}
                              >
                                <InfoIcon />
                              </IconButton>
                            </Link>
                          }
                        />
                      </ImageListItem>
                    </Grid>
                  </Grid>
                ))}
              </ImageList>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Projects;
