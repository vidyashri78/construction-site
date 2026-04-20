// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'   // ← new
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Team from './pages/Team'
import WhyUs from './pages/WhyUs'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      {/*
        ScrollToTop must be INSIDE <Router> (so it can call useLocation),
        but OUTSIDE <Routes> (so it runs on every navigation, not just
        when a route re-mounts).
      */}
      <ScrollToTop />

      <Navbar />
      <main>
        <Routes>
          <Route path="/"               element={<Home />}          />
          <Route path="/services"       element={<Services />}      />
          <Route path="/projects"       element={<Projects />}      />
          <Route path="/projects/:id"   element={<ProjectDetail />} />
          <Route path="/team"           element={<Team />}          />
          <Route path="/why-us"         element={<WhyUs />}         />
          <Route path="/contact"        element={<Contact />}       />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
