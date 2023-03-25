
import { useParams } from "react-router-dom";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Flex,
  Spinner,
  Input
} from '@chakra-ui/react';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import ApiCaller from '../utils/apiCaller';
import { Router, useNavigate } from 'react-router-dom'
import { PhoneIcon, EmailIcon, RepeatClockIcon, InfoIcon } from '@chakra-ui/icons'
import Navbar from "./Navbar";
import Footer from './Footer'
import { ToastContainer, toast } from 'react-toastify';
import {BiSearchAlt} from 'react-icons/bi'

function DoctorBySpeciality() {
  const { name } = useParams();
  const navigate = useNavigate()
  console.log(name);
  const [Api, setApi] = useState([]);

  useEffect(() => {
    ApiCaller('get-all-doctor', 'GET')
      .then(async res => {
        console.log(res);
        setApi(res.data.data)
      })
  }, [])
  const loggedInUser = localStorage.getItem('token');
  const book1 = (e) => {



    if (!loggedInUser) {
      navigate('/signin')
      toast.warning("Please Login To Continue");
    }
    else {

      //  console.log(e.target.value);
      navigate('/booking/' + `${e.target.value}`);
      // console.log('/book/'+`${e.target.value}`);


    }
  }

  return (
    <>
     <Navbar />
      <Box
      position={'relative'}
      >

        <Heading mt='100px' textAlign={'center'}>{name}</Heading>
        <Box
          d={'flex'}
          w={'250px'}
          alignItems={'center'}
          border={'1px #757a80 solid'}
          borderRadius={'15px'}
          position={'absolute'}
          right= {'150px'}
          top= {'4px'}
          pl={'5px'}
        >
            <BiSearchAlt 
            color='#5b6066'
            fontSize={'32px'} />
            <Input 
            border={'none'} 
            size='sm'
            variant='unstyled'
            ></Input>
        </Box>
        {/* <LazyLoad> */}
        <Center mt='10px' py={4}

          d='flex'
          flexWrap={'wrap'}
          justifyContent='start'

        >
          <>

          {/* {Api.map(sp=>(
     sp.speciality.name== name ?<b>{sp.full_name}</b>:<></>
    ))} */}




            {Api.map(api => ( 
               api.speciality.name==name ?
              
              <>
                <Suspense >

                  <Box ml='20px'

                    maxW={'320px'}
                    h={'400px'}
                    w={'320px'}
                    bg={'white'}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    p={6}
                    marginLeft= '40px'
                    mt='25px'
                    textAlign={'center'}>
                    <Avatar
                      size={'xl'}
                      src={
                        api.avatar
                      }
                      alt={api.full_name}
                      mb={4}
                      pos={'relative'}
                      _after={{
                        content: '""',
                        w: 4,
                        h: 4,
                        bg: 'green.400',
                        border: '2px solid white',
                        rounded: 'full',
                        pos: 'absolute',
                        bottom: 0,
                        right: 3,
                      }}
                    />
                    <Heading fontSize={'2xl'} fontFamily={'body'} >
                      {api.full_name}
                    </Heading>
                    <Text fontWeight={600} color={'black'} mb={4}>
                      {api.speciality.name}
                    </Text>

                    <Text
                      textAlign={'left'}
                      color={'black'}
                      px={3}>
                      <InfoIcon />  {api.age}


                    </Text>
                    <Text
                      textAlign={'left'}
                      color={'black'}
                      px={3}>

                      <PhoneIcon />  {api.phone_number}
                    </Text>
                    <Text
                      textAlign={'left'}
                      color={'black'}
                      px={3}>

                      <EmailIcon />   {api.account.email}
                    </Text>



                    <Stack mt='8px'
                      direction={'row'}
                      spacing={4}>
                      <Button
                        mt='30px'
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        boxShadow={
                          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                          bg: 'blue.500',
                        }}
                        value={api._id}
                        onClick={book1}
                        _focus={{
                          bg: 'blue.500',
                        }}>
                        Book Now
                      </Button>
                    </Stack>
                  </Box>
                </Suspense>
                
              </> :<></>
            ) 
            )  }

          </>
        </Center>

        {/* </LazyLoad> */}
      </Box>
      <Footer />

    
    </>
  )
}

export default DoctorBySpeciality