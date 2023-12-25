import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/system";
import state from "../state";
import { useSnapshot } from "valtio";
import axios from "axios";

const CustomTabs = styled(Tabs)({
  indicatorColor: "green",
});

const GreenTextTab = styled(Tab)({
  color: "green",
  width: "25vw",
});

export default function DateTabs({
  setSlot,
  cid,
  did,
  dayCount,
  setDayCount,
  appointmentType,
}) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (cid != undefined)
      axios
        .post("https://localhost:3000/doctor/getNumberOfSlots", {
          did,
          cid,
          type: 2,
        })
        .then((r) => setDayCount(r.data))
        .catch((e) => console.log(e));
  }, [cid]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const handleClick = async (date) => {
    state.date = date;

    if (cid != -1) {
      const body = {
        did: did,
        cid: cid,
        day: getDayName(date),
        type: 2,
        date: date
      };

      axios
        .post("https://localhost:3000/doctor/getTimeSlots", body)
        .then((res) => {
          console.log(res.data)
          setSlot(res.data);
        })
        .catch((e) => console.log(e));
    }
    if (appointmentType == 0) {
      const body = {
        type: 0,
        did: did,
        day: getDayName(date),
        date: date
      };

      axios
        .post("https://localhost:3000/doctor/getTimeSlots", body)
        .then((r) => {
          setSlot(r.data);
        })
        .catch((e) => console.log(e));
    }
    if (appointmentType == 1) {
      const body = {
        type: 1,
        did: did,
        day: getDayName(date),
        date: date
      };

      axios
        .post("https://localhost:3000/doctor/getTimeSlots", body)
        .then((r) => {
          setSlot(r.data);
        })
        .catch((e) => console.log(e));
    }
  };
  const [booked, setBooked] = useState([])

  const getMonthName = (month) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return months[month];
  };

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
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[date.getDay()];
  };

  const dates = generateDates();
  const snap = useSnapshot(state);

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: "100vw",
        bgcolor: "background.paper",
      }}
    >
      <CustomTabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        TabIndicatorProps={{
          style: {
            backgroundColor: "green",
          },
        }}
        scrollButtons
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
        }}
      >
        {dates.map((date, index) => (
          <GreenTextTab
            key={index}
            onClick={(e) => handleClick(date)}
            label={
              <div className="flex flex-col gap-2">
                <span className="text-black font-bold">
                  {index === 0
                    ? "Today"
                    : index === 1
                    ? "Tomorrow"
                    : `${getDayName(date)}, ${date.getDate()}/${getMonthName(
                        date.getMonth()
                      )}`}
                </span>
                {/* <span className="text-xs">8 slots available</span> */}
                <span className="text-xs">
                  {dayCount
                    ? `${dayCount[getDayName(date)]} slots available`
                    : "-"}
                </span>
              </div>
            }
          />
        ))}
      </CustomTabs>
    </Box>
  );
}
