import React from 'react'
import Home from '../components/Homepage';
import Admin from './admin'
import { useNavigate } from 'react-router-dom'
function Logoutadmin() {
    delete localStorage.token;
    window.location.href = '/signin';
}

export default Logoutadmin