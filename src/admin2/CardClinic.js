import React from 'react'
import { Box, Text, Button, Image, color } from '@chakra-ui/react'
import Img from '../assets/image/clinic.jpg'
import {AddIcon, EditIcon, DeleteIcon} from '@chakra-ui/icons'

const Card = () => (
  <Box
    w='300px'
    h={'435px'} 
    mt={'50px'} 
    mb={'30px'}
    ml={'auto'}
    mr={'auto'}
    boxShadow='2xl' 
    border={'1px solid #d7d7d7'}
    fontFamily={'Georgia'}
    bg='White'  
    position={'relative'}
  >
    <Image 
    src={Img} 
    minW={'298px'}
    borderRadius={'2px 2px 0 0'}
    />
    <Text
    fontSize={'23px'}
    mt={'15px'}
    ml={'10px'}
    >
      Family health
    </Text>
    <Text
    mt={'5px'}
    ml={'10px'}
    >
      12 Le Loi, Hue
    </Text>
    <Box
    position={'absolute'}
    bottom={'0px'}
    right={'0px'}
    left={'0px'}
    >
      <Button
      bg={'#17a2b8'}
      color={'Black'}
      w={'148px'}
      borderRadius={'none'}
      _hover={{ bg:"#036776", color:"white" }}
      > 
        <EditIcon/> 
      </Button>
      
      <Button 
      w={'149px'}
      bg={'#f79081'}
      color={'Black'}
      borderRadius={'none'}
      _hover={{ bg:"#dc3545", color:"white" }}
      > 
        <DeleteIcon/> 
      </Button>
    </Box>
  </Box>
)

export default Card