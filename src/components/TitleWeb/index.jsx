import React from 'react';
import PropTypes from 'prop-types';

TitleWeb.propTypes = {};

function TitleWeb({ title, subTitle }) {
  return (
    <div>
      <div className=" flex justify-between items-center">
        <span className=" font-bold text-[24px] mr-[18px] my-[8px]">{title}</span>
        <div className=" border-[1px] flex-1"></div>
      </div>

      <span className=" text-[14px] italic">{subTitle}</span>
    </div>
  );
}

export default TitleWeb;
