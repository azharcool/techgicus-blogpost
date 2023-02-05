import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <div style={{ height: 50, background: "red" }}></div>
      <Header title="Techgicus Blogpost" />
      <Nav />

      <div style={{
        height: 1000
      }}>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
