import { Flex, Box, Image, Button, Text,} from '@chakra-ui/react'
import React,{useEffect,useState} from 'react'
import '../style/SliderDoctor.css'
import ApiCaller from '../utils/apiCaller';
import { Router, useNavigate } from 'react-router-dom'

import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

function Adoctor(props) {
  const navigate = useNavigate()

  const [Api, setApi] = useState([]);
  const [Id, setId] =useState('');
   useEffect(()=>{
       ApiCaller('get-all-doctor', 'GET')
     .then ( async res => {
     console.log(res);
         setApi(res.data.data)
     })
    
   },[])
   
   const book=(e)=>{

   const loggedInUser = localStorage.getItem('token');
      if(!loggedInUser){
        navigate('/signin')
        toast.warning("Please Login To Continue");
      }
      else{
        console.log(e.target.value);
        navigate('/booking/'+`${e.target.value}`);
        //console.log('/book/'+`${e.target.value}`);
      }

}
  return (
    <>
    
    <Flex
     
      w='280px'
      h='360px'
      borderRadius='2xl'
      bgColor='gray.200'
      border='none'
        className='Adoctor' 
      >
      <Box d='flex' flexDirection='column' alignItems='center'  >
        <Image className='img-doctor1'  src={props.avt} />
        <Text className='text-info1' >{props.full_name}</Text>
        <Text className='text-info1'>{props.speciality}</Text>
        {/* <Text className='text-info' id='id' value={props._id}>{props._id}</Text> */}
        <Button mt='20px '  value={props._id} onClick={book}
        // id={Api.map(api=>api._id)}
          colorScheme='blue' className='btn-book' >Book Now</Button>
       
       
      </Box>
    </Flex>
    </>
  )
}

export default Adoctor