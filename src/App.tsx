import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

import Home from './views/Home/Home';   // app won't run unless i add an extra /Home ¯\_(ツ)_/¯
import About from './views/Home/About';
import Gaming from './views/Home/Gaming';
import Technology from './views/Home/Technology';

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
