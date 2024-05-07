import {debounce} from "@/js/debounce";

export const initFixerHeader = () => {
  const header = document.querySelector('.header');
  const body = document.body;

  let headerHeight = header.offsetHeight;

  const updateHeaderHeight = () => {
    headerHeight = header.offsetHeight;
  }

  const handleScroll = (e) => {
    const scrollDistance = window.scrollY;

    if (scrollDistance > 99) {
      header.classList.add('header_fixed');
      body.style.paddingTop = `${headerHeight}px`;
    } else {
      header.classList.remove('header_fixed');
      body.style.paddingTop = '0';
    }
  }

  window.addEventListener('resize', debounce(updateHeaderHeight, 50));

  window.addEventListener('scroll', debounce(handleScroll, 100));
};
