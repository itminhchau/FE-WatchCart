import React, { memo, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

CountDownClock.propTypes = {};

function CountDownClock({ expDate }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    const timeDiff = new Date(expDate * 1000) - now;
    if (now >= new Date(expDate * 1000)) {
      // Thời gian đã hết, thực hiện hành động tại đây, ví dụ: hiển thị thông báo
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });

      return;
    }
    const seconds = Math.floor((timeDiff / 1000) % 60);
    const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    setTimeLeft({ days, hours, minutes, seconds });
  }, [expDate]);
  useEffect(() => {
    calculateTimeLeft();

    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [expDate, calculateTimeLeft]);

  return (
    <div>
      <div className=" flex justify-center gap-4 items-center w-[300px] lg:w-full ">
        <span className="text-black font-bold text-[14px] lg:text-[20px]">Thời gian khuyến mãi:</span>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] bg-black rounded">
            <span className=" font-bold text-[30px] lg:text-[50px]  block text-center">{timeLeft.days}</span>
          </div>
          <span className="text-black font-bold">Ngày</span>
        </div>
        <span className="text-black text-[30px] font-bold">:</span>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] bg-black rounded ">
            <span className=" font-bold text-[30px] lg:text-[50px]  block text-center">{timeLeft.hours}</span>
          </div>
          <span className="text-black font-bold">Giờ</span>
        </div>
        <span className="text-black text-[30px] font-bold">:</span>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] bg-black rounded ">
            <span className=" font-bold text-[30px] lg:text-[50px]  block text-center">{timeLeft.minutes}</span>
          </div>
          <span className="text-black font-bold">Phút</span>
        </div>
        <span className="text-black text-[30px] font-bold">:</span>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[40px] h-[40px] lg:w-[80px] lg:h-[80px] bg-black rounded ">
            <span className=" font-bold text-[30px] lg:text-[50px]  block text-center">{timeLeft.seconds}</span>
          </div>
          <span className="text-black font-bold">Giây</span>
        </div>
      </div>
    </div>
  );
}

export default memo(CountDownClock);
