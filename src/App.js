import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/Login';
import UserHome from './components/UserHome';

function App() {
  return (
    <Router>
      <div className="App" style={{height:"100%", backgroundColor:"white", position:"relative", width:"100%", backgroundSize: "cover"}}>
        <Routes>
          <Route path="" element={ <UserHome/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
