import "./App.css";
import Navbar from "./components/Navbar";
import Routing from "./components/Routing";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col justify-center items-center font-primary">
      <Navbar />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
