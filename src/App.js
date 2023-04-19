import './App.css';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Header from './components/Header';
import {Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <h1>App component</h1>
      {/* <Home/>
      <AboutUs/> */}
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
      </Routes>
      

    </div>
  );
}

export default App;
