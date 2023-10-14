import React from 'react';
import Slider from 'react-slick';
import ItemProduct from '../ItemProduct';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: 'block', background: 'red' }} onClick={onClick} />;
}
const SliderProduct = ({ listProduct }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SampleNextArrow />,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SampleNextArrow />,
        },
      },
    ],
  };
  return (
    <div>
      <div className="px-[20px] ">
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
