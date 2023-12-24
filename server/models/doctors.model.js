const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  FAQs: [
    {
      question: {
        type: String,
        required: true,
      },
      answer: {
        type: String,
        required: true,
      },
    },
  ],
  specialization: {
    type: String,
    required: true,
  },
  education: {
    type: [String],
    required: true,
  },
  biography: {
    type: String,
    required: true,
  },
  fees: {
    type: Number,
    required: true,
  },
  treatments: [
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
