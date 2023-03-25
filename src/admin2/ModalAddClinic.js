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
  function AddClinic() {
    const [address, setAddress] = useState('')
    
    
    const handleAddressInput = e => {
      setAddress(e.target.value);
  
    } 
    
    const account= Session.get('user')
    console.log(Session.get('token'))
  
    const handleCreate = async (req, res) => {
      const da_ta = new FormData();
      da_ta.append("address", address)
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
           Add  Clinic
        </Button>
        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
          onClose={open}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add information clinic</ModalHeader>
            <ModalCloseButton onClick={onClose} />
            <ModalBody pb={6}>
              
  
              <FormControl mt={4}>
                <FormLabel>Address</FormLabel>
                <Input placeholder='Address' onChange={handleAddressInput} />
              </FormControl>
  
              
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
  
  export default AddClinic;