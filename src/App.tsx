import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { 
  Sparkles, 
  Shirt, 
  Palette, 
  Users, 
  ChevronDown,
  ArrowRight,
  Mail,
  LogIn
} from 'lucide-react';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white">
            <Sparkles className="w-6 h-6" />
            <span className="font-semibold">DiFashion</span>
          </Link>
          <Link 
            to="/login"
            className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors"
          >
            <LogIn className="w-5 h-5" />
            <span>Login</span>
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;