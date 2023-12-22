import React, { useState } from "react";
import Card from "@mui/material/Card";
import {
  Typography,
  CardContent,
  TextField,
  CardActions,
  Button,
} from "@mui/material";

const Login = () => {
  const [OTP, setOTP] = useState("");
  const [OTPState, setOTPState] = useState(false);
  const [email, setEmail] = useState("");
  const handleOtp = (e) => {
      e.preventDefault();
      if(email==="") alert("Email empty")
      else
      setOTPState(!OTPState);
    };
    const handleBack = (e) => {
        e.preventDefault();
        setOTPState(!OTPState);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      setOTPState(!OTPState);

    };
  return (
    <div className="flex h-screen w-screen justify-center items-center bg-[#e5e5e5]">
      <Card className="h-1/2 w-full mx-8 sm:w-1/2 xl:w-1/3 flex flex-col justify-center items-center">
        <CardContent className="flex gap-16 flex-col items-center">
          <Typography variant="h3">Login</Typography>
          {OTPState ? (
            <TextField
              id="outlined-basic"
              label="OTP"
              variant="outlined"
              required
              onChange={(e)=>{setOTP(e.target.value)}}
            />
          ) : (
            <TextField
              id="outlined-basic"
              label="Email id"
              variant="outlined"
              required
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          )}
        </CardContent>
        <CardActions>
          {OTPState ? (
            <div className="flex gap-5">
              <Button variant="outlined" onClick={handleBack}>
                back
              </Button>
              <Button variant="contained" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          ) : (
            <Button variant="contained" onClick={handleOtp}>
              Send OTP
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  );
};

export default Login;
