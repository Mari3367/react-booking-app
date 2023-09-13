import './App.css';
import {Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <>
    <MobileNav />
    <Nav />
    <Routes>
      <Route path='/' element={ <Main />}></Route>
      {/* <Route path='/reservations' element={<Reservations />}></Route> */}
      <Route path='/reservations' element={<BookingForm />}></Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
