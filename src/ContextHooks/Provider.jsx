import React, { createContext, useState ,useEffect } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut , GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import auth from '../FirebaseFiles/firebase.config'



export const AuthContext = createContext(null);



function Provider({ children }) {

    const [user, setUser] = useState(null);
    const [Loading , setLoading] = useState(true);

    const Provider = new GoogleAuthProvider()

  const googleLogin =()=>{
    return signInWithPopup(auth, Provider)
  }
    const Register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const Login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const Logout = () => {
        setLoading(true)
        return signOut(auth);
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser =>{
            if(currentUser){
                setUser(currentUser)
                setLoading(false)
            }
            else{
                setUser(null)
                setLoading(false)
            }
        })


        return ()=>{
            unsubscribe ();
        }
    },[])














    const authInfo = {
        user,
        Loading,
        Register,
        Login,
        Logout,
        googleLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
Provider.propTypes = {
    children: PropTypes.object.isRequired
}
export default Provider