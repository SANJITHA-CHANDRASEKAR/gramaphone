import './App.css';
import FirstPage from './components/first';
import SecondPage from './components/second';
import ThirdPage from './components/third';
import { Route, Routes } from 'react-router-dom';
import Song from './components/four';
import Signup from './components/signup';
import Download from './components/feedback';
import Subscribe from './components/subscribe';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<FirstPage/>}   />
      <Route path='/second' element={<SecondPage/>}   />
      <Route path='/third' element={<ThirdPage/>}   />
      <Route path='/four' element={<Song/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/feedback' element={<Download/>} />
      <Route path='/subscribe' element={<Subscribe/>} />
     </Routes>
     {/* <FirstPage/> */}
    </div>
  );
}

export default App;
