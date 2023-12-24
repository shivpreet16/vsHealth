const doctorData = [
  {
    name: "Dr. Taylor",
    experience: 2,
    gender: "Female",
    FAQs: [
      {
        question: "Why should you consult a doctor?",
        answer:
          "Doctors are experienced professionals who can help you determine the cause of your issues. It is good for your health.",
      },
      {
        question: "Why is it best to consult a specialist?",
        answer:
          "A specialist doctor is trained to treat complex health conditions in their particular field. If you are diagnosed with a condition, it is best to consult a doctor who specializes in dealing with that particular condition.",
      },
      {
        question: "What are the different modes of consultation?",
        answer:
          "Dr. Manik Dalvi provides different modes of consultation for you to choose from as per your convenience. You can choose to book a clinic appointment in Bhiwandi or you can also consult the doctor online via video or telephonic call.",
      },
    ],
    specialization: "Psychiatrist",
    education: ["DNB"],
    biography:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.",
    fees: 403,
    treatments: [
      {
        name: "Cancer",
        description: "Treatment for cancer patients",
      },
      {
        name: "General Checkup",
        description: "Routine checkup and consultation",
      },
    ],
  },
  {
    name: "Dr. Brown",
    experience: 3,
    gender: "Female",
    FAQs: [
      {
        question: "Why should you consult a doctor?",
        answer:
          "Doctors are experienced professionals who can help you determine the cause of your issues. It is good for your health.",
      },
      {
        question: "Why is it best to consult a specialist?",
        answer:
          "A specialist doctor is trained to treat complex health conditions in their particular field. If you are diagnosed with a condition, it is best to consult a doctor who specializes in dealing with that particular condition.",
      },
      {
        question: "What are the different modes of consultation?",
        answer:
          "Dr. Manik Dalvi provides different modes of consultation for you to choose from as per your convenience. You can choose to book a clinic appointment in Bhiwandi or you can also consult the doctor online via video or telephonic call.",
      },
    ],
    specialization: "Oncologist",
    education: ["MBBS"],
    biography:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.",
    fees: 399,
    treatments: [
      {
        name: "Cancer",
        description: "Treatment for cancer patients",
      },
      {
        name: "General Checkup",
        description: "Routine checkup and consultation",
      },
    ],
  },
  {
    name: "Dr. Hernandez",
    experience: 9,
    gender: "Male",
    FAQs: [
      {
        question: "Why should you consult a doctor?",
        answer:
          "Doctors are experienced professionals who can help you determine the cause of your issues. It is good for your health.",
      },
      {
        question: "Why is it best to consult a specialist?",
        answer:
          "A specialist doctor is trained to treat complex health conditions in their particular field. If you are diagnosed with a condition, it is best to consult a doctor who specializes in dealing with that particular condition.",
      },
      {
        question: "What are the different modes of consultation?",
        answer:
          "Dr. Manik Dalvi provides different modes of consultation for you to choose from as per your convenience. You can choose to book a clinic appointment in Bhiwandi or you can also consult the doctor online via video or telephonic call.",
      },
    ],
    specialization: "OB-GYN",
    education: ["MBBS"],
    biography:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.",
    fees: 296,
    treatments: [
      {
        name: "Cancer",
        description: "Treatment for cancer patients",
      },
      {
        name: "General Checkup",
        description: "Routine checkup and consultation",
      },
    ],
  },
  {
    name: "Dr. Hernandez",
    experience: 36,
    gender: "Female",
    FAQs: [
      {
        question: "Why should you consult a doctor?",
        answer:
          "Doctors are experienced professionals who can help you determine the cause of your issues. It is good for your health.",
      },
      {
        question: "Why is it best to consult a specialist?",
        answer:
          "A specialist doctor is trained to treat complex health conditions in their particular field. If you are diagnosed with a condition, it is best to consult a doctor who specializes in dealing with that particular condition.",
      },
      {
        question: "What are the different modes of consultation?",
        answer:
          "Dr. Manik Dalvi provides different modes of consultation for you to choose from as per your convenience. You can choose to book a clinic appointment in Bhiwandi or you can also consult the doctor online via video or telephonic call.",
      },
    ],
    specialization: "Pediatrician",
    education: ["MS"],
    biography:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.",
    fees: 262,
    treatments: [
      {
        name: "Cancer",
        description: "Treatment for cancer patients",
      },
      {
        name: "General Checkup",
        description: "Routine checkup and consultation",
      },
    ],
  },
  {
    name: "Dr. Wilson",
    experience: 24,
    gender: "Female",
    FAQs: [
      {
        question: "Why should you consult a doctor?",
        answer:
          "Doctors are experienced professionals who can help you determine the cause of your issues. It is good for your health.",
      },
      {
        question: "Why is it best to consult a specialist?",
        answer:
          "A specialist doctor is trained to treat complex health conditions in their particular field. If you are diagnosed with a condition, it is best to consult a doctor who specializes in dealing with that particular condition.",
      },
      {
        question: "What are the different modes of consultation?",
        answer:
          "Dr. Manik Dalvi provides different modes of consultation for you to choose from as per your convenience. You can choose to book a clinic appointment in Bhiwandi or you can also consult the doctor online via video or telephonic call.",
      },
    ],
    specialization: "Orthopedic Surgeon",
    education: ["MBBS"],
    biography:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.",
    fees: 312,
    treatments: [
      {
        name: "Cancer",
        description: "Treatment for cancer patients",
      },
      {
        name: "General Checkup",
        description: "Routine checkup and consultation",
      },
    ],
  },
  {
    name: "Dr. Brown",
    experience: 20,
    gender: "Female",
    FAQs: [
      {
        question: "Why should you consult a doctor?",
        answer:
          "Doctors are experienced professionals who can help you determine the cause of your issues. It is good for your health.",
      },
      {
        question: "Why is it best to consult a specialist?",
        answer:
          "A specialist doctor is trained to treat complex health conditions in their particular field. If you are diagnosed with a condition, it is best to consult a doctor who specializes in dealing with that particular condition.",
      },
      {
        question: "What are the different modes of consultation?",
        answer:
          "Dr. Manik Dalvi provides different modes of consultation for you to choose from as per your convenience. You can choose to book a clinic appointment in Bhiwandi or you can also consult the doctor online via video or telephonic call.",
      },
    ],
    specialization: "Neurologist",
    education: ["DM"],
    biography:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.",
    fees: 487,
    treatments: [
      {
        name: "Cancer",
        description: "Treatment for cancer patients",
      },
      {
        name: "General Checkup",
        description: "Routine checkup and consultation",
      },
    ],
  },
  {
    name: "Dr. Hernandez",
    experience: 7,
    gender: "Female",
    FAQs: [
      {
        question: "Why should you consult a doctor?",
        answer:
          "Doctors are experienced professionals who can help you determine the cause of your issues. It is good for your health.",
      },
      {
        question: "Why is it best to consult a specialist?",
        answer:
          "A specialist doctor is trained to treat complex health conditions in their particular field. If you are diagnosed with a condition, it is best to consult a doctor who specializes in dealing with that particular condition.",
      },
      {
        question: "What are the different modes of consultation?",
        answer:
          "Dr. Manik Dalvi provides different modes of consultation for you to choose from as per your convenience. You can choose to book a clinic appointment in Bhiwandi or you can also consult the doctor online via video or telephonic call.",
      },
    ],
    specialization: "Orthopedic Surgeon",
    education: ["MS"],
    biography:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.",
    fees: 251,
    treatments: [
      {
        name: "Cancer",
        description: "Treatment for cancer patients",
      },
      {
        name: "General Checkup",
        description: "Routine checkup and consultation",
      },
    ],
  },
  {
    name: "Dr. Brown",
    experience: 12,
    gender: "Male",
    FAQs: [
      {
        question: "Why should you consult a doctor?",
        answer:
          "Doctors are experienced professionals who can help you determine the cause of your issues. It is good for your health.",
      },
      {
        question: "Why is it best to consult a specialist?",
        answer:
          "A specialist doctor is trained to treat complex health conditions in their particular field. If you are diagnosed with a condition, it is best to consult a doctor who specializes in dealing with that particular condition.",
      },
      {
        question: "What are the different modes of consultation?",
        answer:
          "Dr. Manik Dalvi provides different modes of consultation for you to choose from as per your convenience. You can choose to book a clinic appointment in Bhiwandi or you can also consult the doctor online via video or telephonic call.",
      },
    ],
    specialization: "Psychiatrist",
    education: ["DM"],
    biography:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.",
    fees: 176,
    treatments: [
      {
        name: "Cancer",
        description: "Treatment for cancer patients",
      },
      {
        name: "General Checkup",
        description: "Routine checkup and consultation",
      },
    ],
  },
  {
    name: "Dr. Miller",
    experience: 33,
    gender: "Male",
    FAQs: [
      {
        question: "Why should you consult a doctor?",
        answer:
          "Doctors are experienced professionals who can help you determine the cause of your issues. It is good for your health.",
      },
      {
        question: "Why is it best to consult a specialist?",
        answer:
          "A specialist doctor is trained to treat complex health conditions in their particular field. If you are diagnosed with a condition, it is best to consult a doctor who specializes in dealing with that particular condition.",
      },
      {
        question: "What are the different modes of consultation?",
        answer:
          "Dr. Manik Dalvi provides different modes of consultation for you to choose from as per your convenience. You can choose to book a clinic appointment in Bhiwandi or you can also consult the doctor online via video or telephonic call.",
      },
    ],
    specialization: "Dermatologist",
    education: ["DM"],
    biography:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.",
    fees: 475,
    treatments: [
      {
        name: "Cancer",
        description: "Treatment for cancer patients",
      },
      {
        name: "General Checkup",
        description: "Routine checkup and consultation",
      },
    ],
  },
  {
    name: "Dr. Garcia",
    experience: 16,
    gender: "Male",
    FAQs: [
      {
        question: "Why should you consult a doctor?",
        answer:
          "Doctors are experienced professionals who can help you determine the cause of your issues. It is good for your health.",
      },
      {
        question: "Why is it best to consult a specialist?",
        answer:
          "A specialist doctor is trained to treat complex health conditions in their particular field. If you are diagnosed with a condition, it is best to consult a doctor who specializes in dealing with that particular condition.",
      },
      {
        question: "What are the different modes of consultation?",
        answer:
          "Dr. Manik Dalvi provides different modes of consultation for you to choose from as per your convenience. You can choose to book a clinic appointment in Bhiwandi or you can also consult the doctor online via video or telephonic call.",
      },
    ],
    specialization: "OB-GYN",
    education: ["MD"],
    biography:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.",
    fees: 71,
    treatments: [
      {
        name: "Cancer",
        description: "Treatment for cancer patients",
      },
      {
        name: "General Checkup",
        description: "Routine checkup and consultation",
      },
    ],
  },
  {
    name: "Dr. Hernandez",
    experience: 29,
    gender: "Male",
    FAQs: [
      {
        question: "Why should you consult a doctor?",
        answer:
          "Doctors are experienced professionals who can help you determine the cause of your issues. It is good for your health.",
      },
      {
        question: "Why is it best to consult a specialist?",
        answer:
          "A specialist doctor is trained to treat complex health conditions in their particular field. If you are diagnosed with a condition, it is best to consult a doctor who specializes in dealing with that particular condition.",
      },
      {
        question: "What are the different modes of consultation?",
        answer:
          "Dr. Manik Dalvi provides different modes of consultation for you to choose from as per your convenience. You can choose to book a clinic appointment in Bhiwandi or you can also consult the doctor online via video or telephonic call.",
      },
    ],
    specialization: "OB-GYN",
    education: ["DNB"],
    biography:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.",
    fees: 261,
    treatments: [
      {
        name: "Cancer",
        description: "Treatment for cancer patients",
      },
      {
        name: "General Checkup",
        description: "Routine checkup and consultation",
      },
    ],
  },
  {
    name: "Dr. Williams",
    experience: 40,
    gender: "Female",
    FAQs: [
      {
        question: "Why should you consult a doctor?",
        answer:
          "Doctors are experienced professionals who can help you determine the cause of your issues. It is good for your health.",
      },
      {
        question: "Why is it best to consult a specialist?",
        answer:
          "A specialist doctor is trained to treat complex health conditions in their particular field. If you are diagnosed with a condition, it is best to consult a doctor who specializes in dealing with that particular condition.",
      },
      {
        question: "What are the different modes of consultation?",
        answer:
          "Dr. Manik Dalvi provides different modes of consultation for you to choose from as per your convenience. You can choose to book a clinic appointment in Bhiwandi or you can also consult the doctor online via video or telephonic call.",
      },
    ],
    specialization: "Cardiologist",
    education: ["DM"],
    biography:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.",
    fees: 493,
    treatments: [
      {
        name: "Cancer",
        description: "Treatment for cancer patients",
      },
      {
        name: "General Checkup",
        description: "Routine checkup and consultation",
      },
    ],
  },
  {
    name: "Dr. Thomas",
    experience: 10,
    gender: "Male",
    FAQs: [
      {
        question: "Why should you consult a doctor?",
        answer:
          "Doctors are experienced professionals who can help you determine the cause of your issues. It is good for your health.",
      },
      {
        question: "Why is it best to consult a specialist?",
        answer:
          "A specialist doctor is trained to treat complex health conditions in their particular field. If you are diagnosed with a condition, it is best to consult a doctor who specializes in dealing with that particular condition.",
      },
      {
        question: "What are the different modes of consultation?",
        answer:
          "Dr. Manik Dalvi provides different modes of consultation for you to choose from as per your convenience. You can choose to book a clinic appointment in Bhiwandi or you can also consult the doctor online via video or telephonic call.",
      },
    ],
    specialization: "Gastroenterologist",
    education: ["MD"],
    biography:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.",
    fees: 404,
    treatments: [
      {
        name: "Cancer",
        description: "Treatment for cancer patients",
      },
      {
        name: "General Checkup",
        description: "Routine checkup and consultation",
      },
    ],
  },
  {
    name: "Dr. Williams",
    experience: 3,
    gender: "Female",
    FAQs: [
      {
        question: "Why should you consult a doctor?",
        answer:
          "Doctors are experienced professionals who can help you determine the cause of your issues. It is good for your health.",
      },
      {
        question: "Why is it best to consult a specialist?",
        answer:
          "A specialist doctor is trained to treat complex health conditions in their particular field. If you are diagnosed with a condition, it is best to consult a doctor who specializes in dealing with that particular condition.",
      },
      {
        question: "What are the different modes of consultation?",
        answer:
          "Dr. Manik Dalvi provides different modes of consultation for you to choose from as per your convenience. You can choose to book a clinic appointment in Bhiwandi or you can also consult the doctor online via video or telephonic call.",
      },
    ],
    specialization: "Pediatrician",
    education: ["DM"],
    biography:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.",
    fees: 176,
    treatments: [
      {
        name: "Cancer",
        description: "Treatment for cancer patients",
      },
      {
        name: "General Checkup",
        description: "Routine checkup and consultation",
      },
    ],
  },
  {
    name: "Dr. Wilson",
    experience: 21,
    gender: "Male",
    FAQs: [
      {
        question: "Why should you consult a doctor?",
        answer:
          "Doctors are experienced professionals who can help you determine the cause of your issues. It is good for your health.",
      },
      {
        question: "Why is it best to consult a specialist?",
        answer:
          "A specialist doctor is trained to treat complex health conditions in their particular field. If you are diagnosed with a condition, it is best to consult a doctor who specializes in dealing with that particular condition.",
      },
      {
        question: "What are the different modes of consultation?",
        answer:
          "Dr. Manik Dalvi provides different modes of consultation for you to choose from as per your convenience. You can choose to book a clinic appointment in Bhiwandi or you can also consult the doctor online via video or telephonic call.",
      },
    ],
    specialization: "Endocrinologist",
    education: ["DM"],
    biography:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum feugiat varius.",
    fees: 204,
    treatments: [
      {
        name: "Cancer",
        description: "Treatment for cancer patients",
      },
      {
        name: "General Checkup",
        description: "Routine checkup and consultation",
      },
    ],
  },
];

