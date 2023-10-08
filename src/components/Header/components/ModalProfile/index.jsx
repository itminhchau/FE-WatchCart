import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profile from '../../../../assets/image/profile.png';
import setting from '../../../../assets/image/setting.png';
import logout from '../../../../assets/image/logout.png';
import addUser from '../../../../assets/image/add-user.png';

ModalProfile.propTypes = {};

function ModalProfile(props) {
  return (
    <div className="absolute top-[43px] right-0 w-[200px]  bg-primary-gray rounded-xl overflow-hidden">
      <ul className=" font-bold text-[14px] text-primary-white text-center">
        <li className=" p-2 border-b hover:bg-primary-yelow flex justify-start gap-4 items-center">
          <img src={profile} alt="" className="w-[18px] h-[18px]" />
          <Link>My Profile</Link>
        </li>
        <li className=" p-2 border-b hover:bg-primary-yelow flex justify-start gap-4 items-center">
          <img src={addUser} alt="" className="w-[18px] h-[18px]" />
          <Link>Add another account</Link>
        </li>
        <li className=" p-2 border-b hover:bg-primary-yelow flex justify-start gap-4 items-center">
          <img src={setting} alt="" className="w-[18px] h-[18px]" />
          <Link>Setting</Link>
        </li>
        <li className=" p-2  hover:bg-primary-yelow flex justify-start gap-4 items-center">
          <img src={logout} alt="" className="w-[18px] h-[18px]" />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
}

export default ModalProfile;
