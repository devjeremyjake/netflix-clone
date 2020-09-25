// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyAOqEvdVMUnqmXr0Wpdu8zY9LBYEoQjIKA',
	authDomain: 'netflix-5286a.firebaseapp.com',
	databaseURL: 'https://netflix-5286a.firebaseio.com',
	projectId: 'netflix-5286a',
	storageBucket: 'netflix-5286a.appspot.com',
	messagingSenderId: '1036834340991',
	appId: '1:1036834340991:web:f4ac0a21efbc72d6f3bf4a',
	measurementId: 'G-LTYGWTNQG2',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
