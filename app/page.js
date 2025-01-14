import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";


// 메인페이지로 좀 애니메틱한 기능들이 추가로 들어가게 하기 -> 여기서 결정할 수 있게?
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer/>
    </>
  );
}
