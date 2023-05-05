import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Footer from './pages/Shared/Footer';
import Navbar from './pages/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="about" element={<About />} />
       <Route path="services" element={<Services />} />
       <Route path="blogs" element={<Blogs />} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
