import Header from "./components/header/Header"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Skills from "./components/skills/Skills"
import Services from "./components/services/Services"
import Qualification from "./components/qualification/Qualification"
import Portfolio from "./components/portfolio/Portfolio"

function App() {

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Portfolio />
      </main>
    </>
  )
}

export default App