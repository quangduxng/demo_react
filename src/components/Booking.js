import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

import ApiCaller from '../utils/apiCaller';

import Navbar from "./Navbar";
import Footer from './Footer'
import '../style/button.css'
import {
    Box,
    Heading,
    Image,
    Text,
    useColorModeValue,
    Button,
    Tooltip
} from '@chakra-ui/react';
import Doctor from '../assets/image/dtavt.png'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import '../style/Booking.css'
import '../responsive/Appointment.css'
import { getValue } from '@testing-library/user-event/dist/utils';
import Edit from './Modal';
import ConfirmAppointment from './ConfirmAppointment';
import { handleGetUserId } from '../services/User';

export default function Booking() {
    const MyButton = (props) => {
        const [isActive, setActive] = useState(false);
        const handleClick = (e) => {
                //isActive(true)
                 setTime(e.target.innerHTML)
                
                  setActive(!isActive);
                //  console.log('setttt');
                //  console.log(isActive);
                //  console.log(e);
                //  //setTime(e.target.innerHTML)
                
               
        }
    
        
        ;
        
        return (
            <Tooltip label='Double click To select' fontSize='s'>
            <button onClick={handleClick} className={isActive ? "btn-time-selected" : "btn-time"}>
            {props.item}
          </button>
            </Tooltip>
          
        );
      };

    const { id } = useParams();
    const [Api, setApi] = useState([]);
    const [branchs, setBranchs] = useState([]);
    const [branch, setBranch] = useState('')
    const [branch_id, setBranchId] = useState('');
    let clo='white';
    const [bg1,setBg1]=useState(clo);
    const [classon,setClasson]=useState(false)
    

    useEffect(() => {
        ApiCaller('get-all-doctor', 'GET')
            .then(async res => {
                console.log(res);
                setApi(res.data.data)

            })
        ApiCaller('get-all-branch', 'GET')
            .then(async res => {
                console.log('data branch:')
                console.log(res);
                setBranchs(res.data.data)
            })
    }, [])
    const [startDate, setStartDate] = useState(new Date());
    const [time, setTime] = useState('');
    const listTime=['07:00-08:00','08:00-09:00','09:00-10:00','10:00-11:00','14:00-15:00','15:00-16:00','16:00-17:00','17:00-18:00',]
    const onChange = (dates) => {
        const [start] = dates;
        setStartDate(start);
    }
    const handleChange = (e) => {
        const select = e.target;
        const value = select.value;
        const desc = select.selectedOptions[0].text;
        setBranchId(value);
        setBranch(desc)
    }
    console.log('Address')
    console.log(branch)
    const [fullname, setName] = useState('')
    const [avatar, setAvt] = useState('')
    const [gender, setGender] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [IdUser, setIdUser] = useState('')
    async function byID() {
        const data = await handleGetUserId()
        if (data) {
            setIdUser(data.data.data[0]._id)
            setName(data.data.data[0].full_name)
            setAvt(data.data.data[0].avatar)
            setAddress(data.data.data[0].address)
            setPhone(data.data.data[0].phone_number)
            setGender(data.data.data[0].gender)
        }
    }
    const loggedInUser = localStorage.getItem('token')
    useEffect( () => {
        if (loggedInUser) {
             byID()
        }
    }, [])
    return (
        <>
            <Navbar />
            <Box id='container-booking' pt='40px'>
                <Heading as="h1" className='title-appoitment'>Make an appointment</Heading>               
                <Box className='info-personal'>                       
                    <Box className='info-doctor'>
                        {Api.map(api => (
                            <>
                                {(id == api._id) ? (
                                    <>
                                        <Box>
                                            <Text
                                                as="p"
                                                marginTop="5"
                                                color={'gray.900'}
                                                fontSize="xl"
                                                fontWeight={"bold"}
                                            >
                                                Doctor
                                            </Text>
                                            <Button mt='7px' as='a' href='/doctor' _hover={{
                                                backgroundColor: 'blue.300',
                                                color: 'white',
                                                textDecoration: 'none'
                                            }} >Change Doctor</Button>
                                            <Image
                                                className='img-doctor'
                                                borderRadius="full"
                                                src={api.avatar}
                                            />
                                        </Box>
                                        <Box className='wrapper-info-doctor'>
                                            <Text
                                                as="p"
                                                marginTop="20"
                                                color={'gray.900'}
                                                fontSize="lg">
                                                Name: {<b>{api.full_name}</b>}
                                            </Text>
                                            <Text
                                                as="p"
                                                marginTop="5"
                                                color={'gray.900'}
                                                fontSize="lg">
                                                Age: {<b>{api.age}</b>}
                                            </Text>
                                            <Text
                                                as="p"
                                                marginTop="5"
                                                color={'gray.900'}
                                                fontSize="lg">
                                                Speciality:{<b>{api.speciality.name}</b>}
                                            </Text>
                                            <Text
                                                as="p"
                                                marginTop="5"
                                                color={'gray.900'}
                                                fontSize="lg">
                                                Gender: {(api.gender) = 'true' ? <b>Male</b> : <b>Female</b>}
                                            </Text>
                                           
                                        </Box>
                                    </>)

                                    : <></>}

                            </>
                        ))}

                    </Box>

                    <Box className='info-customer'>
                        
                        <Text
                            as="p"
                            marginTop="5"
                            color={useColorModeValue('gray.700', 'gray.200')}
                            fontSize="xl"
                            fontWeight={"bold"}
                        >
                            Customer
                        </Text>
                        <Edit />
                      
                        <Text
                            as="p"
                            marginTop="7"
                            color={useColorModeValue('gray.700', 'gray.200')}
                            fontSize="lg">
                            Name: {<b>{fullname}</b>}
                        </Text>
                       
                        <Text
                            as="p"
                            marginTop="5"
                            color={useColorModeValue('gray.700', 'gray.200')}
                            fontSize="lg">
                            Phone: {<b>{phone}</b>}
                        </Text>
                        <Text
                            as="p"
                            marginTop="5"
                            color={useColorModeValue('gray.700', 'gray.200')}
                            fontSize="lg">
                            Address: {<b> {address}</b>}
                        </Text>
                        <Text
                            as="p"
                            marginTop="5"
                            color={useColorModeValue('gray.700', 'gray.200')}
                            fontSize="lg">
                            Gender: {<b> {gender==true?'Male':'Female'}</b>}
                        </Text>
                       

                    </Box>
                </Box>
                <Box className='picker-comfirm'>
                    <Box className='date'>
                        <Heading as="h3" mt={'10'} mb={'45'}>Choose date</Heading>
                        <Box><DatePicker

                            selected={startDate}
                            onChange={onChange}
                            // excludeDates={[addDays(new Date(), 2), addDays(dateP, 0)]}
                            selectsRange
                            selectsDisabledDaysInRange
                            inline

                        /></Box>


                    </Box>
                    <Box className='time-clinic'>
                        <Heading as="h3" mt={'10'} mb={'45'}>Choose time and clinic</Heading>
                        <Box className='time'  >
                            {listTime.map((timer, i)=>(
                                <MyButton                                                                                                                   
                                  //bgColor={bg1}  
                                // onClick={(e) => {
                                //     console.log(e);
                                //     //setTime(e.target.innerHTML)
                                //     //handleClick();
                                    
                                //  }} 
                                key={i} item={timer}></MyButton>
                            ))}
                         
                        </Box>

                        <Box className='clinic'>


                            <select onChange={handleChange} name="hue" className='select-clinic'>
                                <option selected >Select Clinic</option>
                                {branchs.map(brs => (

                                    <option value={brs._id} > {brs.address} </option>

                                ))}
                            </select>
                        </Box>

                    </Box>
                    <Box className='comfirm-appointment' flex='1' bg='' id='confirm'>
                        <Heading as="h1" mt={'10'} mb={'10'}>Confirm appointment</Heading>
                        <Text fontSize={'20'} mt={'15'} fontWeight='bold' className='name-customer'>Customer</Text>
                        <Box className='wrapper-customer'>
                            <Text
                                as="p"
                                marginTop="5"
                                color={useColorModeValue('gray.700', 'gray.200')}
                                fontSize="md">
                                Name: {<b>{fullname}</b>}
                            </Text>
                            {/* <Text
        as="p"
        marginTop="5"
        color={useColorModeValue('gray.700', 'gray.200')}
        fontSize="md">
        Age: 22
        </Text> */}
                            <Text
                                as="p"
                                marginTop="5"
                                color={useColorModeValue('gray.700', 'gray.200')}
                                fontSize="md">
                                Address: {<b>{address}</b>}
                            </Text>
                            <Text
                                as="p"
                                marginTop="5"
                                color={useColorModeValue('gray.700', 'gray.200')}
                                fontSize="md">
                                Phone: {<b>{phone}</b>}
                            </Text>
                        </Box>
                        <Text fontSize={'20'} mt={'15'} fontWeight='bold' className='name-doctor'>Doctor</Text>

                        {Api.map(api => (
                            <>

                                {(id === api._id) ? (
                                    <>

                                        <Box className='wrapper-doctor'>
                                            <Text
                                                as="p"
                                                marginTop="5"
                                                color={'gray.900'}
                                                fontSize="md">
                                                Name: {<b>{api.full_name}</b>}
                                            </Text>
                                            <Text
                                                as="p"
                                                marginTop="5"
                                                color={'gray.900'}
                                                fontSize="md">
                                                Age: {<b>{api.age}</b>}
                                            </Text>
                                            <Text
                                                as="p"
                                                marginTop="5"
                                                color={'gray.900'}
                                                fontSize="md">
                                                Speciality: {<b>{api.speciality.name}</b>}
                                            </Text>
                                            <Text
                                                as="p"
                                                marginTop="5"
                                                color={'gray.900'}
                                                fontSize="md">
                                                Gender: {(api.gender) = 'true' ? <b>Male</b> : <b>Female</b>}
                                            </Text>
                                        </Box>
                                    </>)

                                    : <></>}

                            </>
                        ))}

                        <Text fontSize={'20'} mt={'15'} fontWeight='bold' className='name-datetime'>Datetime and clinic</Text>
                        <Box className='wrapper-datetime'>
                            <Text
                                as="p"
                                marginTop="5"
                                color={useColorModeValue('gray.700', 'gray.200')}
                                fontSize="md">

                                Date: {<b>{startDate.getDate()}/{startDate.getMonth() + 1}/{startDate.getFullYear()}</b>}
                            </Text>

                            <Text
                                as="p"
                                marginTop="5"
                                color={useColorModeValue('gray.700', 'gray.200')}
                                fontSize="md">
                                {<Box   > Time:{<b>{time}</b>}</Box>}
                            </Text>
                            <Text
                                as="p"
                                marginTop="5"
                                color={useColorModeValue('gray.700', 'gray.200')}
                                fontSize="md">
                                Clinic:  {<b>{branch}</b>}
                            </Text>
                        </Box>


                        <ConfirmAppointment doctor={id} user={IdUser} date={startDate} time={time}
                            branch={branch_id}
                        />

                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    )
}
