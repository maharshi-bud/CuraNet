import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  clinicName: { type: String, required: true },
  specialization: String,
  experience: String,

  plan: {
    name: String,
    price: String
  },

  paymentMethod: String,

  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Doctor", doctorSchema);