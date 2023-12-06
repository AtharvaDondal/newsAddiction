// RegistrationComponent.js
import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import {auth,provider} from "./firebaseConfig"
// import 'firebase/compat/firestore';
import firebaseConfig from "./firebaseConfig"

firebase.initializeApp(firebaseConfig);

const RegistrationComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log('User registered successfully:', userCredential.user);
    } catch (error) {
      console.error('Error during registration:', error.message);
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegistrationComponent;
