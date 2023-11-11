// NOTIFLIX :
import Notiflix from 'notiflix';
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

// ELEMENTS :
const elements = {
  signUpBox: document.querySelector('.js-sign-up'),
  signInBox: document.querySelector('.js-sign-in'),
  signUpForm: document.querySelector('.js-sign-up-form'),
  signInForm: document.querySelector('.js-sign-in-form'),
  signUpBtn: document.querySelector('.js-sign-up-link'),
  signInBtn: document.querySelector('.js-sign-in-link'),
  exitBtn: document.querySelector('.js-sign-out-btn'),
  openModalBtn: document.querySelector('.auth-modal-open'),
  closeModalBtn: document.querySelector('.auth-modal-close'),
  modal: document.querySelector('.auth-modal-backdrop'),
};

// LISTENERS :
elements.signInBtn.addEventListener('click', signInActivate);
elements.signUpBtn.addEventListener('click', signUpActivate);
elements.signUpForm.addEventListener('submit', signUpHandler);
elements.signInForm.addEventListener('submit', signInHandler);
elements.openModalBtn.addEventListener('click', toggleModal);
elements.closeModalBtn.addEventListener('click', toggleModal);
elements.exitBtn.addEventListener('click', exitHandler);

// FUNCTIONS :
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
  signUpService(data.email, data.password, data.username);
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

// SERVICES :
function signUpService(email, password, name) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() =>
      updateProfile(auth.currentUser, {
        displayName: name,
      })
    )
    .then(() => {
      //   Notiflix.Notify.success(`Welcome, ${name}!`);
      console.log(`Welcome, ${name}!`);
      alert(`Welcome, ${name}!`);
      console.log(getUserData());
      toggleModal();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      //   Notiflix.Notify.failure(errorCode, errorMessage);
      console.log(errorCode, errorMessage);
      alert(errorCode, errorMessage);
    });
}

function signInService(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log(`Welcome, ${user.displayName}!`);
      alert(`Welcome, ${user.displayName}!`);
      //   Notiflix.Notify.success(`Welcome, ${user.displayName}!`);

      console.log(getUserData());
      toggleModal();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      //   Notiflix.Notify.failure(errorCode, errorMessage);
      console.log(errorCode, errorMessage);
      alert(errorCode, errorMessage);
    });
}

function exitHandler() {
  signOut(auth)
    .then(() => {
      console.log('Sign-out successful.');
      Notiflix.Notify.success('Sign-out successful.');
      console.log('Sign-out successful.');
      alert('Sign-out successful.');
    })
    .catch(error => {
      console.log(`An error happened. ${error}`);
      //   Notiflix.Notify.failure(`An error happened. ${error}`);
      console.log(`An error happened. ${error}`);
      alert(`An error happened. ${error}`);
    });
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
    return userData;
  }
}

//  write User Shopping List
function writeUserShoppingList(booksArr) {
  if (!booksArr) {
    console.log('No data to write!');
    return;
  }
  const userData = getUserData();
  if (!userData) {
    console.log(`User is not authorized!`);
    alert(`User is not authorized!`);
    // Notiflix.Notify.failure(`User is not authorized!`);
    return;
  }
  const userId = userData.uid;
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    books: booksArr,
  });
  console.log(`Success!`);
  alert(`Success!`);
}

// read User Shopping List
function readUserShoppingList() {
  const userData = getUserData();
  if (!userData) {
    console.log(`User is not authorized!`);
    alert(`User is not authorized!`);
    return;
  }
  const userId = userData.uid;
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/${userId}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        alert(`Success!`);
        return snapshot.val();
      } else {
        console.log('No data available');
        alert('No data available');
      }
    })
    .catch(error => {
      console.log(error);
      alert(error);
    });
}

// EXPORT :

export {
  getUserData,
  exitHandler,
  writeUserShoppingList,
  readUserShoppingList,
};
//
//
//

//  INSTRUCTIONS :
//
// IMPORT & INITIALIZATION:
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

// GET AUTH STATE :
// onAuthStateChanged(auth, user => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

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

// TEMPORARY :
const dbwBtn = document.querySelector('.dbw');
dbwBtn.addEventListener('click', writeClickHandler);

function writeClickHandler() {
  writeUserShoppingList([]);
}
const dbrBtn = document.querySelector('.dbr');
dbrBtn.addEventListener('click', readUserShoppingList);
