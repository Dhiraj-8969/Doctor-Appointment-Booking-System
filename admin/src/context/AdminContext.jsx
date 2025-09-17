import { createContext, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const AdminContext= createContext()

const AdminContextProvider=(props)=>{

  const [aToken, setAToken]=useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken'):'' )
  const [doctors,setDoctors]=useState([])
  const [appointments, setAppointments]=useState([])
  const [dashData, setDashData]=useState(false)
  const [loadingDoc, setLoadingDoc]=useState(true)
  const [loadingDash, setLoadingDash]=useState(true)
  const [loadingApomt, setLoadingApomt]=useState(true)

  const backendUrl= import.meta.env.VITE_BACKEND_URL;

  const getAllDoctors= async()=>{
    try{
      const {data}= await axios.post(backendUrl + '/api/admin/all-doctors',{},{headers:{aToken}})
      if(data.success){
        setDoctors(data.doctors)
        setLoadingDoc(false)
      }else{
        toast.error(data.message)
        setLoadingDoc(false)
      }
    }catch(error){
      toast.error(error.message)
      setLoadingDoc(false)
    }
  }

  const changeAvailablity = async(docId)=>{
    try{
      const {data}=await axios.post(backendUrl + '/api/admin/change-availablity',{docId},{headers:{aToken}})
      if (data.success) {
        toast.success(data.message)
        getAllDoctors()
      }else{
        toast.error(data.message) 
      }
    }catch(error){
      toast.error(error.message) 
    }
  }

  const getAllAppointments = async ()=>{
    try{
      const {data} = await axios.get(backendUrl + '/api/admin/appointments',{headers:{aToken}})
      if (data.success) {
        setAppointments(data.appointments)
        setLoadingApomt(false)
      }else{
        toast.error(data.message) 
        setLoadingApomt(false)
      }
    }catch(error){
      toast.error(error.message) 
      setLoadingApomt(false)
    }
  }

  const cancelAppointment= async (appointmentId) => {
    try{
      const {data}=await axios.post(backendUrl + '/api/admin/cancel-appointment',{appointmentId},{headers:{aToken}})
      if (data.success) {
        toast.success(data.message)
        getAllAppointments()
      }else{
        toast.warn(data.message) 
      }
    }catch(error){
      toast.error(error.message) 
    }
  }

  const getDashData= async ()=>{
    try{
      const {data}=await axios.get(backendUrl + '/api/admin/dashboard',{headers:{aToken}})
      if (data.success) {
        setDashData(data.dashData)
        setLoadingDash(false)
        
      }else{
        toast.warn(data.message) 
        setLoadingDash(false)
      }
    }catch(error){
      toast.error(error.message)
      setLoadingDash(false)
    }
  }

  const value={
    aToken,setAToken,
    backendUrl,doctors,
    getAllDoctors,changeAvailablity,appointments,
    setAppointments,getAllAppointments,cancelAppointment,
    dashData,getDashData,loadingDoc,loadingDash,loadingApomt
  }
  return(
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  )
}

export default AdminContextProvider