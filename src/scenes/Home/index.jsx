import TitleWeb from 'components/TitleWeb';
import listImageBrand from 'mockData/listImageBrand';
import listImageHomeBanner from 'mockData/listImageHomeBanner';
import BannerBrand from 'scenes/BannerBrand';
import BannerHome from 'scenes/BannerHome';
import CategoryProduct from 'scenes/Product/components/CategoryProduct';

Home.propTypes = {};

function Home(props) {
  return (
    <>
      <BannerHome listImage={listImageHomeBanner} slidesToShow={1} padding="0px" />
      <div className=" mx-[36px] my-[8px]">
        <TitleWeb title="ĐỐI TÁC" subTitle="Bộ sưu tập những thương hiệu nổi tiếng về smartwatch trên thế giới" />
        <BannerBrand listImage={listImageBrand} slidesToShow={4} padding="8px" />
        <TitleWeb
          title="SẢN PHẨM THEO DANH MỤC"
          subTitle="Những sản phẩm nổi tiếng với chất lượng hàng đầu được shop nhập về phục vụ quý khách hàng"
        />
        <CategoryProduct />
      </div>
    </>
  );
}

export default Home;
