require('dotenv').config();

const firebase = require('firebase');

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
};

firebase.initializeApp(firebaseConfig);

firebase.database().ref('/data').on('value', s => {
    console.log(s.val());
    process.exit(0);
});

let newKey = firebase.database().ref().child('data').push().key;
let updatesToMake = {};

updatesToMake['/data/' + newKey] = {
    email: 'csta0@rivers.org',
    first_name: 'Chris',
    gender: 'Stasek',
    id: 1,
    ip_address: '16.09.48.224',
}

firebase.database().ref().update(updatesToMake).then(result => console.log(result));
