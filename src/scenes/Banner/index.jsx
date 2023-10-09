import Slider from 'react-slick';

Banner.propTypes = {};

function Banner({ listImage, slidesToShow }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {listImage &&
        listImage.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.image} alt="" className=" w-full" />
            </div>
          );
        })}
    </Slider>
  );
}

export default Banner;
