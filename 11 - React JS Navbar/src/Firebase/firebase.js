import { initializeApp } from 'firebase/app'
import { getAnalytics } from "firebase/analytics";
var firebase = require('firebase');
var firebaseui = require('firebaseui');

const firebaseConfig = {
    apiKey: "AIzaSyDg07gIr_K1UJbtP6cGsiemFn3-iCH7HF0",
    authDomain: "sangeetic-music-app.firebaseapp.com",
    projectId: "sangeetic-music-app",
    storageBucket: "sangeetic-music-app.appspot.com",
    messagingSenderId: "329505762489",
    appId: "1:329505762489:web:17c8599e1596c3c48aff68",
    measurementId: "G-CK8RE4X80L"
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)

var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
    signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: false
        }
    ]
});

const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://localhost:3000/',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
        bundleId: 'com.example.ios'
    },
    android: {
        packageName: 'com.example.android',
        installApp: true,
        minimumVersion: '12'
    },
    dynamicLinkDomain: 'example.page.link'
};