import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";


// 메인페이지로 좀 애니메틱한 기능들이 추가로 들어가게 하기 -> 여기서 결정할 수 있게?
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About/>
    </>
  );
}
