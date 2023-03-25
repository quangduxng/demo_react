import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    textDecoration,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import bg from '../assets/image/background.jpg'
  export default function SplitScreen() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex mr={'-2'} p={'8'} flex={1} align={'center'} justify={'center'} bg={'gray.100'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                Great Smile
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
              For Healthy Lifestyle!
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.700'}>
            Maybe we are not hesin enough to love the enemy but at least because of your health and happiness for forgiven and ignore them.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button

              as={'a'}
              href='/doctor'
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                  color:'White',
                  textDecoration:'none'
                }}>
                Make an appointment
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            opacity='0.6'
            alt={'Login Image'}
            objectFit={'cover'}
                
            src={bg}
          />
        </Flex>
      </Stack>
    );
    }
