
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react';
import ApiCaller from '../utils/apiCaller';
import LazyLoad from 'react-lazyload';
import '../responsive/homepage/SliderDoctor.css';
import { Button } from '@chakra-ui/react';
import '../style/SliderDoctor.css'
import Adoctor from './Adoctor'

function SliderDoctor() {
    let settings = {
        dots: true,
        infinite: true,
       
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear",
       
    };
    const [Api, setApi] = useState([]);

    useEffect(() => {
      
        ApiCaller('get-all-doctor', 'GET')
            .then( res => {
            
                console.log(res);
                setApi(res.data.data)
            })
           
    }, [])

  
    return (

        <div id='slide-doctor'>
            <LazyLoad>
            <div className="section-doctor">
                   
                <Button 
                    className='btn-more'
                     href='/doctor '
                    as={'a'}
                    style={{ textDecoration: 'none' }}
                   >
                    More...
                </Button>
                <div className='doctor-header'>
                    <p className='doctor-title1'>Book Our Doctor</p>
                    <p className='doctor-title2'>Quick appointment with doctors</p>
                </div>
                <div className="doctor-content" >
       
       
           
            <Slider  {...settings} >
            {Api.map(dt => (
                           
   
                       <Adoctor   _id={dt._id} key={dt._id} age={dt.age} full_name={dt.full_name} speciality={dt.speciality.name} avt={dt.avatar} />

                          
                     
                      
                 ))}  
                  </Slider>
       
                        {/* <Alldoctor/> */}
                     
                 
       
                   
                </div>
            </div>
            </LazyLoad>
        </div>

    );

}
export default SliderDoctor;