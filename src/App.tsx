import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './views/About/About';
import Header from './components/Header';
import Home from './views/Home/Home';

{/*
import Technology from './views/Technology/Technology';
import Gaming from './views/Gaming/Gaming';
import Esports from './views/Esports/Esports'; */}


function App() {
  return (
    <>
      <Router>
        <header/>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
      {/* <Route path="/technology" element={<Technology />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/esports" element={<Esports />} />    */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
