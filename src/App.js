import './App.css';
import {Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import MobileNav from './components/MobileNav';
import Component1 from './components/Component1';

function App() {
  return (
    <>
    <MobileNav />
    <Nav />
    <Routes>
      <Route path='/' element={ <Main />}></Route>
      {/* <Route path='/reservations' element={<Reservations />}></Route> */}
      <Route path='/bookingpage' element={<BookingPage />}></Route>
      <Route path='/about' element={<Component1 />}></Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
