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
    </Routes>
    <Footer />
    </>
  );
}

export default App;
