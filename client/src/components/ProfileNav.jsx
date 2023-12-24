import React from "react";
import { Avatar, Typography, Box, Tab, Tabs } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import BookButton from "./BookButton";

const ProfileNav = ({ id, doctorName }) => {
  const nameSplit = doctorName.split(" ");
  const initials =
    nameSplit[1][0] +
    (nameSplit.length == 2 ? " " : nameSplit[nameSplit.length - 1][0]);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <div className="w-screen h-16 shadow-md lg:shadow-lg flex relative items-center justify-between px-10">
      <div className="flex gap-2 items-center">
        <Avatar sx={{ bgcolor: deepOrange[500] }}> {initials}</Avatar>
        <Typography sx={{ fontFamily: "Poppins", fontWeight: "bold" }}>
          {doctorName}
        </Typography>
      </div>
      <div className="md:block hidden">
        <Box sx={{ width: "100%" }}>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="Navigation Tabs"
            >
              <Tab
                label={
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      color: "black",
                      fontWeight: "bold",
                      textTransform: "capitalize",
                    }}
                  >
                    Home
                  </Typography>
                }
                {...a11yProps(0)}
              />
              <Tab
                label={
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      color: "black",
                      fontWeight: "bold",
                      textTransform: "capitalize",
                    }}
                  >
                    Treatments
                  </Typography>
                }
                {...a11yProps(1)}
              />
              <Tab
                label={
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      color: "black",
                      fontWeight: "bold",
                      textTransform: "capitalize",
                    }}
                  >
                    Health Blogs
                  </Typography>
                }
                {...a11yProps(2)}
              />
              <Tab
                label={
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      color: "black",
                      fontWeight: "bold",
                      textTransform: "capitalize",
                    }}
                  >
                    About Me
                  </Typography>
                }
                {...a11yProps(3)}
              />
              <div className="px-2">
                <BookButton id={id} />
              </div>
            </Tabs>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default ProfileNav;