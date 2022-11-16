import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/Login';
import Product from './components/Product';
import UserHome from './components/UserHome';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App" style={{height:"100%", backgroundColor:"white", position:"relative", width:"100%", backgroundSize: "cover"}}>
        <Routes>
          <Route path="/" element={<> <Navbar/> <UserHome/> </>}/>
          <Route path='/login' element={ <Login/> }/>
          <Route path='/product' element={<><Navbar/> <Product/> </>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
