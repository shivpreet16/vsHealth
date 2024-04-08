import React, { useState } from "react";
import Card from "@mui/material/Card";
import {
  Typography,
  CardContent,
  TextField,
  CardActions,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [OTP, setOTP] = useState("");
  const [OTPState, setOTPState] = useState(false);
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState("");
  const nav = useNavigate();

  const handleOtp = (e) => {
    e.preventDefault();
    if (email === "") alert("Email empty");
    else setOTPState(!OTPState);
    const body = { email: email };

    axios
      .post("http://localhost:3000/user/generateOTP", body)
      .then((res) => {
        console.log(res.data);
        setResponse("*" + res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleBack = (e) => {
    e.preventDefault();
    setOTPState(!OTPState);
  };

  const setCookie = (name, value, days) => {
    Cookies.set(name, value, { expires: days });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/user/checkOTP", {
        email: email,
        otp: OTP,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.message != "success") {
          alert(res.data.message);
        } else {
          setCookie('vsHealth',JSON.stringify(res.data),1)
          nav("/dashboard", { state: email });
          // alert(res.data.token);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center bg-[#e5e5e5]">
      <Card className="h-1/2 w-full mx-8 sm:w-1/2 xl:w-1/3 flex flex-col justify-center items-center">
        <CardContent className="flex gap-10 flex-col items-center">
          <Typography variant="h3">Login</Typography>
          <div className="flex flex-col justify-center items-center gap-1">
            <span className="text-sm">{response}</span>
            {OTPState ? (
              <TextField
                id="outlined-basic"
                label="OTP"
                variant="outlined"
                required
                value={OTP}
                onChange={(e) => {
                  setOTP(e.target.value);
                }}
              />
            ) : (
              <TextField
                id="outlined-basic"
                label="Email id"
                variant="outlined"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            )}
          </div>
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
