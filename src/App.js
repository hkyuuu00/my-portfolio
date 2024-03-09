import './App.css';
import Home from './Component/Home';
import Menu from './Component/Menu';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='app' style={{display: 'flex'}}>
      <BrowserRouter>
        {/*<Route path='/' element={<Home />}/>*/}
        <Menu />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
