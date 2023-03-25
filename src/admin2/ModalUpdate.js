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
  import { useNavigate } from 'react-router-dom'
  import Combobox from "react-widgets/Combobox";
  import { handleUpdateUser,handleGetUserId } from '../services/User';
  import { ToastContainer, toast } from 'react-toastify';

  function UpdateUser(props) {
    //  console.log(props.user);
    const [fullname, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('')
    const [avt, setAvt] = useState('')
    const [save,setSave]=useState('Save')
    const [Id, setIdUser] = useState('')
    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    const [open,setOpen]=useState('');
    const id = props.user;
    const [Api, setApi] = useState([]);
    //const account= localStorage.getItem('user')
    let genderlist = ['Female', 'Male'];
    function handleFullNameInput (e) {
      console.log('e la');
      // console.log(e.target.value);
      setName(e.target.value);
      console.log(fullname);
      
    }
    function handleAddressInput (e)   {
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

    useEffect(() => {
      ApiCaller('get-all-user', 'GET')
        .then(async res => {
         
          setApi(res.data.data)
        })
    }, [])
   

async function editUser(id) {
       console.log('props ...');
       console.log();
       console.log(fullname);
       console.log(address);
       console.log(phone);
       console.log(gender);
       console.log(avt);
  const da_ta = new FormData();
  da_ta.append("full_name", fullname)
  da_ta.append("address", address)
  da_ta.append("phone_number", phone)
  da_ta.append("gender", gender)
  console.log('gio tinh la');
  console.log(fullname);
  console.log(gender);

  da_ta.append("file", avt)
  try {
    setSave('Loading...')
    console.log(save);
    setOpen(onOpen)
    console.log('set ID là');
    console.log(id);
    if (da_ta) {   
      
      const data = await handleUpdateUser(id,da_ta) 
      console.log('dâttaaaa');
      console.log(data);
     
       //await localStorage.setItem('Id_User',data.data.data[0]._id)
         //setId(props.user)
      //  console.log('set ID là');
      //  console.log(Id);
    }
    setOpen(onClose)
      setSave('Save')
      toast.success("Successful!");
  } catch (error) {
    console.log(error)
    toast.error("Failed!");
  } 
  
   }
  
    return (
      <>
        <EditIcon  onClick={onOpen} />
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
  
          <ModalContent>
  
            <ModalHeader>Edit User</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Edits will be saved when you press Save 
              {/* {(u._id==props.user)?<a>{u.full_name}</a>:<></>)} */}
              
            </ModalBody> 
            <Box w='90%' ml='20px'>   
            {Api.map(u => (               
              <>   
              {(u._id == props.user)? 
              <>
              <FormControl >
              <FormLabel>Full name</FormLabel>
              <Input placeholder={u.full_name} defaultValue=''
                onChange={handleFullNameInput} 
              />
             </FormControl>

            <FormControl mt={4}>
              <FormLabel>Address</FormLabel>
              <Input defaultValue={u.address} onChange={handleAddressInput} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Phone</FormLabel>
              <Input defaultValue={u.phone_number} onChange={handlePhoneInput} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Gender</FormLabel>
              <Combobox
                data={genderlist}
                defaultValue={u.gender == 'true' ? 'Male': 'Female'}
                onChange={gender => setGender(gender)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Avatar</FormLabel>
              <Input id ='file' type={'file'} onChange={handleAvtInput}></Input>
            </FormControl>            
              
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={(event)=>{ onOpen(event);
              editUser(u._id) 
              }}
              >
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
            </> 
             :
              <></>}
             </>  
           ))}
             </Box>
          </ModalContent>
  
        </Modal>
      </>
    )
  }
  
  export default UpdateUser;