import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAR66YmaG7-3dWny8S12NH2RUlju2NX8Yw",
  authDomain: "react-todo-app-b7b5d.firebaseapp.com",
  databaseURL: "https://react-todo-app-b7b5d.firebaseio.com",
  storageBucket: "react-todo-app-b7b5d.appspot.com",
  messagingSenderId: "33613870135"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
	app: {
		name: "Todo App",
		version: "1.0.0"
	},
	isRunning: true,
	user: {
		name: "Tung",
		age: 29
	}
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
	console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
	text: "Todo 1"
});

todosRef.push({
	text: "Todo 2"
});

// var notesRef = firebaseRef.child('notes');
// 
// notesRef.on('child_added', (snapshot) => {
// 	console.log('child_added', snapshot.key, snapshot.val());
// });
// 
// notesRef.on('child_changed', (snapshot) => {
// 	console.log('child_changed', snapshot.key, snapshot.val());
// });
// 
// notesRef.on('child_removed', (snapshot) => {
// 	console.log('child_removed', snapshot.key, snapshot.val());
// });
// 
// var newNoteRef = notesRef.push({
// 	text: 'Walk the dog'
// });

// newNoteRef.set({
// 	text: 'Walk the dog'
// });

// firebaseRef.child('user').on('value', (snapshot) => {
// 	console.log('User ref change', snapshot.val());
// });
// 
// firebaseRef.child('user').update({name: "Huu Tung"});
// 
// firebaseRef.child('app').update({name: "Something else"});

// var logData = (snapshot) => {
// 	console.log('Got value', snapshot.val());
// };
// firebaseRef.on('value', logData)
// firebaseRef.on('value', (snapshot) => {
// 	console.log('Got value', snapshot.val());
// });

//firebaseRef.off(logData);
//firebaseRef.off();

//firebaseRef.update({isRunning: false});

// firebaseRef.child('app').once('value').then((snapshot) => {
// 	console.log('Got entire database', snapshot.key, snapshot.val());
// }, (e) => {
// 	console.log('Unable to fetch value', e);
// });

// firebaseRef.update({
// 	'app/name': 'Todo Application',
// 	'user/name': 'Huu Tung'
// });
// 
// firebaseRef.child('app').update({
// 	version: '2.0',
// 	name: null
// });
// 
// firebaseRef.update({
// 	isRunning: null
// });

//firebaseRef.child('app/name').remove();
//firebaseRef.remove();

// firebaseRef.child('app').update({ name: 'Todo Application' });
// firebaseRef.child('user').update({ name: 'Huu Tung' });

// firebaseRef.child('app').update({
// 	name: 'Todo Application'
// }).then(() => {
// 	console.log('Update worked!');
// }, (e) => {
// 	console.log('Update failed!');
// });