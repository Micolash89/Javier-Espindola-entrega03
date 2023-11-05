//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  // const [count, setCount] = useState(0)
  const [posActual, setPosActual] = useState(0);
  const [tam, setTam] = useState(0);
  return (
    <div className="body">
      <Header />
      <Main posActual={posActual} setTam={setTam} setPosActual={setPosActual} />
      <Footer posActual={posActual} setPosActual={setPosActual} tam={tam} />
    </div>
  );
}

export default App;
