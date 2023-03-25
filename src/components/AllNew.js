import Navbar from './Navbar'
import Footer from './Footer'
import New from '../assets/image/bau1.jpg'
import {
    Flex,
    Box,
    Input,
    Text,
    Image,
    Button,
  } from '@chakra-ui/react';
function AllNews(){
  return <>
    
    <Navbar />
   
    <Flex 
    flexDirection={'column'}
    alignItems={'center'}
    >
        <Box  
        w='1100px' 
        h='200px' 
        m='5%' 
        boxShadow='2xl' 
        rounded='md' 
        bg='white'  
        d='flex' 
        alignItems={'center'}
        mb={'-30px'}
        >
            
            <Box 
            width='350px' 
            height='180px' 
            borderRadius='5%'  
            border='1px' 
            boxShadow='2xl'  
            borderColor='blue.300'
            ml={'20px'}
            >
            <Image   
            minH={'180'}
            borderRadius='5%'  
            src={New}
            />
                </Box> 

        
       
            <Box d='flex' 
            alignItems='flex-start' 
            w='645' 
            h='125' 
            flexDirection='column' 
            ml={'10px'}
            >
                
                    <Text
                    fontWeight={'bold'}
                    fontSize={'20px'}
                    mb={'20px'}
                    >
                        F0 khỏi bệnh bao lâu có thể mang thai?
                    </Text>
                    <Text
                    >
                        Tôi khỏi Covid được một tuần, 
                        nghe nói muốn mang thai thì phải chờ vài 
                        ba tháng sau để cơ thể hồi phục hoàn toàn. Điều này có đúng không, thưa bác sĩ?
                    </Text>
                    
            </Box> 
        </Box>

        <Box  
        w='1100px' 
        h='200px' 
        m='5%' 
        boxShadow='2xl' 
        rounded='md' 
        bg='white'  
        d='flex' 
        alignItems={'center'}
        mb={'-30px'}
        >
            
            <Box 
            width='350px' 
            height='180px' 
            borderRadius='5%'  
            border='1px' 
            boxShadow='2xl'  
            borderColor='blue.300'
            ml={'20px'}
            >
            <Image   
            minH={'180'}
            borderRadius='5%'  
            src={New}
            />
                </Box> 

        
       
            <Box d='flex' 
            alignItems='flex-start' 
            w='645' 
            h='125' 
            flexDirection='column' 
            ml={'10px'}
            >
                
                    <Text
                    fontWeight={'bold'}
                    fontSize={'20px'}
                    mb={'20px'}
                    >
                        F0 khỏi bệnh bao lâu có thể mang thai?
                    </Text>
                    <Text
                    >
                        Tôi khỏi Covid được một tuần, 
                        nghe nói muốn mang thai thì phải chờ vài 
                        ba tháng sau để cơ thể hồi phục hoàn toàn. Điều này có đúng không, thưa bác sĩ?
                    </Text>
                    
            </Box> 
        </Box>

        <Box  
        w='1100px' 
        h='200px' 
        m='5%' 
        boxShadow='2xl' 
        rounded='md' 
        bg='white'  
        d='flex' 
        alignItems={'center'}
        mb={'-30px'}
        >
            
            <Box 
            width='350px' 
            height='180px' 
            borderRadius='5%'  
            border='1px' 
            boxShadow='2xl'  
            borderColor='blue.300'
            ml={'20px'}
            >
            <Image   
            minH={'180'}
            borderRadius='5%'  
            src={New}
            />
                </Box> 

        
       
            <Box d='flex' 
            alignItems='flex-start' 
            w='645' 
            h='125' 
            flexDirection='column' 
            ml={'10px'}
            >
                
                    <Text
                    fontWeight={'bold'}
                    fontSize={'20px'}
                    mb={'20px'}
                    >
                        F0 khỏi bệnh bao lâu có thể mang thai?
                    </Text>
                    <Text
                    >
                        Tôi khỏi Covid được một tuần, 
                        nghe nói muốn mang thai thì phải chờ vài 
                        ba tháng sau để cơ thể hồi phục hoàn toàn. Điều này có đúng không, thưa bác sĩ?
                    </Text>
                    
            </Box> 
        </Box>
    </Flex>
  <Box mt={'80px'}>
    <Footer />
  </Box>
  </>
}

export default AllNews;