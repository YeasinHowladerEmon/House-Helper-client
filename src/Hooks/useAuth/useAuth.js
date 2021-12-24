import { useEffect, useState } from "react";
import firebaseConfig from "../../Components/allAuth/firebaseConfig";
import firebase from "firebase/compat/app";
import { getAuth, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, getIdToken } from "firebase/auth";
import toast from "react-hot-toast";
import axios from "axios";

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();



export const useAuth = () => {


    const [user, setUser] = useState({})

    // const [adminLoading, setAdminLoading] = useState(true);
    const [token, setToken] = useState('')

    const googleSignIn = () => {
        return signInWithPopup(auth, provider).then(res => {
            const user = res.user;
            saveUser(user.email, user.displayName, "put")
        })
    }
    const signup = (name, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                saveUser(email, name, "post");
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
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })
                toast.success('Successfully Logged In!!!');
            } else {
                setUser(false)
            }
        });
        return subs;
    }, [])

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        console.log(email, displayName);
        axios({
            method: method,
            url: 'https://glacial-plains-17172.herokuapp.com/users',
            data: user
        }).then(res => console.log(res.data))
    }

    return {
        signup,
        login,
        googleSignIn,
        resetPassword,
        user,
        logOut,
        token,
    }
}