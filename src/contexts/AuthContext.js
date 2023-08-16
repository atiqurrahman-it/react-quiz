import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import app from "../firebase/firebase.config";

// create context
export const AuthContext = React.createContext();

//
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // register user
  //   const createUser = (email,password) => {
  //     setLoading(true)
  //     return createUserWithEmailAndPassword(auth,email,password)
  //   };

  const createUser = async (email, password, userName) => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password);

    //update Profile
    await updateProfile(auth.currentUser, {
      displayName: userName,
    });

    //  update user  
    const C_user = auth.currentUser;
    setUser({
      ...C_user,
    });

    
    
  };

  // login user
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //logOut User
  const logOutUser = () => {
    return signOut(auth);
  };

  //  //current user is by setting an observer on the Auth object
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)

    })
    return ()=>{
        unsubscribe()
    }
  },[])

  //  share data [AuthProvider all children]
  const data = {
    loading,
    user,
    createUser,
    logInUser,
    logOutUser,
  };

  return (
    <>
      <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
