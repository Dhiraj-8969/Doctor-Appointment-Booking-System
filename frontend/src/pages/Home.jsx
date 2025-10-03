import React from 'react'
import Header from '../components/Header';
import SpecialityMenu from '../components/SpecialityMenu';
import TopDoctors from '../components/TopDoctors';
import Banner from '../components/Banner';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';


const Home = () => {
  const { setToken } = useContext(AppContext)
  const navigate = useNavigate()
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      setToken(token);
      localStorage.setItem('token', token);
      // Remove the token from the URL
      window.history.replaceState({}, document.title, window.location.pathname);
      // Navigate to home page or any other page if needed
      navigate('/');
      toast.success("Logged in successfully");
    } else {
      // Check if token exists in localStorage
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        setToken(storedToken);
      }
    }
  }, [setToken, navigate]);



  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
    </div>
  )
}
export default Home;
