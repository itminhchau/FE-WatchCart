import TitleWeb from 'components/TitleWeb';
import listImageBrand from 'mockData/listImageBrand';
import listImageHomeBanner from 'mockData/listImageHomeBanner';
import BannerBrand from 'scenes/BannerBrand';
import BannerHome from 'scenes/BannerHome';
import BestSellingProduct from 'scenes/Product/components/BestSellingProduct';
import CategoryProduct from 'scenes/Product/components/CategoryProduct';
import ProductNew from 'scenes/Product/components/ProductNew';
import PromotionProduct from 'scenes/Product/components/PromotionProduct';

Home.propTypes = {};

function Home(props) {
  return (
    <>
      <BannerHome listImage={listImageHomeBanner} slidesToShow={1} padding="0px" />
      <div className=" mx-[36px] my-[8px]">
        <TitleWeb title="ĐỐI TÁC" subTitle="Bộ sưu tập những thương hiệu nổi tiếng về smartwatch trên thế giới" />
        <BannerBrand listImage={listImageBrand} slidesToShow={4} padding="8px" />
        <TitleWeb title="KHUYẾN MÃI LỚN NHẤT" subTitle="Săn phẩm có khuyến mãi lớn nhất hiện tại" />
        <PromotionProduct />
        <TitleWeb
          title="SẢN PHẨM THEO DANH MỤC"
          subTitle="Những sản phẩm nổi tiếng với chất lượng hàng đầu được shop nhập về phục vụ quý khách hàng"
        />
        <CategoryProduct />
        <TitleWeb title="SẢN PHẨM MỚI NHẤT" subTitle="Những sản phẩm mới nhất được cập nhật liên tục" />
        <ProductNew />
        <TitleWeb title="SẢN PHẨM BÁN CHẠY NHẤT" subTitle="Top những sản phẩm được ưa chuộng nhất" />
        <BestSellingProduct />
      </div>
    </>
  );
}

export default Home;
