import './App.css';
import {Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={ <Main />}></Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
