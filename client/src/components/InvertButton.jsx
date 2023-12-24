import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const InvertButton = ({text}) => {
  const InvertButton = styled(Button)({
    "&:hover": {
      backgroundColor: "#1e88e5",
      color: "#ffffff",
      border: "2px solid #1976D2",
    },
  });
  return (
    <div>
      <InvertButton
        variant="outlined"
        sx={{ border: "2px solid #1976D2", fontWeight: "bold" }}
      >
        {text}
      </InvertButton>
    </div>
  );
};

export default InvertButton;