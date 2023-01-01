import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './views/Home';
import Home from './views/Home/Home';   // app won't run unless i add an extra /Home ¯\_(ツ)_/¯
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <header>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
