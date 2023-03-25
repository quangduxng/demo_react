import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextFeild';
import * as Yup from 'yup';
import bg from '../assets/image/bg-signup.jpg'
import { useState } from 'react';
import '../style/signup.css'
import {
  Button,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Image,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { handleSignUpAPI } from '../services/User'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
export const Signup = () => {

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const [roleCustomer, setRole] = useState('customer')
  const handleSignup = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    try {
      const data = await handleSignUpAPI(email, password, confirmPassword,'customer')
      console.log(data)
       if (data) {
        await localStorage.setItem('token', data.data.data.tokens[0].token)
        await localStorage.setItem('user', data.data.data._id)
       }
       var loggedInUser = await localStorage.getItem('token')
      
       if (loggedInUser !== null) {
        localStorage.setItem('role',data.data.data.role)
         navigate('/profile/user')
       }

    } catch (error) {
      console.log(error);
      // if (error) {
      //   if (error.response) {
      //     if (error.response.data) {
      //       setMessage(error.response.data.message)
      //     }
      //   }
      // }
    }
  }
  const validate = Yup.object({

    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <>
    <Navbar/>
   
      <Formik
         
        initialValues={{

          email: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={validate}
        onSubmit={values => {
          console.log(values)
        }}
      >

        {formik => (
          <Flex
                
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            
             bg={'blue.100'}
            >
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}  w='500px' >
              <Stack align={'center'} pt='30px' >
                <Heading fontSize={'40px'} fontWeight='500' textColor={'blue.300'} textAlign={'center'}>
                  Sign up
                </Heading>
                <Text fontSize={'lg'} color={'gray.600'}>
                  to enjoy all of our cool features ✌️
                </Text>
              </Stack>
              <Box
                rounded={'lg'}
                bg={'white'}
                boxShadow={'lg'}
                p={8}
                fontSize='20px'
                >
                <Stack spacing={4}  fontSize='20px'>


                  <TextField fontSize='20px' label="Email" id='email' name="email" type="email" />
                  <FormControl  >
                    <TextField fontSize='20px' label='Password' id="password" name="password" type={showPassword ? 'text' : 'password'} />
                    <InputRightElement h={'120px'}>
                      <Button
                        variant={'ghost'}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>



                  </FormControl>
                  <FormControl >
                    {/* <TextField label="Password" name="password" type="password" /> */}

                    <TextField fontSize='2  0px' label="Confirm Password" id="confirmPassword" name="confirmPassword" type={showPassword ? 'text' : 'password'} />
                    <InputRightElement h={'120px'}>
                      <Button
                        variant={'ghost'}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>



                  </FormControl>



                  <Stack spacing={10} pt={2}>
                    <Button

                      as={'a'}
                      onClick={handleSignup}


                      loadingText="Submitting"
                      size="lg"
                      bg={'blue.400'}
                      color={'white'}
                      _hover={{
                        bg: 'blue.500',
                      }}>
                      Sign up
                    </Button>

                  </Stack>

                  <Stack pt={6}>
                    <Text align={'center'}>
                      Already a user? <Link href="/signin" color={'blue.400'} ><a>Login</a></Link>
                    </Text>

                  </Stack>

                </Stack>
              </Box>


            </Stack>
          </Flex>

        )}
      </Formik>
      <Footer/>
    </>
  )
}
