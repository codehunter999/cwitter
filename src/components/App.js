import React, {useState} from "react";
import AppRouter from './Router';
import {authService} from "../firebase"

function App() {
  console.log(authService.currentUser);
  const [isLoggedIn, setIsLiggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; Cwitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;