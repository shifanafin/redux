import Home from "./Pages/Home";
import Nav from "./Pages/Nav";
import About from "./Pages/About";
import Feature from "./Pages/Feature";
import Screenshot from "./Pages/Screenshot";
import Teams from "./Pages/Teams";
import Contact from "./Pages/Contact";
import {Routes,Route} from "react-router-dom"
import Cart from "./Pages/Cart";
import Store from "./Pages/Store/Store.jsx";
import {Provider} from "react-redux/es/exports"

function App() {
  return (
    <div className="App">
      <Provider Sample={Store}>
        <Nav/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Feature" element={<Feature/>} />
      <Route path="/Screenshot" element={<Screenshot/>} />
      <Route path="/Teams" element={<Teams/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Cart" element={<Cart/>} />
     </Routes>
     </Provider>
    </div>
  );
}

export default App;
