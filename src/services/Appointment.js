import axios from 'axios'
const handleCreateAppointment = async (data)=>{
    try {
        return axios.post('https://be-doctor-care-v3.herokuapp.com/api/create-appointment/', data)
        .then(res => console.log(res))
        .catch(err => console.log(err))         
    } catch (error) {
        console.log(error)
    }
}
const handleGetAppointment = async (id)=>{
    try {
        console.log('Id usser')
        console.log(id)
        return axios.get(`https://be-doctor-care-v3.herokuapp.com/api/get-appointment-byuser/${id}`)       
    } catch (error) {
        console.log(error)
    }
}

export {
    handleCreateAppointment,handleGetAppointment
}