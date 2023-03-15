// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/Login';
import Product from './components/Product';
import UserHome from './components/UserHome';
import Navbar from './components/Navbar';
import AddProduct from './components/AddProduct';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import AdminHome from './components/AdminHome.js';
import CustomerProfile from './components/CustomerProfile';
import History from './components/History';
import ChatBot from './components/ChatBot';
import AdminNavbar from './components/AdminNavbar';
import Payment from './components/Payment';
import Wallet from './components/Wallet';

import MoizChat from './components/MoizChat';

function App() {
  return (
    <Router>
      <div className="App" style={{ height: '100%', backgroundColor:"#c8c8c8", backgroundRepeat: 'repeat', position:"relative", width:"100%", backgroundSize: "cover"}}>
        <Routes>
          <Route path="/" element={<> <Navbar/> <UserHome title="Featured Products"/><ChatBot/><Footer/> </>}/>
          <Route path="/category" element={<> <Navbar/> <UserHome title="Browse"/><ChatBot/><Footer/> </>}/>
          <Route path='/login' element={ <Login/> }/>
          <Route path='/wallet' element={<><Navbar/><Wallet/><History/></>}/>
          <Route path='/product' element={<><Navbar/> <Product/><ChatBot/><Footer/> </>}/>
          <Route path='/AddProduct' element={<><Navbar/> <AddProduct/><ChatBot/><Footer/> </>}/>
          <Route path='/AboutUs' element={<><Navbar/> <AboutUs/><ChatBot/><Footer/> </>}/>
          <Route path='/ContactUs' element={<><Navbar/> <ContactUs/><Footer/> </>}/>
          <Route path='/CustomerProfile' element={<><Navbar/><CustomerProfile/><ChatBot/></>}/>
          <Route path='/Admin' element={<><AdminNavbar/><AdminHome/></>}/>
          <Route path='/history' element={<><Navbar/><History/><ChatBot/></>}/>
          <Route path='/payment' element={<><Navbar/><Payment/><Footer/></>}/>
<<<<<<< Updated upstream

          <Route path='/moizchat' element={<><Navbar/><MoizChat/></>}/>
=======
          <Route path='/moizchat' element={<><Navbar/><MoizChat/><Footer/></>}/>
>>>>>>> Stashed changes

        </Routes>
      </div>
    </Router>
  );
}

export default App;
