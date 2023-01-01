import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Technology from './views/Technology/Technology'
import About from './views/About/About';
import Home from './views/Home/Home';

function App() {
  return (
    <>
      <Router>
        <header>
        </header>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
