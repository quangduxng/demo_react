import React, { Component } from "react";
import Slider from "react-slick";
import "../style/Testslick.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import tin1 from '../assets/image/tin1.jpg'
import tin2 from '../assets/image/tin2.jpg'
import '../responsive/homepage/Handbook.css'

export default class SimpleSlider extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 4000,
      cssEase: "linear"
    };
    return (
      <div className="section-handbook">
        <button className='btn-more'>More...</button>
        <div className="banner-content">
        <Slider {...settings}>
        <div className='img-customize'>
        <div className='img'>
          <img src={tin1} alt="" />
        </div>
        <div className='title-item-banner'>
                    <a >Thay thủy tinh thể bao nhiêu tiền? 
                        5 Địa chỉ thay Thủy tinh thể uy tín tại Hà Nội</a>
                    </div>
        </div>

        <div className='img-customize'>
            <div className='img'>
                        <img src={tin2} alt="" />
                    </div>
                    <div className='title-item-banner'>
                    <a >Khám và nạo VA cho trẻ: Có nguy hiểm không? 
                    Review 5 địa chỉ tốt</a>
                    </div>                  
        </div>
        <div className='img-customize'>
            <div className='img'>
                        <img src={tin2} alt="" />
                    </div>
                    <div className='title-item-banner'>
                    <a >Khám và nạo VA cho trẻ: Có nguy hiểm không? 
                    Review 5 địa chỉ tốt</a>
                    </div>
                    
        </div>
        <div className='img-customize'>
            <div className='img'>
                        <img src={tin2} alt="" />
                    </div>
                    <div className='title-item-banner'>
                    <a >Khám và nạo VA cho trẻ: Có nguy hiểm không? 
                    Review 5 địa chỉ tốt</a>
                    </div>
                    
        </div>
        <div className='img-customize'>
            <div className='img'>
                        <img src={tin2} alt="" />
                    </div>
                    <div className='title-item-banner'>
                    <a >Khám và nạo VA cho trẻ: Có nguy hiểm không? 
                    Review 5 địa chỉ tốt</a>
                    </div>
                    
        </div>

        <div className='img-customize'>
            <div className='img'>
                        <img src={tin2} alt="" />
                    </div>
                    <div className='title-item-banner'>
                    <a >Khám và nạo VA cho trẻ: Có nguy hiểm không? 
                    Review 5 địa chỉ tốt</a>
                    </div>
                    
        </div>
        </Slider>
      </div>
      </div>
    );
  }
}