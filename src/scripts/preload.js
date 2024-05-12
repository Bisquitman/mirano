export const callbackWithPreload = async (wrapper, cb, ...params) => {
  const preload = document.createElement('div');
  preload.className = 'preload';
  preload.style.display = 'flex';
  wrapper.style.position = 'relative';
  wrapper.append(preload);

  try {
    return await cb(...params);
  } catch (e) {
    console.log(e);
  } finally {
    setTimeout(() => {
      preload.style.display = 'none';
      wrapper.style.position = '';
      preload.remove();
    }, 500);
  }
}