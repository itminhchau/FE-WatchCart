const converArrayStar = (arr) => {
  const result = Array(5)
    .fill(0)
    .map((_, index) => ({
      star: index + 1,
      count: 0,
    }));

  arr.forEach((item) => {
    const starIndex = item.star - 1;
    if (starIndex >= 0 && starIndex < result.length) {
      result[starIndex].count = item.count;
    }
  });

  return result.reverse();
};
export default converArrayStar;
