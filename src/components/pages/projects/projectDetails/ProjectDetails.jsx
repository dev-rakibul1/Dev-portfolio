import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link, useLoaderData } from "react-router-dom";

import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

// modal function
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

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
  const {
    description,
    author,
    title,
    moreDet,
    img1,
    img2,
    img3,
    liveWebsite,
    clientCode,
    serverCode,
  } = projectData;

  const openProjectInfo = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <PhotoProvider>
      <Box
        sx={{
          pt: 14,
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={6}>
            <Card sx={{ minWidth: 275, boxShadow: 0 }}>
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
                  {description.slice(0, 500)}{" "}
                  <Link variant="outlined" onClick={handleClickOpen}>
                    Read more
                  </Link>
                  {/* modal */}
                  <div>
                    <BootstrapDialog
                      onClose={handleClose}
                      aria-labelledby="customized-dialog-title"
                      open={open}
                    >
                      <BootstrapDialogTitle
                        id="customized-dialog-title"
                        onClose={handleClose}
                      >
                        {title}
                      </BootstrapDialogTitle>
                      <DialogContent dividers>
                        <Typography gutterBottom>{description}</Typography>
                      </DialogContent>
                    </BootstrapDialog>
                  </div>
                </Typography>
              </CardContent>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "start",
                }}
              >
                {/* Live website */}
                <CardActions>
                  <Button
                    size="small"
                    variant="outlined"
                    sx={{ backgroundColor: "primary" }}
                    role="link"
                    onClick={() => openProjectInfo(liveWebsite)}
                  >
                    Live preview
                  </Button>
                </CardActions>

                {/* Client site code link */}
                <CardActions>
                  <Button
                    size="small"
                    variant="outlined"
                    sx={{ backgroundColor: "primary" }}
                    onClick={() => openProjectInfo(clientCode)}
                  >
                    Client code
                  </Button>
                </CardActions>

                {/* Server site code link */}
                <CardActions>
                  <Button
                    size="small"
                    variant="outlined"
                    sx={{ backgroundColor: "primary" }}
                    onClick={() => openProjectInfo(serverCode)}
                  >
                    Server code
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Grid>
          <Grid sx={{ position: "relative" }} item xs={12} sm={12} md={6}>
            <Box>
              <Box
                className="project-images-sort-one project-details-images"
                variant="image"
              >
                <PhotoView>
                  <img
                    src={img1}
                    alt="project-images"
                    style={{ maxWidth: "100%" }}
                  />
                </PhotoView>
              </Box>
              <Box
                className="project-images-sort-two project-details-images"
                variant="image"
              >
                <PhotoView>
                  <img
                    src={img2}
                    alt="project-images"
                    style={{ maxWidth: "100%" }}
                  />
                </PhotoView>
              </Box>
              <Box
                className="project-images-sort-three project-details-images"
                variant="image"
              >
                <PhotoView>
                  <img
                    src={img3}
                    alt="project-images"
                    style={{ maxWidth: "100%" }}
                  />
                </PhotoView>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </PhotoProvider>
  );
};

export default ProjectDetails;
