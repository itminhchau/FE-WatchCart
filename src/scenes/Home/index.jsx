import TitleWeb from 'components/TitleWeb';
import listImageHomeBanner from 'mockData/listImageHomeBanner';
import Banner from 'scenes/Banner';

Home.propTypes = {};

function Home(props) {
  return (
    <>
      <Banner listImage={listImageHomeBanner} slidesToShow={1} />
      <div className=" mx-[24px] my-[8px]">
        <TitleWeb title="ĐỐI TÁC" subTitle="Bộ sưu tập những thương hiệu nổi tiếng về smartwatch trên thế giới" />
      </div>
    </>
  );
}

export default Home;
