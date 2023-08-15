import React, { useState } from "react";
import App from "../component/App";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

// create context
const AuthContext = React.createContext();

 //
const auth =getAuth(App);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);



  // register user 
  const createUser = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  };

  // login user 
  const logInUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)

  }
  //logOut User 
  const logOutUser=()=>{
    return signOut(auth)
}

  //  share data [AuthProvider all children]
  const data = {
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

export default AuthProvider
