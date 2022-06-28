
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import CharacterDetail from './containers/CharacterDetail/ChracterDetail';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>


          <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/detail" element={<CharacterDetail/>}/>

          </Routes>
      
      
      </BrowserRouter>

    </div>
  );
}

export default App;
