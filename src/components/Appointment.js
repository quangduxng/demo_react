import React,{useEffect,useState} from 'react';
import { useParams } from "react-router-dom";
import ApiCaller from '../utils/apiCaller';
import Adoctor from './Adoctor';
import Navbar from "./Navbar";
import Footer from './Footer'
import '../style/button.css'
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Tag,
  SpaceProps,
  useColorModeValue,
  Container,
  Flex,
  Center,
  Square,
  Button,
  Select,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon ,
  AccordionPanel ,

} from '@chakra-ui/react';
import Doctor from '../assets/image/dtavt.png'
import Datepicker from './Datepicker'

import InitialFocus from './Modal';

import '../responsive/Appointment.css'


interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="blue" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src={Doctor}
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ArticleList = () => {
  const { id } = useParams();
  const [Api, setApi] = useState([]);
  const [Id, setId] = useState('');
  useEffect(() => {
      ApiCaller('get-all-doctor', 'GET')
          .then(async res => {
              console.log(res);
              setApi(res.data.data)
          })

  }, []);
  return (
    <>


    <Navbar />


    {Api.map(api => (
                <>
                   
                    {(id == api._id) ? (
                        <>
         
                            {/* <Adoctor
                                avt={api.avatar} speciality={api.speciality.name} full_name={api.full_name} /> */}
                        

              
    <Container maxW={'7xl'} p="12" mt={'20'} >
      <Heading as="h1">Make an appointment</Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          className='wrapper-avt-doctor'
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
          >
          <Box
            className='avt-doctor'
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%"
            >
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
              className='img-doctor'
                borderRadius="full"
                src={api.avatar}
                boxShadow={'md'}
                alt="some good alt text"
                objectFit="contain"
                mb={5}
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              // bgGradient={useColorModeValue(
              //   'radial(orange.600 1px, transparent 1px)',
              //   'radial(orange.300 1px, transparent 1px)'
              // )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
        className='info-doctor'
          display="flex"
          ml={60}
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={['Quickly', 'Convenient']} />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              {api.full_name}
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="5"
            // color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Age: {api.age}
          </Text>
          <Text
            as="p"
            marginTop="5"
            // color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Speciality: {api.speciality.name}
          </Text>
          <Text
            as="p"
            marginTop="5"
            // color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Gender: {api.gender=='true'?<a>Nam</a>:<a>Nữ</a>}
          </Text>
          <Button>Change Doc</Button>
        </Box>
      </Box>
      

<Flex className='container-booking' color='white' mt={20} w='1400px' h='500px' ml={'-100'}>
  <Center className='info-customer' w='400px' bg='green.500' flexDirection={'column'} justifyContent={'flex-start'}>
  <Heading as="h1" mt={'15'}>Information customer</Heading>
    <Text
      as="p"
      marginTop="50"
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
      Phone:
    </Text>
    <Text
      as="p"
      marginTop="5"
      color={useColorModeValue('gray.700', 'gray.200')}
      fontSize="lg">
      Address:
    </Text>
  </Center>
  <Square className='date-time' bg='gray.400' w='550px' flexDirection={'column'} justifyContent={'flex-start'}>
  <Heading as="h1" mt={'5'} mb={'10'}>Choose time and date</Heading>
    <Datepicker />
    <Box mt={'5'} className='wrapper-btn-time'>
      <Box >

        <Button className='btn-time'>07:00 - 08:00</Button>
        <Button className='btn-time'>08:00 - 09:00</Button>
        <Button className='btn-time'>09:00 - 10:00</Button>
        <Button className='btn-time'>10:00 - 11:00</Button>
        <Button className='btn-time'>14:00 - 15:00</Button>
        <Button className='btn-time'>15:00 - 16:00</Button>
        <Button className='btn-time'>16:00 - 17:00</Button>
        <Button className='btn-time'>17:00 - 18:00</Button>
      </Box>         
    </Box>
    <Button color={'blue.500'}>Preview appointment</Button>
    <Button 
            h={'45px'}
            w={'120px'}
            mt={'10px'}
            ml={'170px'}
            >
                <InitialFocus />
            </Button> 
           
  </Square>


  {/*
  <Center className='comfirm-appointment' flex='1' bg='blue.500' id='confirm'>
>>>>>>> 33709e663ffc627dc5a5cab87be229518f7b284f:src/components/Appointment.js
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
  </Center> */}
 
</Flex>
 
    </Container>
   
                            </>)

                        : <></>}
    </>
            ))}
    </>
    
  );
};

export default ArticleList;