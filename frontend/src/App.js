import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Prenav from "./components/Prenav";
import Home from "./components/Home";
import { Routes, Route, } from "react-router-dom";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Productdes from "./components/Productdes";
import Signup from "./components/Signup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./components/Login";
import Userdetail from "./components/Userdetail";

function App() {
  return (
    <>
    <Prenav />
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Productdes />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userdetail" element={<Userdetail />} />
      </Routes>
  
    <Footer />
    <ToastContainer />
    </>

  );
}

export default App;
