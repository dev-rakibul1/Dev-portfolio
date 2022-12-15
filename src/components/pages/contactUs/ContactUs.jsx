import {
  Box,
  Button,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const ContactUs = () => {
  const [nameAlert, setNameAlert] = useState("");
  const [emailAlert, setEmailAlert] = useState("");
  const [phoneAlert, setPhoneAlert] = useState("");
  const [messageAlert, setMessageAlert] = useState("");

  const handleUserInput = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const emailValidation =
      /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([\.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i;

    // name validation
    if (name === "") {
      setNameAlert("Name is require");
      return;
    } else if (name.length < 5 || name.length > 25) {
      setNameAlert("Name must be between 5 to 25 range ");
      return;
    } else {
      setNameAlert("");
    }

    // email validation
    if (email === "") {
      setEmailAlert("Email is require");
    } else if (!emailValidation.test(email)) {
      setEmailAlert("Please provide a valid email");
    } else {
      setEmailAlert("");
    }

    // phone validation
    if (phone === "") {
      setPhoneAlert("Phone is require");
      return;
    } else if (isNaN(parseInt(phone))) {
      setPhoneAlert("Must be need number");
    } else if (phone.length < 5 || phone.length > 20) {
      setPhoneAlert("Number must be between 5 to 25 range");
      return;
    } else {
      setPhoneAlert("");
    }

    // message validation
    if (message === "") {
      setMessageAlert("Message is require");
      return;
    } else if (message.length < 15 || message.length > 250) {
      setMessageAlert("Message must be between 15 to 250 range");
      return;
    } else {
      setMessageAlert("");
    }

    const userMessage = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    // post request
    fetch("https://my-portfolio-server-dev-rakibul1.vercel.app/user-message", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userMessage),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
        } else {
          toast.error(data.error);
        }
      })
      .catch((error) => console.log(error));

    form.reset();
  };

  return (
    <Box
      className="contact-bg"
      sx={{
        pt: 14,
      }}
    >
      <Box>
        <Box
          component="form"
          sx={{
            maxWidth: { xs: "100%", sm: "100%", md: "50%" },
            margin: "0 auto",
            px: 4,
          }}
          onSubmit={handleUserInput}
        >
          {/* input name */}
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Typography
              variant="h4"
              color="primary"
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Contact now
            </Typography>
          </Box>
          <Box>
            {/* name */}
            <TextField
              fullWidth
              label="Name"
              id="fullWidth"
              type="text"
              name="name"
            />
            <Typography sx={{ fontSize: "13px", color: "red" }} variant="small">
              {nameAlert}
            </Typography>
          </Box>

          {/* input email */}
          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Email"
              id="fullWidth"
              type="email"
              name="email"
            />
            <Typography sx={{ fontSize: "13px", color: "red" }} variant="small">
              {emailAlert}
            </Typography>
          </Box>

          {/* input phone */}
          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Number"
              id="fullWidth"
              type="text"
              name="phone"
            />
            <Typography sx={{ fontSize: "13px", color: "red" }} variant="small">
              {phoneAlert}
            </Typography>
          </Box>

          {/* input user message */}
          <Box sx={{ mt: 2 }}>
            <TextareaAutosize
              id="fullWidth"
              aria-label="empty textarea"
              placeholder="Type your message..."
              style={{ width: "100%", minHeight: "100px" }}
              name="message"
            />
            <Typography sx={{ fontSize: "13px", color: "red" }} variant="small">
              {messageAlert}
            </Typography>
          </Box>

          <Button variant="contained" type="submit">
            Send message
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
