import {
  Box,
  Flex,
  Text,
  Image,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
  HStack,
  VStack,
} from '@chakra-ui/react';
import {
  FiChevronDown,
} from 'react-icons/fi';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import ApiCaller from '../utils/apiCaller';
import logo from '../assets/image/logo-doctor-care.png'
import { handleGetUserId } from '../services/User';
import '../responsive/homepage/Navbar.css'
import '../style/Navbar.css'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
  const navigate = useNavigate()

  const { isOpen, onToggle } = useDisclosure();
  const HandleLogout = () => {
    delete localStorage.token
    delete localStorage.user
    delete localStorage.Id_User
    delete localStorage.role;
    navigate('/home');
  }
  const HandleProfile = () => {
    navigate('/profile');
  }
  const handleSignup = () => {
    navigate('/signup');
  }
  const HandleSignin = () => {
    navigate('/signin');
  }
  const HandleHome = () =>{
    navigate('/home')
  }
  const loggedInUser = localStorage.getItem('token');


  // const loggedInUser =  localStorage.getItem('token');
  console.log('token la'+loggedInUser);
  //const InUser = Session.get('user');
  console.log('id local');
  //console.log(InUser);
  window.onscroll = function () { };


  window.onscroll = function () { };

// Setting user
const [full_name, setName] = useState('')
   const [avatar, setAvt] = useState('')
async function byID (){ 
        const data= await handleGetUserId()
        console.log('Data cua ta:'+data)
        if(data)
        {
            setName(data.data.data[0].full_name)
            setAvt(data.data.data[0].avatar)
        }
}
  const [Api, setApi] = useState([])
  useEffect(async () => {
    ApiCaller('get-all-speciality', 'GET')
      .then(async res => {
        console.log(res)
        setApi(res.data.data)
      })
      if(loggedInUser){
         byID()
      }    
  }, [])
  const role= localStorage.getItem('role')
  return (
    <Box id='navbar'>
      <Flex

        fontSize={'15px'}
        fontWeight={'bold'}
        boxShadow='xl' p='1' rounded='md' bg='white'
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'20px'}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>

        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Box
            as='a'
            onClick={HandleHome}
            w='100px'
          >
            <Image ml='50px'
              mt='5px'
              // boxSize='50px'
              alt={'Login Image'}
              objectFit={'cover'}
              src={logo}


            />
          </Box>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          {loggedInUser ?
            <>
              <Flex >
              {/* <Button>Appointment</Button> */}
                <Menu>
                  <MenuButton

                    mr={'20px'}
                    py={1}
                    transition="all 0.3s"
                    _focus={{ boxShadow: 'none' }}>
                    <HStack>
                      <Avatar
                        // className='img-nav'
                        size={'sm'}
                        src={
                          avatar
                        }
                      />
                      <VStack
                        minW={'20px'}
                        display={{ base: 'none', md: 'flex' }}
                        alignItems="flex-start"
                        spacing="1px"
                        ml="2">
                        <Text id='name' className="crop" fontSize="sm" >{full_name}</Text>
                        {/* <Text fontSize="xs" color="gray.600">
                          {role}
                        </Text> */}

                      </VStack>
                      <Box display={{ base: 'none', md: 'flex' }}>
                        <FiChevronDown />
                      </Box>
                    </HStack>
                  </MenuButton>
                  <MenuList
                    border={'0.5px'}
                    bg={'white'}
                  >

                    <MenuItem as='a' color={'black'} fontWeight='normal' onClick={HandleProfile}>Profile</MenuItem>
                    <MenuItem as='a' color={'black'} fontWeight='normal' href={'/#'} >Appointment</MenuItem>
                    <MenuItem as='a' color={'black'} fontWeight='normal' href={'/#'}>Settings</MenuItem>

                    <MenuDivider />
                    <MenuItem color={'blue.500'} _hover={{
                      backgroundColor: 'blue.100'
                    }} onClick={HandleLogout}>Sign out</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </>
            :
            <>
              <Button
                as={'a'}
                fontSize={'sm'}
                fontWeight={400}
                variant={'link'}
               
                onClick={HandleSignin}>
                Sign in
              </Button>
              <Button
                //h='30px'
                as={'a'}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'blue.500'}
                onClick={handleSignup}
                _hover={{
                  textDecoration:'none',
                  bg: 'blue.300',
                }}>
                Sign up
              </Button>
            </>
          }
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('#15bbe0', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack pl='100px' direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'} >
            <PopoverTrigger>
              <Link
               
                p={2}
                href={navItem.href}
                fontSize={'lm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent

                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                maxW={'fit-content'}>

                <Stack>

                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} href={'/Speciality/'+`${child.label}`}
                   
                    
                    {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link

      href={href}

    style={{ textDecoration: 'none' }}

      role={'group'}
      display={'block'}
      p={2}
      w={'200px'}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('blue.100', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'blue.500' }}
            fontWeight={500}>
            {label}
          </Text>
          {/* <Text fontSize={'sm'}>{subLabel}</Text> */}
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'blue.500'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>

    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label}  href={'/Speciality/'+`${navItem.label}`} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
         
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={'/Speciality/'+`${child.label}`}>
                {child.label}
              </Link>
            ))}
        </Stack>

      </Collapse>
      
    </Stack>

  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/home',

  },
  {
    label: 'Speciality',
    children: [
      {
        label: 'Urology',
        subLabel: 'Trending Design to inspire you',
        //href: '#',
      },
      {
        label: 'Neurology',
        subLabel: 'Up-and-coming Designers',
        //href: '#',
      },
      {
        label: 'Orthopedic',
        subLabel: 'Up-and-coming Designers',
        //href: '#',
      },
      {
        label: 'General Physician',
        subLabel: 'Trending Design to inspire you',
        //href: '#',
      },
      {
        label: 'Dentist',
        subLabel: 'Up-and-coming Designers',
        //href: '#',
      },
      {
        label: 'Consultant Physician',
        subLabel: 'Up-and-coming Designers',
        //href: '#',
      },
      {
        label: 'Cardiologist',
        subLabel: 'Up-and-coming Designers',
        //href: '#',
      },
    ],
  },
  {

    label: 'Doctor',
    href: '/doctor',
  },
  {

    label: 'About',
    children: [
      {
        label: 'Address',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Phone',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
      {
        label: 'Reference',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
      {
        label: 'Fanpage',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  // {
  //   label: 'Appointment',
  //   href: '#',
  // },
 
];