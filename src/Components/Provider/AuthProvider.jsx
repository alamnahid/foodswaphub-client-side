import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider  } from "firebase/auth";
import app from "../../Firebase/firebase.confiq";




export const AuthContext = createContext(null)

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const handleUpdateProfile = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const googleSignIn = ()=>{
        setLoading(true)
       return signInWithPopup(auth, provider);
    }


    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, createUser => {
            // console.log('user in the auth state changed ', createUser);
            setUser(createUser)
            setLoading(false)
        })
        return ()=> {
            unsubscribe();
        }
    }, [])



    const aouthInfo = {
        user,
        createUser,
        logOut,
        signIn,
        loading,
        googleSignIn,
        handleUpdateProfile
       
    }
    return (
        <AuthContext.Provider value={aouthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;