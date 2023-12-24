import React from "react";
import blogs from "../constants";
import { Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InvertButton from "./InvertButton";

const BlogCard = ({ blog }) => {
  return (
    <div className="shadow w-[50vw] relative md:w-[25vw] rounded-md px-5 py-10 flex flex-col gap-2 justify-start overflow-hidden cursor-pointer">
      <img src={blog.image} alt={blog.title} className="h-48 hover:scale-105" />
      <Typography variant="h6" sx={{ textAlign: "left" }}>
        {blog.title}
      </Typography>
      <Typography variant="p" sx={{paddingBottom:"16px"}}>{blog.desc}</Typography>
      <div className="absolute bottom-2">
        <div className="h-1 w-full bg-[#1976D2]"></div>
        <div className="flex items-center justify-between">
          <Button>
            <Typography variant="p" sx={{ fontWeight: "bold" }}>
              Read More
            </Typography>
            <ArrowForwardIcon sx={{ height: "16px" }} />
          </Button>
          <div>
            <CalendarMonthIcon sx={{ height: "16px", color: "#1976D2" }} />
            <Typography
              variant="p"
              sx={{ fontWeight: "bold", color: "#1976D2" }}
            >
              {blog.date}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
const Blogs = () => {
  return (
    <div className="min-h-screen mt-20 md:px-20 px-10 flex flex-col items-center gap-5 md:gap-10">
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Blogs
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {blogs.blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
      <InvertButton text="read more"/>
    </div>
  );
};

export default Blogs;