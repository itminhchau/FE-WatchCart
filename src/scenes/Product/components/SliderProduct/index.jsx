import React from 'react';
import Slider from 'react-slick';
import ItemProduct from '../ItemProduct';
import './style.scss';

const SliderProduct = ({ listProduct }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="mx-[8px] lg:mx-[24px] wrap-slider-product">
        <Slider {...settings}>
          {listProduct &&
            listProduct.length > 0 &&
            listProduct.map((item) => <ItemProduct key={item.id} product={item} />)}
        </Slider>
      </div>
    </div>
  );
};

export default SliderProduct;
