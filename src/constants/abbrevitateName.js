function abbreviateName(fullName) {
  const arrWords = fullName.split(' ');
  const words = arrWords.slice(arrWords.length - 2);
  // Lấy chữ cái đầu của mỗi từ và chuyển thành chữ hoa
  const abbreviation = words.map((word) => word.charAt(0).toUpperCase()).join('');

  return abbreviation;
}
export default abbreviateName;
