import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUserWithEmailAndPasswordfunc = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const signInWithEmailAndPasswordfunc = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateProfilefunc = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
                  displayName,
                  photoURL,
                })
    }

    const sendEmailVarificationfunc = () => {
        return sendEmailVerification(auth.currentUser); 
    }



    const signInWithPopupfunc = () => {
      return signInWithPopup();
    };

    const signInWithGooglefunc = () => {
      return signInWithPopup();
    };

    const signInWithGiHubfunc = () => {
      return signInWithPopup();
    };

    const signOutWithUserFunc = () => {
        return signOut(auth);
    }

    const sendPasswordResetEmailfunc = (email) => { 
        return sendPasswordResetEmail(auth, email)
    }

    
    const authInfo = {
      user,
      setUser,
      createUserWithEmailAndPasswordfunc,
      signInWithEmailAndPasswordfunc,
      signInWithPopupfunc,
      signInWithGooglefunc,
      signInWithGiHubfunc,
      signOutWithUserFunc,
      sendPasswordResetEmailfunc,
      updateProfilefunc,
      sendEmailVarificationfunc,
    };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    },[])

    

    return <AuthContext value={authInfo}>{ children }</AuthContext>
};

export default AuthProvider;