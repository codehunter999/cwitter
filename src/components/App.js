import React, {useState} from "react";
import AppRouter from './Router';
import firebase from "../firebase"

function App() {
  const [isLoggedIn, setIsLiggedIn] = useState(false);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; Cwitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
