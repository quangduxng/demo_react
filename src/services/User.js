
import axios from 'axios'
const handleLoginAPI = (email, password)=>{
    try {
        return axios.post('https://be-doctor-care-v3.herokuapp.com/api/login', {email, password})
    } catch (error) {
        console.log(error)
    }
}
const handleSignUpAPI = (email, password,password_1,role)=>{
    try {
        return axios.post('https://be-doctor-care-v3.herokuapp.com/api/register', {email, password, password_1,role})
    } catch (error) {
        console.log(error)
    }
}
const handleCreateUser = async (data)=>{
    try {
         var token = await localStorage.getItem('token')
         
        return axios.post('https://be-doctor-care-v3.herokuapp.com/api/create-user/', data,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })      
    } catch (error) {
        console.log(error)
    }
}

const handleGetUserId = async ()=>{
    try {
        let token = await localStorage.getItem('token')
       
        return axios.get('https://be-doctor-care-v3.herokuapp.com/api/profile-user',{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })
    } catch (error) {
        console.log(error)
    }
}
const handleUpdateUser = async (id,data)=>{
    try {
        console.log('id user' + id)
         var token = await localStorage.getItem('token')
        return await axios.put(`https://be-doctor-care-v3.herokuapp.com/api/update-user/${id}`, data,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })      
    } catch (error) {
        console.log(error)
    }
}

export {
    handleLoginAPI ,handleSignUpAPI ,handleCreateUser, handleGetUserId, handleUpdateUser
}