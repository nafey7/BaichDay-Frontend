import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/Login';
import Product from './components/Product';
import UserHome from './components/UserHome';

function App() {
  return (
    <Router>
      <div className="App" style={{height:"100%", backgroundColor:"white", position:"relative", width:"100%", backgroundSize: "cover"}}>
        <Routes>
          <Route path="/" element={ <UserHome/> }/>
          <Route path='/login' element={ <Login/> }/>
          <Route path='/product' element={ <Product/> }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
