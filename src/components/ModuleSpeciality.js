import { Flex, Box, Image, Text,} from '@chakra-ui/react'
import React from 'react'
import '../style/SliderSpeciality.css'
function ASpeciality(props) {
  return (

    <Flex w='300px'
      h='250px'
      borderRadius='2xl'
      bgColor='whrite.100'
      border='none'
      className='speciality'
      justifyContent='center'
      >
      <Box  d='flex' flexDirection='column' alignItems='center'>
        <Box 
        className='img-speciality'
        w='150px' 
        h='150px'
        alignItems='center'
        d='flex'
        justifyContent='center'
        >
        <Image  
         src={props.avt} />
        </Box>
        <b className='text-info-speciality'>{props.name}</b>
      </Box>

    </Flex>
  )
}

export default ASpeciality