import React, {useState} from "react";
import AppRouter from './Router';
import {authService} from "../firebase"
import { useEffect } from "react";


function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user){
        setIsLoggedIn(true);
      } else{
        setIsLoggedIn(false)
      }
      setInit(true)
    });
    // return () => {
    //   cleanup
    // }
  }, []);

  // setInterval(() => {
  //   console.log(authService.currentUser)
  // }, 2000)
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; Cwitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;