import Bank from 'scenes/ProfileUser/components/Bank';
import ChangePass from 'scenes/ProfileUser/components/ChangePass';
import Profile from 'scenes/ProfileUser/components/Profile';
import SettingNotification from 'scenes/ProfileUser/components/SettingNotification';

export const listComponentProfile = [
  {
    id: 1,
    component: (data) => {
      return <Profile profileUser={data.user} />;
    },
    name: 'Hồ sơ',
  },
  {
    id: 2,
    component: (data) => {
      return <Bank dataBank={data} />;
    },
    name: 'Ngân hàng',
  },
  {
    id: 3,
    component: (data) => {
      return <ChangePass dataPass={data} />;
    },
    name: 'Đổi mật khẩu',
  },
  {
    id: 4,
    component: (data) => {
      return <SettingNotification dataNotification={data} />;
    },
    name: 'Cài Đặt thông báo',
  },
];
