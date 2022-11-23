import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />

      <div className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fitur" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
