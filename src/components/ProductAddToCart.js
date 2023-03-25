import { useEffect, useState } from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { StarIcon } from '@chakra-ui/icons'
import Axios from 'axios'
import axios from 'axios';
import ApiCaller from '../utils/apiCaller';
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Text,
  Button
} from '@chakra-ui/react';
function ProductAddToCart() {

  const [Api, setApi] = useState([]);

  useEffect(()=>{
      ApiCaller('get-all-doctor', 'GET')
    .then ( async res => {
      console.log(res);
        setApi(res.data.data)
    })
  },[])


  return (

    <Flex p={40} w="100" d='flex' alignItems="center" justifyContent="space-around" flexWrap='wrap' 
    >

      {Api.map(api => (
       

        <Flex d='flex' p={2} key={api.speciality}>
            {/* <Text>{api.speciality}</Text> */}
          <Box
            // bg={useColorModeValue('white', 'gray.800')}
            bg='blue.600'
            maxW="300"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"

            position="relative">
            {(
              <Circle
                size="10px"
                position="absolute"
                top={2}
                right={2}
                bg="green.200"
              />
            )}

            <Image
              height='250'
              width='100'
              //src={api.image}
              src='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
              alt={`Picture of ${api.full_name}`}
              roundedTop="lg"
            />

            <Box p="6" h='100' w='100'>
              <Box d="flex" alignItems="baseline">
                {(
                  <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                    HOT
                  </Badge>
                )}
              </Box>
              <Flex mt="1" justifyContent="space-between" alignContent="center">
                <Box

                  fontSize="15px"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                // isTruncated
                  
                >
                  {api.full_name}
                 
                </Box>
                <Text fontSize='20px' color='red'> {api.speciality}</Text>
                <Tooltip
                  label="Book Now"
                  bg="white"
                  placement={'top'}
                  color={'gray.800'}
                  fontSize={'1.2em'}>
                  <chakra.a href={'#'} display={'flex'}>
                    <Button>Book Now</Button>
                    {/* <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} /> */}
                  </chakra.a>
                </Tooltip>
              </Flex>

              <Flex justifyContent="space-between" alignContent="center">
                {/* <Rating rating={data.rating} numReviews={data.numReviews} /> */}
                <div>
                  {/* {
                function rate() {
                  
                    const rate=api.rating.rate-api.rating.rate%1;
                    for(var i=0;i<rate;i++){
                      console.log('haha');
                    }
                   
                }
               
               } */}
                  {/* <StarIcon></StarIcon> <a>{api.rating.rate-api.rating.rate%1}</a> */}

                </div>


              </Flex>
            </Box>
          </Box>

        </Flex>

      )
      )}
      {/* <Loading/> */}


    </Flex>
  );
}


export default ProductAddToCart;

