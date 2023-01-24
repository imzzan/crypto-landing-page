import { Footer, Navbar } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <div className=" overflow-hidden bg-color5 app">
      <div className="fixed w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#312964] rounded-full opacity-70 blur-[40px] top-[-10px]  left-[-50px]"></div>
      <div className="fixed bg-[#86CFD0] top-[400px] rounded-full w-[300px] h-[300px] right-0 opacity-70 blur-[77px]"></div>
      <div className=" relative">
        <Navbar/>
        <Home/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
