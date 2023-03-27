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

import UserChat from './components/UserChat';
import ChatList from './components/ChatList';
import PinAuthentication from './components/PinAuthentication';

function App() {
  return (
    <Router>
      <div className="App" style={{backgroundColor:"#c8c8c8", backgroundRepeat: 'repeat', position:"relative", width:"100%", backgroundSize: "auto"}}>
        <Routes>
          <Route path="/" element={<> <Navbar/> <UserHome title="Featured Products"/><ChatBot/><Footer/> </>}/>
          <Route path="/category" element={<> <Navbar/> <UserHome title="Browse"/><ChatBot/><Footer/> </>}/>
          <Route path='/login' element={ <Login/> }/>
          <Route path='/wallet' element={<><Navbar/><Wallet/> <Footer/> </>}/>
          <Route path='/product' element={<><Navbar/> <Product/><ChatBot/><Footer/> </>}/>
          <Route path='/AddProduct' element={<><Navbar/> <AddProduct/><ChatBot/><Footer/> </>}/>
          <Route path='/AboutUs' element={<><Navbar/> <AboutUs/><ChatBot/><Footer/> </>}/>
          <Route path='/ContactUs' element={<><Navbar/> <ContactUs/><Footer/> </>}/>
          <Route path='/CustomerProfile' element={<><Navbar/><CustomerProfile/><ChatBot/><Footer/></>}/>
          <Route path='/Admin' element={<><AdminNavbar/><AdminHome/></>}/>
          <Route path='/history' element={<><Navbar/><History/><ChatBot/></>}/>
          <Route path='/payment' element={<><Navbar/><Payment/><Footer/></>}/>

          <Route path='/chatlist' element={<><Navbar/><ChatList/></>}/>
          <Route path='/userchat' element={<><Navbar/><UserChat/></>}/>
<<<<<<< Updated upstream
          <Route path='/test' element={<><Navbar/><Test/></>}/>
=======
          <Route path='/pinauthentication' element={<><PinAuthentication/></>}/>
>>>>>>> Stashed changes

        </Routes>
      </div>
    </Router>
  );
}

export default App;
