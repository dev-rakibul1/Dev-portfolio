import InfoIcon from "@mui/icons-material/Info";
import { Grid, IconButton, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box } from "@mui/system";
import { useQuery } from "@tanstack/react-query";

import * as React from "react";
import { Link } from "react-router-dom";
import UseTitle from "../../hook/useTitle";
import Spinner from "../shared/spinner/Spinner";

import Tooltip from "@mui/material/Tooltip";

function Projects() {
  UseTitle("Project");
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
                  fontWeight: 600,
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
                My favorite four projects{" "}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "calibri",
                  fontWeight: "light",
                  mt: 2,
                  color: { xs: "#000", sm: "#ffff" },
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
              {/* project images */}
              <Box sx={{ width: "100%", height: 450, overflowY: "scroll" }}>
                <ImageList
                  variant="masonry"
                  item
                  xs={12}
                  sm={6}
                  cols={2}
                  gap={15}
                >
                  {projectInfo?.map((item) => (
                    <ImageListItem
                      className="project-images-box project-wrap"
                      key={item._i}
                      sx={{
                        display: { sx: 12, sm: 2, md: 3 },
                        position: "relative",
                        height: "10px",
                      }}
                    >
                      <img
                        style={{
                          boxShadow:
                            "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                        }}
                        src={`${item.img1}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img1}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                      />
                      {/* <ImageListItemBar position="below" title={item.author} /> */}
                      <Box className="project-images-hover">
                        <Typography
                          sx={
                            {
                              // fontFamily: "calibri",
                              // fontSize: "22px",
                              // fontWeight: "light",
                            }
                          }
                          variant="span"
                        >
                          {item?.title}
                        </Typography>

                        <Tooltip title="Project details">
                          <Link
                            to={`/projectDetails/${item._id}`}
                            style={{ zIndex: "5" }}
                          >
                            <IconButton
                              className="project-btn"
                              sx={{
                                color: "rgba(255, 255, 255, 0.54)",
                                m: 0,
                                p: 0,
                              }}
                              aria-label={`info about ${item.title}`}
                            >
                              <InfoIcon />
                            </IconButton>
                          </Link>
                        </Tooltip>
                      </Box>
                    </ImageListItem>
                  ))}
                </ImageList>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Projects;
