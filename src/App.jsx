import "./App.css";
import "./app.scss";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualifitation from "./components/qualification/Qualifitation";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      {/* <Cursor /> */}
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualifitation />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;