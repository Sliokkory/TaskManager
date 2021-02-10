import React from 'react';

import MainStackNavigator from './navigation/MainStackNavigator';

import firebase from 'firebase';

export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyAQG0M4QePwGuFCHWBbSRPI9igZ8lzAJYc",
  authDomain: "taskmanager-7ed31.firebaseapp.com",
  databaseURL: "https://taskmanager-7ed31-default-rtdb.firebaseio.com",
  projectId: "taskmanager-7ed31",
  storageBucket: "taskmanager-7ed31.appspot.com",
  messagingSenderId: "758203810113",
  appId: "1:758203810113:web:a47125e883960f5d78e1c0"
  };
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  // Initialize Firebase
  return <MainStackNavigator />;
}
