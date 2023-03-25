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
  import React, { lazy, Suspense, useEffect, useState } from 'react';
  import ApiCaller from '../utils/apiCaller';
  import avt from '../assets/image/Doctor.jpg'
  import '../style/input-file.css'
  import "react-widgets/styles.css";
  import { PhoneIcon, AddIcon, CheckIcon, DeleteIcon,EditIcon } from '@chakra-ui/icons'
  import '../style/button.css'
  import { handleDeleteUser } from '../services/admin';
  import { useNavigate } from 'react-router-dom'
  import { DefaultContext } from 'react-icons/lib';
  
  
  
  function DeleteUser(props) {
    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    const [open,setOpen]=useState('');
    const id = props.user;
    // console.log(id);
  
    const [Api, setApi] = useState([]);
  
    useEffect(() => {
      ApiCaller('get-all-user', 'GET')
        .then(async res => {
         
          setApi(res.data.data)
        })
    }, [])
    async function  deleteUser(id) {
    
      try {
        console.log('id xóa là');
       console.log(id);
   
       const data= await handleDeleteUser(id);
       console.log('da xoa id');
       console.log(data);
       console.log('thanh cong');
       setOpen(onClose)
       navigate('/admin/user')
      } catch (error) {
       console.log('that bai');
        console.log(error);
      }
   
   }
  
  
    return (
      <>
        <DeleteIcon  onClick={onOpen} />
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
  
          <ModalContent>
  
            <ModalHeader>Confirm Update</ModalHeader>
            <ModalCloseButton />

            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Full name</FormLabel>
                <Input ref={initialRef} placeholder='Full name' onChange={handleFullNameInput} />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Address</FormLabel>
                <Input placeholder='Address' onChange={handleAddressInput} />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Phone</FormLabel>
                <Input placeholder='Phone' onChange={handlePhoneInput} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Gender</FormLabel>
                <Combobox
                />
              </FormControl>
              
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={(event)=>{ onOpen(event);deleteUser(props.user) }}
              >
                Delete
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
  
        </Modal>
      </>
    )
  }
  
  export default DeleteUser;