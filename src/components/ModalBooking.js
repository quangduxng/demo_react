import {
    Modal,
    ModalOverlay,
    ModalContent,
    useDisclosure,
    Box,
    Heading,
    Text,
    useColorModeValue,
    Button,
    
  } from '@chakra-ui/react'
import React from 'react';
import '../style/button.css'
function ConfirmBooking() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    return (
      <>
        <Button onClick={onOpen}>Confirm</Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          w={600}
        >
          <ModalOverlay />
          <ModalContent >
            <Heading as="h1" mt={'5'} mb={'0'}>Confirm appointment</Heading>
            <Text fontSize={'27'} mt={'15'} className='name-customer'>Customer</Text>
            <Box className='wrapper-customer'>
            <Text
            as="p"
            marginTop="5"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Name:
            </Text>
            <Text
            as="p"
            marginTop="5"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Age:
            </Text>
            <Text
            as="p"
            marginTop="5"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Address:
            </Text>
            <Text
            as="p"
            marginTop="5"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Phone:
            </Text>         
            </Box>
            <Text fontSize={'27'} mt={'15'} className='name-doctor'>Doctor</Text>
            <Box className='wrapper-doctor'>
            <Text
            as="p"
            marginTop="5"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Name:
            </Text>
            <Text
            as="p"
            marginTop="5"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Age:
            </Text>
            <Text
            as="p"
            marginTop="5"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Speciality:
            </Text>
            <Text
            as="p"
            marginTop="5"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Gender:
            </Text>         
            </Box>
            <Text fontSize={'27'} mt={'15'} className='name-datetime'>Date and time</Text>
            <Box className='wrapper-datetime'>
            <Text
            as="p"
            marginTop="5"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Date:
            </Text>
            <Text
            as="p"
            marginTop="5"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Time:
            </Text>          
            </Box>
             <Button className='btn-confirm'>Confirm appointment</Button>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ConfirmBooking;