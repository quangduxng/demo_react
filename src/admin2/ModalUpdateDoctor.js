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
  import Combobox from "react-widgets/Combobox";
  
  
  function UpdateDoctor(props) {
    const [fullname, setFullname] = useState('')
    const [speciatily, setSpeciality] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState(true)
    const [avt, setAvt] = useState('')
    let genderlist = ['Female', 'Male'];
    function handleFullNameInput (e) {
      setFullname(e.target.value);
      
    }
    function handleSpecialityInput (e)   {
        setSpeciality(e.target.value);
  
    }
    const handleAgeInput = e => {
        setAge(e.target.value);
  
    }
    const handleGenderInput = e => {
      setGender(e.target.value);
  
    }
    const handleAvtInput = e => 
      { 
      setAvt(e.target.files[0]);
  
    }
    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    const [open,setOpen]=useState('');
    const id = props.doctor;
    // console.log(id);
  
    const [Api, setApi] = useState([]);
  
    useEffect(() => {
      ApiCaller('get-all-doctor', 'GET')
        .then(async res => {
         
          setApi(res.data.data)
        })
    }, [])
    async function  editDoctor(id) {
        console.log(id);
        console.log(fullname);
       console.log(speciatily);
       console.log(age);
       console.log(gender);
    //   try {
    //     console.log('id xóa là');
    //    console.log(id);
   
    //    const data= await handleDeleteUser(id);
    //    console.log('da xoa id');
    //    console.log(data);
    //    console.log('thanh cong');
    //    setOpen(onClose)
    //    navigate('/admin/user')
    //   } catch (error) {
    //    console.log('that bai');
    //     console.log(error);
    //   }
   
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
            </ModalBody> 
            <Box w='90%' ml='20px'>   
            {Api.map(u => (               
              <>   
              {(u._id == props.doctor)? 
              <>
              <FormControl >
              <FormLabel>Full name</FormLabel>
              <Input  defaultValue={u.full_name}  
                onChange={handleFullNameInput} 
              />
             </FormControl>

            <FormControl mt={4}>
              <FormLabel>Speciality</FormLabel>
              <Input defaultValue={u.speciality.name} onChange={handleSpecialityInput} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Age</FormLabel>
              <Input defaultValue={u.age} onChange={handleAgeInput} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Gender</FormLabel>
              <Combobox
                data={genderlist}
                defaultValue={u.gender == 'true' ? 'Male': 'Female'}
                onChange={gender => setGender(gender)}
              />
            </FormControl>
            
              </> 
              :
               <></>}
              </>
  
  
            ))}
             </Box>    
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={(event)=>{ onOpen(event);editDoctor(props.doctor) }}
              >
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
  
        </Modal>
      </>
    )
  }
  
  export default UpdateDoctor;