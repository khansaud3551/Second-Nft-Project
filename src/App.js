import "./App.css";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Rarity from "./components/Rarity";
import Team from "./components/Team";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-cubic",
      mirror: true,
    });
  }, []);
  return (
    <div className="App ">
      <Header />
      <Banner />
      <Content1 />
      <Content2 />
      <Content3 />
      <Card />
      <Rarity />
      <Team />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
