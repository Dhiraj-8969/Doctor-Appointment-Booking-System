import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboaed from './pages/Admin/Dashboaed';
import AllApointment from './pages/Admin/AllApointment';
import DoctorList from './pages/Admin/DoctorList';
import AddDoctor from './pages/Admin/AddDoctor';
import { DoctorContext } from './context/DoctorContext';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import DoctorAppointment from './pages/Doctor/DoctorAppointment';
import DoctorProfile from './pages/Doctor/DoctorProfile';

const App = () => {
  const {aToken}=useContext(AdminContext)
  const {dToken}=useContext(DoctorContext)

  return aToken || dToken ? (
    <div className='bg-[#f8f9fd]'>
      <ToastContainer/>
      <Navbar/>
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          {/* Admin route */}
          <Route path='/' element={<></>}/>
          <Route path='/admin-dashboard' element={<Dashboaed/>}/>
          <Route path='/all-appointments' element={<AllApointment/>}/>
          <Route path='/add-doctor' element={<AddDoctor/>}/>
          <Route path='/doctor-list' element={<DoctorList/>}/>
          {/* Doctor route */}
          <Route path='/doctor-dashboard' element={<DoctorDashboard/>}/>
          <Route path='/doctor-appointments' element={<DoctorAppointment/>}/>
          <Route path='/doctor-profile' element={<DoctorProfile/>}/>
        </Routes>
      </div>
    </div>
  ) : (
    <>
    <Login/>
    <ToastContainer/>
    </>
  )
}

export default App