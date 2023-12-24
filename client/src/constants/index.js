import urinaryTractInfection from "../assets/urinary_tract.jpeg";
import periodPad from "../assets/period-pad.jpg";
import nonStressTest from "../assets/non-stress-test.png";
import HealingIcon from '@mui/icons-material/Healing';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const treatmentImages = [
  HealingIcon ,
  HealthAndSafetyIcon,
  LocalHospitalIcon
];

const blogs = [
    {
        "title": "Genital Tract Infections",
        "desc": "Genital tract infections are caused by bacteria, fungi, parasites, and viruses, these agents infect the reproductive parts or organs of the genital tract.",
        "date": "April 6th, 2022",
        "image": urinaryTractInfection,
    },
    {
        "title": "Losing too much blood during periods? Watch out for these signs!",
        "desc": "Watch out for these signs!",
        "date": "April 6th, 2022",
        "image": periodPad,
    },
    {
        "title": "Non-stress Test",
        "desc": "How important is it?",
        "date": "April 6th, 2022",
        "image": nonStressTest,
    },
]

export default {
    treatmentImages,
    blogs,
};