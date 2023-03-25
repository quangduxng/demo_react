import React, { Component } from "react";
import Slider from "react-slick";
import "../style/test.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import tin1 from '../assets/image/tin1.jpg'
import tin2 from '../assets/image/tin2.jpg'

export default class SpecialyTest extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div id="section-specialty">
        <div className="specialty-content">
        <Slider {...settings}>
        <div className='img-customize'>
        <div className='img'>
          <img src={tin1} alt="" />
        </div>
        <div className='title-item'>
                    <a >Thay thủy tinh thể bao nhiêu tiền? 
                        5 Địa chỉ thay Thủy tinh thể uy tín tại Hà Nội</a>
                    </div>
        </div>

        <div className='img-customize'>
            <div className='img'>
                        <img src={tin2} alt="" />
                    </div>
                    <div className='title-item'>
                    <a >Khám và nạo VA cho trẻ: Có nguy hiểm không? 
                    Review 5 địa chỉ tốt</a>
                    </div>                  
        </div>
        <div className='img-customize'>
            <div className='img'>
                        <img src={tin2} alt="" />
                    </div>
                    <div className='title-item'>
                    <a >Khám và nạo VA cho trẻ: Có nguy hiểm không? 
                    Review 5 địa chỉ tốt</a>
                    </div>
                    
        </div>
        <div className='img-customize'>
            <div className='img'>
                        <img src={tin2} alt="" />
                    </div>
                    <div className='title-item'>
                    <a >Khám và nạo VA cho trẻ: Có nguy hiểm không? 
                    Review 5 địa chỉ tốt</a>
                    </div>
                    
        </div>
        <div className='img-customize'>
            <div className='img'>
                        <img src={tin2} alt="" />
                    </div>
                    <div className='title-item'>
                    <a >Khám và nạo VA cho trẻ: Có nguy hiểm không? 
                    Review 5 địa chỉ tốt</a>
                    </div>
                    
        </div>

        <div className='img-customize'>
            <div className='img'>
                        <img src={tin2} alt="" />
                    </div>
                    <div className='title-item'>
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