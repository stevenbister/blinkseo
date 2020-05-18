const header = document.querySelector('.header');

/**
 * Handles toggling the menu when the icon is clicked
 * Pass the header element with the required classes set in the markup
 * @param {Element} header
 */

const toggleNav = header => {  
  // Lets store the elements and check everything exists
  if (!header) return;
  
  const nav = header.querySelector('.header__nav');
  if (!nav) {
    console.warn('You are missing the .header__nav class');
    return;
  }
  
  const menuIcon = header.querySelector('.nav__toggle');
  if (!menuIcon) {
    console.warn('You are missing the .nav__toggle class');
    return;
  }

  // Create a constant to hold the class we want to style the opened menu
  const openClass = 'header__nav--open';

  // Set the aria attribute for accessibility concerns
  nav.setAttribute('aria-expanded', 'false');

  // Get the height of the header element so we can position the nav directly underneath it
  const navOffsetHeight = header.offsetHeight;
  nav.style.top = `${navOffsetHeight}px`;

  menuIcon.addEventListener('click', () => {
    // Check if nav is already open then set or remove class as applicable
    if (!nav.classList.contains(openClass)) {
      nav.classList.add(openClass);
      nav.setAttribute('aria-expanded', true);
      menuIcon.setAttribute('aria-expanded', true);
    } else {
      nav.classList.remove(openClass);
      nav.setAttribute('aria-expanded', false);
      menuIcon.setAttribute('aria-expanded', false);
    }
  });

};

toggleNav(header);
