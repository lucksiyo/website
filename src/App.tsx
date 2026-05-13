import { BrowserRouter, Routes, Route } from 'react-router'
import { UseSmoothScroll } from 'smooth-motion'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Games from './pages/Games/Games'
import Cursor from './components/Cursor/Cursor'

function App() {

  return (
    <div>
      <UseSmoothScroll speed={1.5} />

      <div className='hidden lg:block'>
        <Cursor />  
      </div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/games' element={<Games /> } />
        </Routes>
      </BrowserRouter>      
    </div>
  )
}

export default App
