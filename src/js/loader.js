export const bookLoader = document.querySelector('.loader__backdrop');

export function showLoader() {
  bookLoader.style.display = 'block';
}
export function hideLoader() {
  setTimeout(() => {
    bookLoader.style.display = 'none';
  }, 300);
}
