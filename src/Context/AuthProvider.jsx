import React from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '@/lib/firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';


const googleProvider = new GoogleAuthProvider()
const AuthProvider = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // email registeration
    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // Email Sign in
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // google Sign In
    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // signOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };
    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        };
    }, []);
    const authInfo = {
        user,
        loading,
        registerUser,
        signInUser,
        signInGoogle,
        logOut,
        
    };
    return (
     <AuthContext.Provider value={authInfo}>
        {children}
     </AuthContext.Provider>

    )
};

export default AuthProvider;