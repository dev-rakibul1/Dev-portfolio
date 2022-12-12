import {
  Box,
  Button,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const ContactUs = () => {
  return (
    <Box
      className="contact-bg"
      sx={{
        pt: 14,
      }}
    >
      <form style={{ maxWidth: "50%", margin: "0 auto" }}>
        {/* input name */}
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography
            variant="h4"
            sx={{ fontSize: "20px", fontWeight: "bold" }}
          >
            Contact now
          </Typography>
        </Box>
        <Box>
          <TextField fullWidth label="Name" id="fullWidth" type="text" />
        </Box>

        {/* input name */}
        <Box sx={{ mt: 2 }}>
          <TextField fullWidth label="Email" id="fullWidth" type="email" />
        </Box>

        {/* input name */}
        <Box sx={{ mt: 2 }}>
          <TextField fullWidth label="Number" id="fullWidth" type="number" />
        </Box>

        {/* input user message */}
        <Box sx={{ mt: 2 }}>
          <TextareaAutosize
            id="fullWidth"
            aria-label="empty textarea"
            placeholder="Type your message..."
            style={{ width: "100%", minHeight: "100px" }}
          />
        </Box>

        <Button variant="contained">Send message</Button>
      </form>
    </Box>
  );
};

export default ContactUs;