const clinicData = [
  ["Manik Dalvi's Clinic, Street Name, New York, NY, 10001", '+1 56-653-1504'],
  ["ABC Medical Center, Street Name, Los Angeles, CA, 90001",  '+1 199-289-763'],
  ["City Health Clinic, Street Name, Chicago, IL, 60601", '+1 990-297-6192'],
  ["Elite Wellness Center, Street Name, Houston, TX, 77001",'+1 923-583-4474'],
  ["Sunrise Healthcare, Street Name, Phoenix, AZ, 85001",'+1 927-755-9206'],
  ["Wellness First Clinic, Street Name, Philadelphia, PA, 19101", '+1 504-785-5213'],
  ["Healing Hands Clinic, Street Name, San Antonio, TX, 78201", '+1 504-785-5213'],
  ["Community Care Center, Street Name, San Diego, CA, 92101", '+1 504-785-5213'],
  ["Metro Health Services, Street Name, Dallas, TX, 75201", '+1 504-785-5213'],
  ["Greenland Medical Associates, Street Name, San Jose, CA, 95101", '+1 504-785-5213'],
];

const slotData=[
  {
    sid: 1,
    did: '658828cf8a341add00cdc38e',
    cid: 9,
    day: 'Monday',
    time: '02:00 PM'
  },
  {
    sid: 2,
    did: '658828cf8a341add00cdc3ac',
    cid: 9,
    day: 'Thursday',
    time: '11:00 AM'
  },
  {
    sid: 3,
    did: '658828cf8a341add00cdc382',
    cid: 2,
    day: 'Wednesday',
    time: '03:00 PM'
  },
  {
    sid: 4,
    did: '658828cf8a341add00cdc3a0',
    cid: 3,
    day: 'Thursday',
    time: '02:00 PM'
  },
  {
    sid: 5,
    did: '658828cf8a341add00cdc382',
    cid: 10,
    day: 'Friday',
    time: '03:00 PM'
  },
  {
    sid: 6,
    did: '658828cf8a341add00cdc3b2',
    cid: 7,
    day: 'Friday',
    time: '10:00 AM'
  },
  {
    sid: 7,
    did: '658828cf8a341add00cdc37c',
    cid: 10,
    day: 'Wednesday',
    time: '10:00 AM'
  },
  {
    sid: 8,
    did: '658828cf8a341add00cdc3b8',
    cid: 7,
    day: 'Tuesday',
    time: '11:00 AM'
  },
  {
    sid: 9,
    did: '658828cf8a341add00cdc3b8',
    cid: 10,
    day: 'Thursday',
    time: '10:00 AM'
  },
  {
    sid: 10,
    did: '658828cf8a341add00cdc38e',
    cid: 6,
    day: 'Wednesday',
    time: '09:00 AM'
  },
  {
    sid: 11,
    did: '658828cf8a341add00cdc3b8',
    cid: 8,
    day: 'Friday',
    time: '10:00 AM'
  },
  {
    sid: 12,
    did: '658828cf8a341add00cdc3a6',
    cid: 7,
    day: 'Monday',
    time: '11:00 AM'
  },
  {
    sid: 13,
    did: '658828cf8a341add00cdc3ac',
    cid: 8,
    day: 'Wednesday',
    time: '11:00 AM'
  },
  {
    sid: 14,
    did: '658828cf8a341add00cdc388',
    cid: 10,
    day: 'Wednesday',
    time: '02:00 PM'
  },
  {
    sid: 15,
    did: '658828cf8a341add00cdc36a',
    cid: 1,
    day: 'Thursday',
    time: '10:00 AM'
  },
  {
    sid: 16,
    did: '658828cf8a341add00cdc3a6',
    cid: 8,
    day: 'Monday',
    time: '03:00 PM'
  },
  {
    sid: 17,
    did: '658828cf8a341add00cdc382',
    cid: 4,
    day: 'Friday',
    time: '10:00 AM'
  },
  {
    sid: 18,
    did: '658828cf8a341add00cdc3ac',
    cid: 1,
    day: 'Tuesday',
    time: '09:00 AM'
  },
  {
    sid: 19,
    did: '658828cf8a341add00cdc3a6',
    cid: 6,
    day: 'Thursday',
    time: '02:00 PM'
  },
  {
    sid: 20,
    did: '658828cf8a341add00cdc376',
    cid: 5,
    day: 'Monday',
    time: '11:00 AM'
  },
  {
    sid: 21,
    did: '658828cf8a341add00cdc3ac',
    cid: 8,
    day: 'Wednesday',
    time: '10:00 AM'
  },
  {
    sid: 22,
    did: '658828cf8a341add00cdc3b8',
    cid: 9,
    day: 'Wednesday',
    time: '11:00 AM'
  },
  {
    sid: 23,
    did: '658828cf8a341add00cdc370',
    cid: 1,
    day: 'Friday',
    time: '10:00 AM'
  },
  {
    sid: 24,
    did: '658828cf8a341add00cdc394',
    cid: 2,
    day: 'Monday',
    time: '10:00 AM'
  },
  {
    sid: 25,
    did: '658828cf8a341add00cdc39a',
    cid: 9,
    day: 'Tuesday',
    time: '02:00 PM'
  },
  {
    sid: 26,
    did: '658828cf8a341add00cdc3a0',cid: 1,
    day: 'Wednesday',
    time: '09:00 AM'
  },
  {
    sid: 27,
    did: '658828cf8a341add00cdc3a0',
    cid: 7,
    day: 'Friday',
    time: '03:00 PM'
  },
  {
    sid: 28,
    did: '658828cf8a341add00cdc382',
    cid: 4,
    day: 'Thursday',
    time: '10:00 AM'
  },
  {
    sid: 29,
    did: '658828cf8a341add00cdc376',
    cid: 4,
    day: 'Friday',
    time: '10:00 AM'
  },
  {
    sid: 30,
    did: '658828cf8a341add00cdc3a6',
    cid: 5,
    day: 'Tuesday',
    time: '09:00 AM'
  },
  {
    sid: 31,
    did: '658828cf8a341add00cdc39a',
    cid: 4,
    day: 'Tuesday',
    time: '10:00 AM'
  },
  {
    sid: 32,
    did: '658828cf8a341add00cdc376',
    cid: 2,
    day: 'Friday',
    time: '11:00 AM'
  },
  {
    sid: 33,
    did: '658828cf8a341add00cdc37c',
    cid: 3,
    day: 'Thursday',
    time: '11:00 AM'
  },
  {
    sid: 34,
    did: '658828cf8a341add00cdc3a6',
    cid: 8,
    day: 'Monday',
    time: '11:00 AM'
  },
  {
    sid: 35,
    did: '658828cf8a341add00cdc3be',
    cid: 5,
    day: 'Monday',
    time: '09:00 AM'
  },
  {
    sid: 36,
    did: '658828cf8a341add00cdc39a',
    cid: 4,
    day: 'Monday',
    time: '09:00 AM'
  },
  {
    sid: 37,
    did: '658828cf8a341add00cdc3b2',
    cid: 6,
    day: 'Tuesday',
    time: '03:00 PM'
  },
  {
    sid: 38,
    did: '658828cf8a341add00cdc3a0',
    cid: 4,
    day: 'Monday',
    time: '02:00 PM'
  },
  {
    sid: 39,
    did: '658828cf8a341add00cdc38e',
    cid: 4,
    day: 'Tuesday',
    time: '09:00 AM'
  },
  {
    sid: 40,
    did: '658828cf8a341add00cdc36a',
    cid: 8,
    day: 'Monday',
    time: '10:00 AM'
  },
  {
    sid: 41,
    did: '658828cf8a341add00cdc36a',
    cid: 9,
    day: 'Wednesday',
    time: '10:00 AM'
  },
  {
    sid: 42,
    did: '658828cf8a341add00cdc3ac',
    cid: 6,
    day: 'Friday',
    time: '03:00 PM'
  },
  {
    sid: 43,
    did: '658828cf8a341add00cdc3ac',
    cid: 10,
    day: 'Thursday',
    time: '09:00 AM'
  },
  {
    sid: 44,
    did: '658828cf8a341add00cdc39a',
    cid: 9,
    day: 'Thursday',
    time: '03:00 PM'
  },
  {
    sid: 45,
    did: '658828cf8a341add00cdc36a',
    cid: 3,
    day: 'Friday',
    time: '09:00 AM'
  }
]

module.exports = {
  doctorData,
  clinicData,
  slotData
};
