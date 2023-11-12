const signedInText = document.querySelector('.auth-test-signed-in');
const signedOutText = document.querySelector('.auth-test-signed-out');
const signInBtn = document.querySelector('.auth-modal-open');
const signOutBtn = document.querySelector('.js-sign-out-btn');
const dbwBtn = document.querySelector('.dbw');
const dbrBtn = document.querySelector('.dbr');

// RENDERING PAGE WHEN USER IS LOGGED IN :
function signInPageRender() {
  signedInText.classList.remove('auth-hidden');
  signOutBtn.classList.remove('auth-hidden');
  dbwBtn.classList.remove('auth-hidden');
  dbrBtn.classList.remove('auth-hidden');
  signedOutText.classList.add('hidden');
  signInBtn.classList.add('hidden');
}

// RENDERING PAGE WHEN USER IS LOGGED OUT :
function signOutPageRender() {
  signedInText.classList.add('auth-hidden');
  signOutBtn.classList.add('auth-hidden');
  dbwBtn.classList.add('auth-hidden');
  dbrBtn.classList.add('auth-hidden');
  signedOutText.classList.remove('hidden');
  signInBtn.classList.remove('hidden');
}

export { signInPageRender, signOutPageRender };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
