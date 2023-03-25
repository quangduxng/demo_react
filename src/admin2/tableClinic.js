import { Box, Flex,Center } from '@chakra-ui/react'
import React,{lazy, Suspense, useEffect,useState} from 'react';
import ApiCaller from '../utils/apiCaller';
import { Button } from 'react-bootstrap-v5'
import '../admin2/css/table.css'
import Right from './RightTest';
import { EditIcon, AddIcon,DeleteIcon} from '@chakra-ui/icons'
import AddClinic from './ModalAddClinic'
import Card from './CardClinic'
function TableClinic() {    

    const [Api, setApi] = useState([]);
    useEffect(()=>{
        ApiCaller('get-all-branch', 'GET')
      .then ( async res => {
        console.log(res);
          setApi(res.data.data)
      })
    },[])

    let i=1;
    function  deleteUser(id){     
        console.log(id);
    }
  return (
    <>  
    <Box> 
        <Box>
        <Right/>
        <Box 
          style={{
            marginLeft:'1275px',
            marginTop:'25px',
            color:'none'
          }} 
          > 
          <AddClinic/> 
        </Box> 
          <Box
          d={'flex'}
          w={'1140px'}
          flexWrap={'wrap'}
          ml={'300px'}
          >
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </Box>
        </Box>
    </Box>
    </>
  )
}

export default TableClinic