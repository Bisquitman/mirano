export const scrollIntoViewWithOffset = (element, offset) => {
  // const element = document.querySelector(selector);
  if (element) {
    window.scrollTo({
      behavior: "smooth",
      top: element.getBoundingClientRect().top - document.body.getBoundingClientRect().top - offset,
    });
  }
};
