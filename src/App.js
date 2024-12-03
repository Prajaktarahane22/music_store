import AddNav from './components/AddNav';

import{BrowserRouter , Route , Routes} from 'react-router-dom'

import './App.css';
import MusicList from './components/MusicList';
import AddMusic from './components/AddMusic';
import UpdateMusic from './components/UpdateMusic';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
    
    
    <AddNav/>
     
     <BrowserRouter>
     <Routes>
     
       <Route path="/home" element={<Home/>}/>
      <Route path="/music-list" element={<MusicList/>}/>
      <Route path="/addmusic" element={<AddMusic/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/update-music/:id" element={<UpdateMusic/>}/>
      
      </Routes>
     </BrowserRouter>
    
    </>
    
  );
}

export default App;
