import  { createContext, useEffect, useState } from 'react';
import { app } from '../../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {

        const [user, setUser] = useState(null)
        const [loading, setLoading] = useState(true)
        const GoogleProvider = new GoogleAuthProvider();

        const googleSignIn = ()=>{
                setLoading(true)
                return signInWithPopup(auth, GoogleProvider)
        }

        const createUser = (email, password)=>{
                setLoading(true)
                return createUserWithEmailAndPassword(auth, email, password)
        }

        const signIn = (email, password)=>{
                setLoading(true)
                return signInWithEmailAndPassword(auth, email, password)
        }

        const logOut =()=>{
                setLoading(true)
                return signOut(auth)
        }
        const updateUser =(userInfo)=>{
                setLoading(true)
                return updateProfile(auth.currentUser, userInfo)
        }
        useEffect( ()=>{
                const unsubscribe = onAuthStateChanged(auth, loggedUser=>{
                        setUser(loggedUser)
                        setLoading(false)
                        console.log(loggedUser)
                    })
                    return ()=> {
                        unsubscribe()
                    }
            },[])
    
        const authInfo = {
                user,
                loading,
                googleSignIn,
                updateUser,
                logOut,
                signIn,
                createUser
        }
        return (
                <AuthContext.Provider value={authInfo}>
                        {children}
                </AuthContext.Provider>
        );
};

export default AuthProvider;