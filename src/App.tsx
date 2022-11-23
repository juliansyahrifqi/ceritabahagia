import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />

      <div className="px-4 sm:px-6 xl:px-0 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
