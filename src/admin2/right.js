import { Box, Img } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../admin2/css/sidebar.scss';
import 'boxicons'
import logo from '../assets/image/logo-doctor-care.png'
const sidebarNavItems = [
    {
        display: 'Dashboard',
        icon: <box-icon name='home' type='solid' ></box-icon>,
        to: '/admin',
        section: ''
    },
    {
        display: 'Doctor',
        icon:  <box-icon name='star'></box-icon>,
        to: '/admin/doctor',
        section: 'started'
    },
    {
        display: 'Calendar',
        icon: <box-icon name='calendar' ></box-icon>,
        to: '/calendar',
        section: 'calendar'
    },
    {
        display: 'User',
        icon: <box-icon name='user' ></box-icon>,
        to: '/admin/user',
        section: 'user'
    },
    {
        display: 'Log out',
        icon: <box-icon name='log-out' ></box-icon>,
        to: '/logout',
        section: 'order'
    },
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return (
    <Box bgColor={'blue.100'} back >
    <div className='sidebar' style={{
        paddingTop:'100px',
        backgroundColor: '#B6D0E2'
    }}>
        <div>
           <Img pl='40px' src={logo}/>
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>
    </Box>
    )
};

export default Sidebar;