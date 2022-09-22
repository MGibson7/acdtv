import Home from "./pages/home/Home";
import WeDo from "./pages/weDo/WeDo";
import Banner from "./components/banner/Banner";
import NavBar from "./components/navbar/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import WeHelp from "./pages/wehelp/WeHelp";
import Contact from "./pages/contact/Contact";



function App() {
  return (
    <>
    <Router>
      <Banner/>
      <NavBar/>
      <Routes>
      <Route exact path = "/" element = { <Home/> }/>
      <Route exact path = "/wedo" element = { <WeDo/> }/>
      <Route exact path = "/wehelp" element = { <WeHelp/> }/>
      <Route exact path = "/contact" element = {<Contact/>}/>

      </Routes>
      
    </Router>
    </>
  );
}

export default App;
