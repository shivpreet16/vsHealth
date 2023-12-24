import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
const BookButton = ({id}) => {
  const nav=useNavigate()
  const BookButton = styled(Button)({
    "&:hover": {
      backgroundColor: "#ffffff",
      color: "#1e88e5",
      border: "2px solid #1976D2",
    },
  });
  const handleClick=(e)=>{
    e.preventDefault()
    nav(`/dashboard/${id}`)
  }
  return (
    <div
      onClick={handleClick}
    >
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