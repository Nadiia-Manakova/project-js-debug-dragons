// NOTIFY :
import swal from 'sweetalert';
// FIREBASE APP :
import { initializeApp } from 'firebase/app';
import { fireBaseConfig } from './auth-fire-base-config';
// AUTH :
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
const app = initializeApp(fireBaseConfig);
const auth = getAuth();
// DATEBASE :
import { getDatabase, ref, set, onValue, child, get } from 'firebase/database';
// PAGE RENDER FUNCTIONS :
import { signInPageRender, signOutPageRender } from './auth-page-render';

// ELEMENTS :
const elements = {
  modal: document.querySelector('.auth-modal-backdrop'),
  headerLogoutBlock: document.querySelector('.header-logout-block'),
  openModalBtnMobile: document.querySelector('.menu-sign-up-btn'),
  closeModalBtn: document.querySelector('.auth-modal-close'),
  signUpBox: document.querySelector('.js-sign-up'),
  signInBox: document.querySelector('.js-sign-in'),
  signUpForm: document.querySelector('.js-sign-up-form'),
  signInForm: document.querySelector('.js-sign-in-form'),
  signUpBtn: document.querySelector('.js-sign-up-link'),
  signInBtn: document.querySelector('.js-sign-in-link'),
  exitBtn: document.querySelector('.header-overlay-wrap'),
  exitBtnMobile: document.querySelector('.mob-menu-logout-btn'),
};

// LISTENERS :
elements.signInBtn.addEventListener('click', signInActivate);
elements.signUpBtn.addEventListener('click', signUpActivate);
elements.signUpForm.addEventListener('submit', signUpHandler);
elements.signInForm.addEventListener('submit', signInHandler);
elements.openModalBtnMobile.addEventListener('click', toggleModal);
elements.headerLogoutBlock.addEventListener('click', toggleModal);
elements.closeModalBtn.addEventListener('click', toggleModal);
elements.exitBtn.addEventListener('click', exitHandler);
elements.exitBtnMobile.addEventListener('click', exitHandler);

// MODAL WINDOW :
function toggleModal() {
  elements.modal.classList.toggle('auth-backdrop-hidden');
}

function signInActivate(event) {
  event.preventDefault();
  elements.signUpBox.classList.add('auth-hidden');
  elements.signInBox.classList.remove('auth-hidden');
  elements.signUpBtn.classList.remove('active');
  elements.signInBtn.classList.add('active');
}

function signUpActivate(event) {
  event.preventDefault();
  elements.signUpBox.classList.remove('auth-hidden');
  elements.signInBox.classList.add('auth-hidden');
  elements.signUpBtn.classList.add('active');
  elements.signInBtn.classList.remove('active');
}

function signUpHandler(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  const checkName = data.username.trim();
  if (!checkName) {
    // console.log('Please enter your name!');
    swal('Please enter your name!', {
      icon: 'warning',
    });
    return;
  }
  signUpService(data.email, data.password, checkName);
}

function signInHandler(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  signInService(data.email, data.password);
}

// GET USER AUTH STATE, PAGE RENDERING :

onAuthStateChanged(auth, user => {
  if (user) {
    const userData = {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      uid: user.uid,
    };
    // console.log(`User is signed in!`);
    signInPageRender(userData);
  } else {
    // console.log(`User is signed out!`);
    signOutPageRender();
  }
});

// SERVICES :

function signUpService(email, password, name) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() =>
      updateProfile(auth.currentUser, {
        displayName: name,
      })
    )
    .then(() => {
      const headerOverlayUserName = document.querySelector(
        '.header-overlay-user-name'
      );
      headerOverlayUserName.textContent = name;
      toggleModal();
      // console.log(`Welcome, ${name}!`);
      swal(`Welcome, ${name}!`, {
        icon: 'success',
        buttons: false,
        timer: 2000,
      });
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      swal(`${authErrorMapper(errorCode)}`, {
        icon: 'error',
      });
    });
}

function signInService(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      // console.log(`Welcome, ${user.displayName}!`);
      swal(`Welcome, ${user.displayName}!`, {
        icon: 'success',
        buttons: false,
        timer: 2000,
      });
      toggleModal();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      swal(`${authErrorMapper(errorCode)}`, {
        icon: 'error',
      });
    });
}

function exitHandler() {
  signOut(auth)
    .then(() => {
      // console.log('Sign-out successful.');
    })
    .catch(error => {
      console.log(`An error happened. ${error}`);
    });
  location.href = './index.html';
}

// GET USER DATA :
function getUserData() {
  const user = auth.currentUser;
  if (user !== null) {
    const userData = {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      uid: user.uid,
    };
    // console.log(userData);
    return userData;
  } else {
    console.log(`User is signed out.`);
  }
}

//  WRITE USER SHOPPING LIST :
function writeUserShoppingList(booksArr) {
  if (!booksArr) {
    console.log('No data to write.');
    return;
  }
  const userData = getUserData();
  if (!userData) {
    console.log(`User is not authorized.`);
    return;
  }
  const userId = userData.uid;
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    books: booksArr,
  });
  // console.log(`Shopping list was written to DB.`);
}

// ERROR HANDLE :
function authErrorMapper(err) {
  switch (err) {
    case 'auth/invalid-login-credentials':
      return 'Invalid login credentials!';
    case 'auth/email-already-in-use':
      return 'The entered email is already in use!';
    case 'auth/invalid-email':
      return 'Incorrect E-Mail Address!';
    case 'auth/weak-password':
      return 'The entered password is weak!';
    case 'auth/missing-password':
      return 'Password not entered!';
    case 'auth/too-many-requests':
      return 'Too many requests! Try again later.';

    default:
      return `An error happened. Error code: ${err}`;
  }
}

// EXPORT :

export { getUserData, exitHandler, writeUserShoppingList, authErrorMapper };

//  INSTRUCTIONS :
//
// FIREBASE IMPORT & INITIALIZATION:
// import { initializeApp } from 'firebase/app';
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   updateProfile,
//   onAuthStateChanged,
//   signOut,
// } from 'firebase/auth';
// import { fireBaseConfig } from './path/to/this-module';
// const app = initializeApp(fireBaseConfig);
// const auth = getAuth();

// GET USER :
//  function getUser() {
//   const auth = getAuth();
//   const user = auth.currentUser;
//   if (user) {
//     console.log(user);
//   } else {
//     console.log(`No user is signed in.`);
//   }
// }

// UPDATE PHOTO :
// updateProfile(auth.currentUser, {
//   displayName: 'Jane Q. User',
//   photoURL: 'https://example.com/jane-q-user/profile.jpg',
// })
//   .then(() => {
//     // Profile updated!
//     // ...
//   })
//   .catch(error => {
//     // An error occurred
//     // ...
//   });
