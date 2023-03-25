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
import '../style/input-file.css'
import "react-widgets/styles.css";
import Combobox from "react-widgets/Combobox";
import { handleCreateUser, handleGetUserId, handleUpdateUser } from '../services/User';
import { ToastContainer, toast } from 'react-toastify';
function InitialFocus() {
  
  const [fullname, setFullname] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')

  const [gender, setGender] = useState()
  const [avt, setAvt] = useState('')
  const [save,setSave]=useState('Save')
  let genderlist = ['Female', 'Male'];
  const handleFullNameInput = e => {
    setFullname(e.target.value);
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
  const [Id, setId] = useState('')
  const account= localStorage.getItem('user')


  const handleCreate = async () => {
    const da_ta = new FormData();
    da_ta.append("full_name", fullname)
    da_ta.append("address", address)
    da_ta.append("phone_number", phone)
    da_ta.append("gender", gender)
   
    da_ta.append("file", avt)
    da_ta.append("account", account)
    try {
      setSave('Loading...')
      console.log(save);
      setOpen(onOpen)
      const data = await handleCreateUser(da_ta)
      if (data) {
        await localStorage.setItem('Id_User',data.data.data[0]._id)
        const id = localStorage.getItem('Id_User')
        console.log(id)
        setId(id)
      }  
    
      setOpen(onClose)
      
      toast.success("Successful!");
     
    } catch (error) {
      console.log(error)
      toast.error("Failed!");
    }
  }
const handleUpdate = async () =>{
 
  const da_ta = new FormData();
    da_ta.append("full_name", fullname)
    da_ta.append("address", address)
    da_ta.append("phone_number", phone)
    da_ta.append("gender", gender)
    console.log('gio tinh la');
    console.log(gender);
    da_ta.append("file", avt)
    try {
      setSave('Loading...')
      console.log(save);
      setOpen(onOpen)
     
      if (da_ta) {      
        const data = await handleUpdateUser(Id,da_ta) 
        await localStorage.setItem('Id_User',data.data.data[0]._id)
        await setId(localStorage.getItem('Id_User'))
      }
      setOpen(onClose)
      setSave('Save')
      toast.success("Successful!");


    } catch (error) {
      console.log(error)
      toast.error("Failed!");
    }
}
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [open,setOpen]=useState('');
  const initialRef = React.useRef()
  const finalRef = React.useRef()
const byID = async ()=>{
        const data= await  handleGetUserId()
        if(data)
        {
          await localStorage.setItem('Id_User',data.data.data[0]._id)
          const id = localStorage.getItem('Id_User')
        setId(id)
            setFullname(data.data.data[0].full_name)
            setAvt(data.data.data[0].avatar)
            setAddress(data.data.data[0].address)
            setPhone(data.data.data[0].phone_number)
            setGender(data.data.data[0].gender)
        }
    }
    const loggedInUser = localStorage.getItem('token');
useEffect(() => {
  if(loggedInUser){
    byID() 
  }
  
}, [])
console.log(gender);
  return (
    <>
      <Button 
      onClick={onOpen}
      w={'100px'}
      >Edit Profile</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={open}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change your infomation</ModalHeader>
          <ModalCloseButton onClick={onClose} />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Full name</FormLabel>
              <Input ref={initialRef} value={fullname}  placeholder='Full name' onChange={handleFullNameInput} />
            </FormControl>
            
            <FormControl mt={4}>
              <FormLabel>Address</FormLabel>
              <Input placeholder='Address' value={address}  onChange={handleAddressInput} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Phone</FormLabel>
              <Input placeholder='Phone' value={phone}  onChange={handlePhoneInput} /> 
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Gender</FormLabel>
              <Combobox

                data={genderlist}
                defaultValue={gender == true ? 'Male': 'Female'}
                onChange={gender => gender == 'Male'? setGender(true): setGender(false)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>avatar</FormLabel>
              <Input id ='file' type={'file'} onChange={handleAvtInput}></Input>
            </FormControl>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleUpdate}>
              {save}
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> 
    </>


  )
}
//Id ? handleCreate:
export default InitialFocus;