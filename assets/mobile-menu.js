/*
  Off-canvas mobile menu: the panel's own slide-in/out animation and dark
  overlay are pure CSS (see design-system.css, keyed off the same
  `body.ast-main-header-nav-open` class Astra's own script already
  toggles). All this file adds is the "click outside the panel closes it"
  and "Escape closes it" behavior, and it does so by clicking Astra's own
  toggle button rather than managing open/closed state itself - so
  aria-expanded, the hamburger/X icon swap etc. all stay in sync with
  whatever Astra's script is doing internally.
*/
(function(){
  function getToggle(){
    return document.querySelector('.main-header-menu-toggle');
  }
  function isOpen(){
    return document.body.classList.contains('ast-main-header-nav-open');
  }
  document.addEventListener('click', function(e){
    if (!isOpen()) return;
    var panel = document.querySelector('.ast-mobile-header-content');
    var toggle = getToggle();
    if (!toggle) return;
    if (toggle.contains(e.target)) return; // let Astra's own handler deal with this click
    if (panel && panel.contains(e.target)) return; // clicks inside the menu itself
    toggle.click();
  });
  document.addEventListener('keydown', function(e){
    if (e.key !== 'Escape' || !isOpen()) return;
    var toggle = getToggle();
    if (toggle) toggle.click();
  });
})();
