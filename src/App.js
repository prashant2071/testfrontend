import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Headers from "./headers/Headers";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Result from "./result/result";
import Restaurant from "./restaurant/Restaurant";

function App() {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/result" element = {<Result/>}/>
        <Route path="/restaurant" element = {<Restaurant/>}/>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
