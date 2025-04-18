import doctorModel from "../models/doctorModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import appointmentModel from "../models/appoinmentModel.js"

const changeAvailablity = async (req, res) => {
  try {
    const { docId } = req.body
    const docData = await doctorModel.findById(docId)
    await doctorModel.findByIdAndUpdate(docId, {
      available: !docData.available
    })
    res.json({ success: true, message: 'Availablity Changed' })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

const doctorList = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select(['-password', '-email'])
    res.json({ success: true, doctors })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

const loginDoctor = async (req, res) => {
  try {
    const { email, password } = req.body
    const doctor = await doctorModel.findOne({ email })
    if (!doctor) {
      return res.json({ success: false, message: 'Invalid credentials' })
    }

    const isMatch = await bcrypt.compare(password, doctor.password)
    if (isMatch) {
      const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET)
      res.json({ success: true, token })
    } else {
      res.json({ success: false, message: 'Invalid credentials' })
    }

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

const appointmentsDoctor = async (req, res) => {
  try {
    const { docId } = req.body
    const appointments = await appointmentModel.find({ docId })
    res.json({ success: true, appointments })

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

const appoinmentComplete = async (req, res) => {
  try {
    const { docId, appointmentId } = req.body;


    // Fetch the appointment
    const appointmentData = await appointmentModel.findById(appointmentId);

    // Handle not found
    if (!appointmentData) {
      return res.status(404).json({ success: false, message: "Appointment not found" });
    }

    // Verify doctor authorization
    if (appointmentData.docId.toString() !== docId.toString()) {
      return res.status(403).json({ success: false, message: "Unauthorized to complete this appointment" });
    }

    // Mark as completed
    await appointmentModel.findByIdAndUpdate(appointmentId, { isCompleted: true });

    return res.json({ success: true, message: "Appointment marked as completed" });

  } catch (error) {
    console.error("Error completing appointment:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};


const appoinmentCancel = async (req, res) => {
  try {
    const { docId, appointmentId } = req.body;

    const appointmentData = await appointmentModel.findById(appointmentId);

    if (!appointmentData) {
      return res.status(404).json({ success: false, message: "Appointment not found" });
    }

    if (appointmentData.docId.toString() !== docId.toString()) {
      return res.status(403).json({ success: false, message: "Unauthorized to cancel this appointment" });
    }

    await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true });

    return res.json({ success: true, message: "Appointment cancelled successfully" });
  } catch (error) {
    console.error("Error cancelling appointment:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const doctorDashboard = async (req, res) => {
  try {
    const { docId } = req.body
    const appointments = await appointmentModel.find({ docId })

    let earning = 0
    appointments.map((item) => {
      if (item.isCompleted || item.payment) {
        earning += item.amount
      }
    })

    let patients = []
    appointments.map((item) => {
      if (!patients.includes(item.userId)) {
        patients.push(item.userId)
      }
    })

    const dashboard ={
      earning,
      appointments: appointments.length,
      patients: patients.length,
      latestAppointments: appointments.reverse().slice(0,5)
    }
    res.json({ success: true, dashboard})
  } catch (error) {
    console.log(error.message)
    res.json({ success: false, message:error.message});
  }
}

const doctorProfile = async(req,res)=>{
  try {
    const {docId} = req.body
    const profileData = await doctorModel.findById(docId).select('-password')

    res.json({ success: true, profileData})
  } catch (error) {
    console.log(error.message)
    res.json({ success: false, message:error.message});
  }
}

const updateDoctorProfile = async(req,res)=>{
  try {
    const {docId ,fees, address ,available} = req.body
    await doctorModel.findByIdAndUpdate(docId,{fees, address ,available})

    res.json({ success: true, message:"Profile Updated"})
  } catch (error) {
    console.log(error.message)
    res.json({ success: false, message:error.message});
  }
}

export { changeAvailablity, doctorList, loginDoctor, appointmentsDoctor, appoinmentCancel, appoinmentComplete,doctorDashboard,doctorProfile,updateDoctorProfile }