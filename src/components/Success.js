import {
    Flex,
    Icon,
    Box,
    useColorModeValue,
    chakra,
    } from '@chakra-ui/react'
    import { IoMdCheckmarkCircle } from "react-icons/io";
export default function AlertsSuccess(){
    return (
      
        <Flex
          maxW="sm"
          w="full"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="md"
          rounded="lg"
          overflow="hidden"
        >
          <Flex justifyContent="center" alignItems="center" w={12} bg="green.500">
            <Icon as={IoMdCheckmarkCircle} color="white" boxSize={6} />
          </Flex>
  
          <Box mx={-3} py={2} px={4}>
            <Box mx={3}>
              <chakra.span
                color={useColorModeValue("green.500", "green.400")}
                fontWeight="bold"
              >
                Success
              </chakra.span>
              <chakra.p
                color={useColorModeValue("gray.600", "gray.200")}
                fontSize="sm"
              >
                Your account was registered!
              </chakra.p>
            </Box>
          </Box>
        </Flex>
      
    );
  };