import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

import "./style/app.scss"
import "./style/header.scss"
import "./style/home.scss"
import "./style/footer.scss"

function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<Home/>}/>
          <Route path="/products" element={<Home/>}/>
          <Route path="/testimonials" element={<Home/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
