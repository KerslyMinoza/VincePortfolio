import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import OtherExperiences from './components/OtherExperiences'
import './App.css'

function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="app">
      <Nav current={page} onChange={setPage} />
      {page === 'home' && (
        <div key="home" className="page page--home">
          <Hero />
        </div>
      )}
      {page === 'works' && (
        <div key="works" className="page">
          <Projects />
        </div>
      )}
      {page === 'experiences' && (
        <div key="experiences" className="page">
          <OtherExperiences />
        </div>
      )}
    </div>
  )
}

export default App
