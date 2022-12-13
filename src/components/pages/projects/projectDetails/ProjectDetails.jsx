import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import { useLoaderData } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const ProjectDetails = () => {
  const projectData = useLoaderData();
  console.log(projectData);
  const { description, author, title, moreDet, img1, img2, img3 } = projectData;

  return (
    <Box
      sx={{
        pt: 14,
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 12 }}
                color="text.secondary"
                gutterBottom
              >
                Project name:
              </Typography>
              <Typography
                color="primary"
                sx={{ mt: "-12px" }}
                variant="h5"
                component="div"
              >
                {title}
              </Typography>
              <Typography
                variant="small"
                sx={{ mb: 1.5, fontSize: "13px", mt: "-20px", pt: "-20px" }}
                color="text.secondary"
              >
                {author}
              </Typography>

              <Box
                sx={{
                  mb: 2,
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    mt: 2,
                  }}
                  variant="body2"
                >
                  <PanToolAltIcon
                    color=""
                    sx={{ transform: "rotate(90deg)" }}
                  />{" "}
                  {moreDet[0]}
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    mt: 2,
                  }}
                  variant="body2"
                >
                  <PanToolAltIcon
                    color=""
                    sx={{ transform: "rotate(90deg)" }}
                  />{" "}
                  {moreDet[1]}
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    mt: 2,
                  }}
                  variant="body2"
                >
                  <PanToolAltIcon
                    color=""
                    sx={{ transform: "rotate(90deg)" }}
                  />{" "}
                  {moreDet[2]}
                </Typography>
              </Box>

              <Typography variant="body2">
                {description.slice(0, 500)}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                sx={{ backgroundColor: "primary" }}
              >
                Live preview
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid sx={{ position: "relative" }} item xs={12} sm={12} md={6}>
          <Box>
            <Box
              className="project-images-sort-one project-details-images"
              variant="image"
            >
              <img
                src={img1}
                alt="project-images"
                style={{ maxWidth: "100%" }}
              />
            </Box>
            <Box
              className="project-images-sort-two project-details-images"
              variant="image"
            >
              <img
                src={img2}
                alt="project-images"
                style={{ maxWidth: "100%" }}
              />
            </Box>
            <Box
              className="project-images-sort-three project-details-images"
              variant="image"
            >
              <img
                src={img3}
                alt="project-images"
                style={{ maxWidth: "100%" }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectDetails;
