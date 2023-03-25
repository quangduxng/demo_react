import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import ProductAddToCart from "./ProductAddToCart";

export default class MultipleItems extends Component {
    render() {
      const settings = {
         dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
      };
      return (
        <div>
          <h2> Multiple items </h2>
          <Slider {...settings} >
            <div>
            <ProductAddToCart/>
            </div>
            <div>
            <ProductAddToCart/>
            </div>
            <div>
                <ProductAddToCart/>
            </div>
           
          </Slider>
        </div>
      );
    }
  }