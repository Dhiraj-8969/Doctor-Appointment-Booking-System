import { createContext, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";

export const DoctorContext = createContext()

const DoctorContextProvider = (props) => {

  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [dToken, setDToken] = useState(localStorage.getItem('dToken') ? localStorage.getItem('dToken') : '')
  const [appointments, setAppointments] = useState([])
  const [dashborad, setDashborad] = useState(false)
  const [profileData, setProfileData] = useState(false)
  const [loadingDash, setLoadingDash] = useState(true) 
  const [loadingApomt, setLoadingApomt] = useState(true)
  const [loadingProfile, setLoadingProfile] = useState(true)

  const getAppointments = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/doctor/appointments', { headers: { dToken } })
      if (data.success) {
        setAppointments(data.appointments)
        setLoadingApomt(false)
      } else {
        toast.error(data.message)
        setLoadingApomt(false)
      }

    } catch (error) {
      console.log(error.message)
      setLoadingApomt(false)
      toast.error(error.message)
    }
  }

  const completeAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/doctor/complete-appointment', { appointmentId }, { headers: { dToken } })
      if (data.success) {
        toast.success(data.message)
        getAppointments()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error.message)
      toast.error(error.message)
    }
  }

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/doctor/cancel-appointment', { appointmentId }, { headers: { dToken } })
      if (data.success) {
        toast.success(data.message)
        getAppointments()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error.message)
      toast.error(error.message)
    }
  }

  const getDashData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/doctor/dashboard', { headers: { dToken } })
      if (data.success) {
        setDashborad(data.dashboard)
        setLoadingDash(false)
      } else {
        toast.error(data.message)
        setLoadingDash(false)
      }
    } catch (error) {
      console.log(error.message);
      setLoadingDash(false)
      toast.error(error.message)
    }
  }

  const getProfileData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/doctor/profile', { headers: { dToken } })
      if (data.success) {
        setProfileData(data.profileData)
        setLoadingProfile(false)
      } else {
        toast.error(data.message)
        setLoadingProfile(false)
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
      setLoadingProfile(false);
    }
  }

  const value = {
    dToken, setDToken,
    backendUrl, setAppointments,
    getAppointments,
    appointments,
    completeAppointment,
    cancelAppointment,
    dashborad, setDashborad, getDashData,
    profileData, getProfileData, setProfileData,
    loadingDash, loadingApomt ,loadingProfile
  }
  return (
    <DoctorContext.Provider value={value}>
      {props.children}
    </DoctorContext.Provider>
  )
}

export default DoctorContextProvider