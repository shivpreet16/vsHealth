import React from "react";
import {
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordianCards = ({ faq }) => {
  return (
    <Accordion sx={{width:"80vw", paddingX:"10px"}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{faq.question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{faq.answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
const Faqs = ({ faqs }) => {
  return (
    <div className="pt-5 md:px-20 px-10 flex flex-col items-center gap-5 md:gap-10 pb-10 bg-[#EFFFE5]">
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        FAQs
      </Typography>
      {faqs.map((faq, index) => (<AccordianCards key={index} faq={faq} />
      ))}
    </div>
  );
};

export default Faqs;