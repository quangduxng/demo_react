import axios from 'axios'
const handleDeleteUser = async (id)=>{
    try {
        var token = await localStorage.getItem('token')
        console.log('token là chi đó ');
        console.log(token);
        console.log('id là chi đó ');
        console.log(id);
        return await axios.delete(`https://be-doctor-care-v3.herokuapp.com/api/delete-user/${id}`,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })  

        
    } catch (error) {
        console.log(error)
    }
}





export {
   handleDeleteUser
}