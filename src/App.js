import Assurance from "./components/Assurance";
import Client from "./components/Client";
import Footer from "./components/Footer";
import Mianimage from "./components/Mianimage";
import Navbar from "./components/Navbar";
import Prenav from "./components/Prenav";
// import Slider from "./components/Slider";


function App() {
  return (
    <>
    <Prenav />
    <Navbar />
    <Mianimage />
    <Client />
    {/* <Slider /> */}
    <Assurance />
    <Footer />
    </>

  );
}

export default App;
