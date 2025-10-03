import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import React from "react";

export const AppContext = createContext({
  doctors: [],
  currencySymbol: "₹",
  getDoctorsData: () => { },
});

const AppContextProvider = ({ children }) => {
  const currencySymbol = "₹";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [profileloading, setProfileLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false);
  const [userData, setUserData] = useState(false);

  const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/list`);
      if (data.success) {
        setDoctors(data.doctors);
        setLoading(false)
      } else {
        toast.error(data.message || "Failed to fetch doctors.");
        setLoading(false)
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      setLoading(false)
      console.error("Error fetching doctors:", error);
    }
  };

  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, { headers: { token } });
      if (data.success) {
        setUserData(data.userData);
        setProfileLoading(false)
      } else {
        toast.error(data.message);
        setProfileLoading(false)
      }
    } catch (error) {
      toast.error(error.message);
      setProfileLoading(false)
      console.error(error);
    }
  }

  const value = { doctors, currencySymbol, getDoctorsData, token, setToken, backendUrl, userData, setUserData, loadUserProfileData, loading, profileloading}

  useEffect(() => {
    if (backendUrl) getDoctorsData();
  }, [backendUrl]);

  useEffect(() => {
    if (token) {
      loadUserProfileData()
    } else {
      setUserData(false)
    }
  }, [token])
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
