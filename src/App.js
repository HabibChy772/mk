
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Home } from './Pages/Home';
import { Project } from './Pages/Project';
import { Skill } from './Pages/Skill';
import Sidebar from './Sidebar/Sidebar';
import Kls from './Pages/Kls';
import ProductList from './Pages/ProductList';


function App() {
  return (
     <div className="App" style={{backgroundColor: "#1d1d1d"}}>
      <BrowserRouter> 
      <Sidebar>
      <Routes>
    
        <Route path='/about'element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/project'element={<Project/>}/>
        <Route path='/skill' element={<Skill/>}/>
        <Route path='/'element={<Home/>}/>
        <Route path='/productlist' element={<ProductList/>}/>
        <Route path='/kls'element={<Kls/>}/>
      
        
        </Routes>
         
        </Sidebar>
        </BrowserRouter>

       

    </div>
  );
}

export default App;
