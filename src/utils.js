export const appendComma = number => {
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};

export const goToUrl = (navigate, url) => {
  navigate(url);
  window.scrollTo(0, 0);
};
