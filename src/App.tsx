import { BrowserRouter, Routes, Route } from 'react-router'
import { UseSmoothScroll } from 'smooth-motion'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'

function App() {

  return (
    <div>
      <UseSmoothScroll speed={1.5} />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </BrowserRouter>      
    </div>
  )
}

export default App
