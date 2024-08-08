import './App.css';
import About from '../src/components/About/About'
import Home from './components/Home/Home';
import { Routes,Route,Link } from 'react-router-dom';
function App() {
  return (
 <>
<Routes>
    <Route exact path="/"element={<Home />}/> 
    <Route exact path="/About"element={<About/>}/></Routes>                  
    </>
  
  );
}

export default App;
