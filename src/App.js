import Main1 from "./components/Main/Main1";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Catalog from "./components/Catalog/Catalog";

function App() {
  return (
    <div className="wrapper">
        <Main/>
        <Catalog/>
        <Main1/>
        <Footer/>
    </div>
  );
}

export default App;
