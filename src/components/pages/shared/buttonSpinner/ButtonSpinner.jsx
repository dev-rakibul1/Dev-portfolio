import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import * as React from "react";

export default function ButtonSpinner() {
  const [loading, setLoading] = React.useState(true);
  function handleClick() {
    setLoading(true);
  }

  return (
    <Box>
      <Box sx={{ "& > button": { m: 1 } }}>
        <LoadingButton
          onClick={handleClick}
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          Send message
        </LoadingButton>
      </Box>
    </Box>
  );
}
