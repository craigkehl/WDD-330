// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAn4jRbqTi4P55TCnBYEi4Pni0uRVnGBcM",
  authDomain: "first-app-ckehl-07082020.firebaseapp.com",
  databaseURL: "https://first-app-ckehl-07082020.firebaseio.com",
  projectId: "first-app-ckehl-07082020",
  storageBucket: "first-app-ckehl-07082020.appspot.com",
  messagingSenderId: "922641375218",
  appId: "1:922641375218:web:b00e3d132c7bfd4127956b",
  measurementId: "G-9QW570GXBQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

const docRef = firestore.doc("todo/nW5iAmlILC8dfcIcIMUq");