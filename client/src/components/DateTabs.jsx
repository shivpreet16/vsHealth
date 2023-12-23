import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from '@mui/system';

const CustomTabs = styled(Tabs)({
  indicatorColor: 'green',
});

const GreenTextTab = styled(Tab)({
  color: 'green',
  width: '25vw',
});

export default function DateTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };

  const getMonthName=(month)=>{
    const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    return months[month]
  }

  const generateDates = () => {
    const currentDate = new Date();
    const dates = [];

    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setDate(currentDate.getDate() + i);
      dates.push(date);
    }

    return dates;
  };

  const getDayName = (date) => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return daysOfWeek[date.getDay()];
  };


  const dates = generateDates();

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: '100vw',
        bgcolor: "background.paper",
      }}
    >
      <CustomTabs
        value={value}
        variant="scrollable"
        TabIndicatorProps={{
          style: {
            backgroundColor: "green",
          }
        }}
        scrollButtons
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
        }}
      >
        {dates.map((date, index) => (
          <GreenTextTab key={index} 
          onClick={(e)=>{
            console.log(date)
          }}
          label={
            <div className="flex flex-col gap-2">
              <span className="text-black font-bold">
                {index === 0 ? "Today" : index === 1 ? "Tomorrow" : `${getDayName(date)}, ${date.getDate()}/${getMonthName(date.getMonth())}`}
              </span>
              <span className="text-xs">8 slots available</span>
            </div>
          } />
        ))}
      </CustomTabs>
    </Box>
  );
}
