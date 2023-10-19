export const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
};

export const AUTHMODE = {
  REGISTER: 'register',
  LOGIN: 'login',
};
