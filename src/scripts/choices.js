import {debounce} from "@/scripts/debounce";

const adjustElementPosition = (element, count = 0) => {
  const rect = element.getBoundingClientRect();
  const viewportWidth = window.innerWidth;

  if (rect.left < 0) {
    element.style.left = '0';
    element.style.right = 'auto';
    element.style.transform = 'translateX(0)';
  } else if (rect.right > viewportWidth) {
    element.style.left = 'auto';
    element.style.right = '0';
    element.style.transform = 'translateX(0)';
  } else {
    element.style.left = '';
    element.style.right = '';
    element.style.transform = '';
  }

  const postRect = element.getBoundingClientRect();

  if ((postRect.left < 0 || postRect.right > viewportWidth) && count < 3) {
    count++;
    adjustElementPosition(element, count);
  }
};

export const initChoices = () => {
  const choices = document.querySelectorAll('.choices');

  const closeChoice = (wrapper) => {
    wrapper.querySelector('.choices__box').classList.remove('choices__box_open');
    wrapper.querySelector('.choices__btn').classList.remove('choices__btn_open');
  };

  const closeAllChoices = ({target}) => {
    let clickInside = target.closest('.choices');

    if (!clickInside) {
      choices.forEach((choice) => {
        closeChoice(choice);
      });

      document.removeEventListener('click', closeAllChoices);
    }
  };

  choices.forEach((choice) => {
    const btn = choice.querySelector('.choices__btn');
    const box = choice.querySelector('.choices__box');

    btn.addEventListener('click', (e) => {
      e.preventDefault();

      btn.classList.toggle('choices__btn_open');
      box.classList.toggle('choices__box_open');

      choices.forEach((otherChoice) => {
        if (otherChoice !== choice) {
          closeChoice(otherChoice);
        }
      });

      if (box.classList.contains('choices__box_open')) {
        document.addEventListener('click', closeAllChoices);
      } else {
        document.removeEventListener('click', closeAllChoices);
      }

      adjustElementPosition(box);
    });

    window.addEventListener('resize', debounce((e) => {
      adjustElementPosition(box);
    }));
  });
};
