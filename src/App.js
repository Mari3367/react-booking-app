import './App.css';
import {Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import ConfirmedBooking from './components/ConfirmedBooking';
import Booking from './components/Booking';
import About from './components/About';
import Menu from './components/Menu';
import Salads from './components/Salads';
import Dishes from './components/Dishes';
import Wines from './components/Wines';
import OrderOnline from './components/OrderOnline';

function App() {
  return (
    <>
    <MobileNav />
    <Nav />
    <Routes>
      <Route path='/' element={ <Main />}></Route>
      <Route path='/reservations' element={<Booking />}></Route>
      <Route path='/confirmed' element={<ConfirmedBooking />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/menu' element={<Menu />}></Route>
      <Route path='/menu/salads' element={<Salads />}></Route>
      <Route path='/menu/dishes' element={<Dishes />}></Route>
      <Route path='/menu/wines' element={<Wines />}></Route>
      <Route path='/order' element={<OrderOnline />}></Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
