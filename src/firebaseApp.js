import * as firebase from 'firebase';

 const firebaseConfig = {
  apiKey: "AIzaSyD_9y_8NjTUxm1sMLyJ1hPe7vK2jDURt8Y",
  authDomain: "eventmaker-fefff.firebaseapp.com",
  databaseURL: "https://eventmaker-fefff.firebaseio.com",
  projectId: "eventmaker-fefff",
  storageBucket: "eventmaker-fefff.appspot.com",
  messagingSenderId: "1013579435600",
  appId: "1:1013579435600:web:b2d41f2400c55ea01d4b55",
  measurementId: "G-XEVN5BKWVJ"
};

 export const fireApp = firebase.initializeApp(firebaseConfig );
export const fireEvent = fireApp.database().ref().child('events');