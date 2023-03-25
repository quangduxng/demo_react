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
    Button
  } from '@chakra-ui/react'
  import {AddIcon} from '@chakra-ui/icons'
  import React, { useState } from 'react';
  import avt from '../assets/image/Doctor.jpg'
  import '../style/input-file.css'
  import "react-widgets/styles.css";
  import Combobox from "react-widgets/Combobox";
  import { handleCreateUser, handleGetUserId } from '../services/User';
  import { ToastContainer, toast } from 'react-toastify';
  import Session from 'react-session-api'
  function ModalUser() {
    const [fullname, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('')
    const [avt, setAvt] = useState('')
    const handleFullNameInput = e => {
      setName(e.target.value);
    }
    const handleAddressInput = e => {
      setAddress(e.target.value);
  
    }
    const handlePhoneInput = e => {
      setPhone(e.target.value);
  
    }
    const handleGenderInput = e => {
      setGender(e.target.value);
  
    }
    const handleAvtInput = e => 
      { 
      setAvt(e.target.files[0]);
  
    }
    const account= localStorage.getItem('user')
    // console.log(Session.get('token'))
  
    const handleCreate = async (req, res) => {
      const da_ta = new FormData();
      da_ta.append("full_name", fullname)
      da_ta.append("address", address)
      da_ta.append("phone_number", phone)
      da_ta.append("gender", gender)
      da_ta.append("file", avt)
      da_ta.append("account", account)
      try {
        setOpen(onClose)
        const data = await handleCreateUser(da_ta)
        
         console.log(data)
        if (data) {
          toast.success("Successful!");
          console.log(data.data.data[0]._id)
          Session.set('id_user',data.data.data[0]._id)
        }  
       
      } catch (error) {
        console.log(error)
        toast.error("Failed!");
      }
    }
   const byid=()=>{
     console.log('hahah');
   }
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [open,setOpen]=useState('');
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    let genderlist = ['Female', 'Male'];
    return (
      <>
        <Button
         className='btn btn-success'
         bg={'#28a745'}
         _hover={'#28a745'}
         onClick={(event)=>{ onOpen(event); byid() }}
         border={'none'}
          > 
          <AddIcon mr='7px'/> 
          Add User
        </Button>
        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
          onClose={open}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add information user</ModalHeader>
            <ModalCloseButton onClick={onClose} />
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
              {/* <FormControl mt={4}>
                <FormLabel>avt</FormLabel>
                <Input id ='file' type={'file'} onChange={handleAvtInput}></Input>
              </FormControl> */}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleCreate}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal> 
      </>
  
  
    )
  }
  
  export default ModalUser;