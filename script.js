
(function () {
  // scope to the sidebar container; change selector if your sidebar root is different
  const sidebar = document.querySelector('.sidebar') || document.body;

  // find buttons inside the sidebar only
  const moreWrapper = sidebar.querySelector('.more-wrapper');
  if (!moreWrapper) return;

  const moreBtn = moreWrapper.querySelector('.more-btn');
  const morePopup = moreWrapper.querySelector('.more-popup');

  // safe guards
  if (!moreBtn || !morePopup) return;

  // toggle function
  function openPopup() {
    morePopup.classList.add('show');
    morePopup.setAttribute('aria-hidden', 'false');
    moreBtn.setAttribute('aria-expanded', 'true');
    // move focus to first link
    const firstLink = morePopup.querySelector('a[role="menuitem"]');
    if (firstLink) firstLink.focus();
  }

  function closePopup() {
    morePopup.classList.remove('show');
    morePopup.setAttribute('aria-hidden', 'true');
    moreBtn.setAttribute('aria-expanded', 'false');
    moreBtn.focus();
  }

  moreBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    if (morePopup.classList.contains('show')) closePopup();
    else openPopup();
  });

  // close when clicking outside the popup
  document.addEventListener('click', function (e) {
    if (!moreWrapper.contains(e.target)) closePopup();
  });

  // close when pressing Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closePopup();
  });

  // close on focus out (optional)
  morePopup.addEventListener('focusout', function (e) {
    // if focus moved outside popup entirely — close
    if (!morePopup.contains(e.relatedTarget)) closePopup();
  });

})();

