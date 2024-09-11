import logo from './logo.svg';
import './App.css';
import Dashboard from "./components/Dashboard"
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/Login-page';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signpage from"./components/Signpage"
import ReactVirtualizedTable from './components/Item';
import Contact from './components/Contact'
import Services from './components/Services'
import About from './components/About'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/reactproject' element={<LoginPage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/signpage' element={<Signpage/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/Services' element={<Services/>}></Route>
          <Route path='/Item' element={<ReactVirtualizedTable/>}></Route>
        </Routes>
      </Router>     
    </div>
      
  );
}

export default App;
