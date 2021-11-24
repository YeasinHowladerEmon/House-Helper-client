import { useEffect, useState } from "react";
import firebaseConfig from "../../Components/allAuth/firebaseConfig";
import firebase from "firebase/compat/app";
import { getAuth, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import {  useHistory} from 'react-router-dom';

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();



export const useAuth = () => {

    // const { path } = location.state || { path: '/' };

    const [user, setUser] = useState({})

    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }
    const signup = (name, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                updateUserName(name)
                return res
            })
    }
    const updateUserName = name => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const subs = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                toast.success('Successfully Logged In!!!');
                console.log("aise", user);
            } else {
                setUser(false)
            }
        });
        return subs;
    }, [])


    return {
        signup,
        login,
        googleSignIn,
        resetPassword,
        user,
        logOut
    }
}