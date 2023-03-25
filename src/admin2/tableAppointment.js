import { Box, Flex,Center } from '@chakra-ui/react'
import React,{lazy, Suspense, useEffect,useState} from 'react';
import ApiCaller from '../utils/apiCaller';
import { Button } from 'react-bootstrap-v5'
import '../admin2/css/table.css'
import Right from './RightTest'
import ModalDoctor from './ModalDoctor'
import { AiOutlineCheck } from 'react-icons/ai'

function TableAppointment() {

    const [Api, setApi] = useState([]);
 
    useEffect(()=>{
        ApiCaller('get-all-doctor', 'GET')
      .then ( async res => {
        console.log(res);
          setApi(res.data.data)
      })
    },[])



  return (
    <>    
    <Box  ml={'330px'}>
        <Box >
        <Box
        ml={'-340px'}
        >
          <Right/>
        </Box>
        <table className="table table-hover" style={{
            width:'1000px',
            height:'600px',
            marginTop:'40px'
        }} >
  <thead>
    <tr>
      {/* <th scope="col">#</th> */}
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Doctor</th>
      <th scope="col">Specialy</th>
      <th scope="col">Clinic</th>
      <th scope="col">Status</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  {/* <tbody>
  {Api.map(api => (
        <>
    <tr>
      <td>{api.full_name}</td>
      <td>{api.speciality.name}</td>
      <td>{api.age}</td>
     
      <td>{(api.gender) = 'true' ? <p>Male</p> : <p>Female</p>}</td>
      <td>
        <tr style={{
            border:'none'
        }}>
            <td   style={{
                  paddingRight: '20px'
            }}>
                <Button className='btn btn-info'> <UpdateDoctor doctor={api._id}/></Button>
        
            </td>
            <td>
              <Button className='btn btn-danger'> 
                <DeleteDoctor doctor={api._id}/>
              </Button>
            </td>
        </tr>     
      </td>
    
    </tr>
    </>
      ))}   
  </tbody> */}
  <tbody>
  {/* {Api.map(api => ( */}
    <>
        <tr>
        <td>Nam</td>
        <td>076851211034</td>
        <td>Dr.Thanh</td>
        <td>Neurology</td>
        <td>Da Nang city</td>
        <td>Waiting</td>   
        <td><Button className='btn btn-success' width={'70px !important'}> <AiOutlineCheck /> </Button></td>
        </tr>
    </>   
  </tbody>
</table>

        </Box>
    </Box>
    </>

    
  )
}

export default TableAppointment