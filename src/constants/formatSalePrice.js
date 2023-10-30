const formatSalePrice = (price, promotion) => {
  const newPromotion = promotion || 0;
  const salePrice = price - (price * newPromotion) / 100;
  return salePrice;
};

export default formatSalePrice;
