import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormLabel,
    FormControl,
    Input,
    Button,
    Box,
    Image
  } from '@chakra-ui/react'
  import React, { useState,useEffect } from 'react';
  import avt from '../assets/image/Doctor.jpg'
  import '../style/input-file.css'
  import "react-widgets/styles.css";
  import '../style/button.css'
  import { handleCreateAppointment } from '../services/Appointment';
  import { ToastContainer, toast } from 'react-toastify';
  
  
  
  function ConfirmAppointment(props) {

      const doctors =  props.doctor
      const users = props.user
      const dates = props.date
      const times = props.time
      const branch = props.branch

      console.log('Data appointment 1:')
      console.log(doctors)
      console.log(users)
      console.log(dates)
      console.log(times)
      console.log(branch)

      

    const handleCreateApp = async () =>{
      // setDoctor(doctors)
      // setUser(users)
      // setDate(dates)
      // setTime(times)
      const da_ta = new FormData();
        da_ta.append("doctor", doctors)
        da_ta.append("user", users)
        da_ta.append("date", dates)
        da_ta.append("time", times)
        da_ta.append("branch", branch)
        
        try {
          const data = await handleCreateAppointment(da_ta) 
          console.log("Data Appointment Servics")
        console.log(data)
          console.log("Data appointment 2")
          console.log(data)
          if (data) {
            await localStorage.setItem('Id_User',data.data.data[0]._id)
          }
          toast.success("Successful!");
        } catch (error) {
          console.log(error)
          toast.error("Failed!");
        }
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    return (
      <>
  
        <Button onClick={onOpen}  className='btn-confirm'>Confirm Appointment</Button>
  
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Confirm Appointment</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Do you want to create this appointment?</ModalBody>
            <ModalFooter>

              <Button colorScheme='blue' mr={3} as='a' onClick={
                handleCreateApp
              } href ='/profile'>
              Confirm
              </Button>
              <ToastContainer />
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
  
      </>
  
  
    )
  }
  
  export default ConfirmAppointment;