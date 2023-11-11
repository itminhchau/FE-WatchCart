const formatDate = (date) => {
  let dateObj = new Date(date);
  let formatDate = dateObj.getDate() + '/' + (dateObj.getMonth() + 1) + '/' + dateObj.getFullYear();
  return formatDate;
};
export default formatDate;
