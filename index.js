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

let firebaseData = {};

function printData() {
    firebase.database().ref('/data').on('value', s => {
        console.log(s.val());
        firebase.database().ref('/data').off();
        process.exit(0);
    });
}

function addChild(data) {
    return firebase.database().ref().child('data').push().set(data);
}

switch (process.argv[2]) {
    case 'print':
        printData();
        break;
    default:
        console.log('Unrecognized command, exiting.');
        process.exit(0);
        break;
};
