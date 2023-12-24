import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const BookButton = () => {
  const BookButton = styled(Button)({
    "&:hover": {
      backgroundColor: "#ffffff",
      color: "#1e88e5",
      border: "2px solid #1976D2",
    },
  });
  return (
    <div>
      <BookButton
        variant="contained"
        sx={{ border: "2px solid #1976D2", fontWeight: "bold" }}
      >
        Book Appointment
      </BookButton>
    </div>
  );
};

export default BookButton;