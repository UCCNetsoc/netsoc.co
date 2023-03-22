import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './views/About/About';
import Header from './components/Header';
import Home from './views/Home/Home';
import Gaming from './views/Gaming/Gaming';
import Esports from './views/Esports/Esports';
import Technology from './views/Technology/Technology';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <div style={{ minHeight: "74vh"}}>
        <Router>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/tech" element={<Technology />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/gaming" element={<Gaming />} />
            <Route path="/esports" element={<Gaming />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
