import './App.css';
import Home from './Component/Home';
import Menu from './Component/Menu';
import About from './Component/About';
import Skills from './Component/Skills';
import Project from './Component/Project';
import Experience from './Component/Experience';
import Education from './Component/Education';
import Blog from './Component/Blog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app' style={{display: 'flex'}}>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/my-portfolio' element={<Home />}/>
          <Route path='/Home' element={<Home />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Skills' element={<Skills />}/>
          <Route path='/Project' element={<Project />}/>
          <Route path='/Experience' element={<Experience />}/>
          <Route path='/Education' element={<Education />}/>
          <Route path='/Blog' element={<Blog />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
