import firebase from 'firebase';

try {
	// Initialize Firebase
	var config = {
	  apiKey: "AIzaSyAR66YmaG7-3dWny8S12NH2RUlju2NX8Yw",
	  authDomain: "react-todo-app-b7b5d.firebaseapp.com",
	  databaseURL: "https://react-todo-app-b7b5d.firebaseio.com",
	  storageBucket: "react-todo-app-b7b5d.appspot.com",
	  messagingSenderId: "33613870135"
	};

	firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;