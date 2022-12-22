import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Project from './Pages/Projects/Project';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Shared/Footer/Footer';
import Bike from './Pages/Bike/Bike';
import Electric from './Pages/Electric/Electric';
import Wedding from './Pages/Wedding/Wedding';
import Technology from './Pages/Technology/Technology';
// import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/projects' element={<Project></Project>}></Route>
          <Route path='/technology' element={<Technology></Technology>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/bike' element={<Bike></Bike>}></Route>
          <Route path='/electric' element={<Electric></Electric>}></Route>
          <Route path='/wedding' element={<Wedding></Wedding>}></Route>
          
      </Routes>
      {/* <Footer></Footer> */}
      
    </div>
  );
}

export default App;
