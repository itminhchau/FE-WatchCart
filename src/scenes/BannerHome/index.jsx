import Slider from 'react-slick';

BannerHome.propTypes = {};

function BannerHome({ listImage }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      {listImage &&
        listImage.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.image} alt="" className="w-full" />
            </div>
          );
        })}
    </Slider>
  );
}

export default BannerHome;
