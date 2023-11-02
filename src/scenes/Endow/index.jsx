import backgroundLanding from 'assets/image/backgroundlanding.PNG';
Endow.propTypes = {};

function Endow(props) {
  return (
    <div className=" container flex">
      <div
        className=" relative w-[80%] h-[100vh] m-auto bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${backgroundLanding})` }}
      >
        {/* <img src={backgroundLanding} alt="" srcset="" className="m-auto relative" /> */}
        <div className="w-[300px] h-[50px] border-2  absolute top-5 left-5 flex text-[20px]">
          <span className="m-auto">Tính năng sẽ được cập nhật sớm </span>
        </div>
      </div>
    </div>
  );
}

export default Endow;
