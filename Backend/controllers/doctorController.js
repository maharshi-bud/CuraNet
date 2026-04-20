import Doctor from "../models/Doctor.js";

/* ✅ CREATE DOCTOR */
export const registerDoctor = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      clinicName,
      specialization,
      experience,
      plan,
      paymentMethod
    } = req.body;

    // 🔥 basic validation
    if (!fullName || !email || !phone || !clinicName) {
      return res.status(400).json({
        error: "Please fill all required fields"
      });
    }

    const doctor = new Doctor({
      fullName,
      email,
      phone,
      clinicName,
      specialization,
      experience,
      plan,
      paymentMethod
    });

    await doctor.save();

    res.status(201).json({
      message: "Doctor registered successfully",
      doctor
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};


/* ✅ GET ALL DOCTORS */
export const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find().sort({ createdAt: -1 });

    res.json(doctors);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};