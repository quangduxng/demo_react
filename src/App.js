import Home from "./components/Homepage";
import Login from "./components/Login";
import { Signup } from "./components/Signup";
import React from "react";
import { Routes, Route, Navigate, RequireAuth } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import ProfileUser from "./components/ProfileUser";
import ContactFormWithSocialButtons from "./components/Contact";
import Alldoctor from "./components/Alldoctor";
import InitialFocus2 from "./components/updateprofile";
import Booking from "./components/Booking"
import Table from "./admin2/tableDoctor";
import TableClinic from "./admin2/tableClinic";
import PrivateRoute from '../src/admin2/auth/PrivateRoute'
import Logoutadmin from "./admin2/logout";
import TableUser from "./admin2/tableUser";
import TableAppointment from './admin2/tableAppointment'
import BarChart from "./admin2/Chart"

import Dashboard from "./admin2/Dashboard"

import DoctorBySpeciality from "./components/DoctorBySpeciality";

import AllNews from "./components/AllNew"
import News from "./components/News"
import Card from "./admin2/CardClinic"

function App() {
  return (
    <ChakraProvider>
      <Routes>
        {/* customer */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/contact" element={<ContactFormWithSocialButtons />} />
        <Route path="/profile" element={<ProfileUser />} >
        </Route><Route path="/profile/user" element={<InitialFocus2 />} />
        <Route path="/home" element={<Home />} />
        <Route path="/allnews" element={<AllNews />} />
        <Route path="/news" element={<News />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/doctor" element={<Alldoctor />} />
        <Route path='/Speciality/:name'  element={<DoctorBySpeciality/>}/>
        <Route path="/booking" element={<Booking />} />
        <Route path="/testadmin" element={<BarChart />} />
        <Route path='/booking/:id' element={<Booking />} />
        {/* admin */}
        <Route path="/admin" element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
        <Route path='/admin/doctor' element={<PrivateRoute><Table /></PrivateRoute>} />
        <Route path='/admin/user' element={<PrivateRoute><TableUser /></PrivateRoute>} />
        <Route path='/admin/clinic' element={<PrivateRoute><TableClinic /></PrivateRoute>} />
        <Route path='/admin/appointment' element={<PrivateRoute><TableAppointment /></PrivateRoute>} />
        <Route path='/admin/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path='/admin/test' element={<PrivateRoute><Card /></PrivateRoute>} />
        <Route path="/logout" element={<PrivateRoute> <Logoutadmin /></PrivateRoute>}> 
       
       
     
      
        </Route>
      </Routes>
    </ChakraProvider>
  )
}

export default App;