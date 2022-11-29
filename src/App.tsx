import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Portofolio from './pages/Portofolio';

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />

      <div className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portofolio" element={<Portofolio />} />
        </Routes>
      </div>
      
      <Footer />
    </div>
  )
}

export default App
