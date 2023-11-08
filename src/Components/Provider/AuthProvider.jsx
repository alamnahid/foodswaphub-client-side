import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../../Firebase/firebase.confiq";
import axios from "axios";




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

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, createUser => {

            const userEmail = createUser?.email || user?.email;
            const loggedUser = { email: userEmail };

            setUser(createUser)
            console.log('current user', createUser);
            setLoading(false)
            if (createUser) {
                axios.post('https://b8a11-server-side-jannat-jui.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data);
                    })
            }
            else {
                axios.post('https://b8a11-server-side-jannat-jui.vercel.app/logout', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                    })
            }
        })
        return () => {
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