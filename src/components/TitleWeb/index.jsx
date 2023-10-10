import React from 'react';
import PropTypes from 'prop-types';

TitleWeb.propTypes = {};

function TitleWeb({ title, subTitle }) {
  return (
    <div className=" my-4">
      <div className=" flex justify-between items-center mb-2">
        <span className=" font-bold text-[20px] mr-[18px]">{title}</span>
        <div className=" border-[1px] flex-1"></div>
      </div>

      <span className=" text-[14px] italic">{subTitle}</span>
    </div>
  );
}

export default TitleWeb;
