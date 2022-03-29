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

function App() {
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
