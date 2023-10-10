import Slider from 'react-slick';
import './style.scss';

BannerBrand.propTypes = {};

function BannerBrand({ listImage }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="wrap-banner-brand mx-[24px]">
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
    </div>
  );
}

export default BannerBrand;
