import { Routes, Route } from 'react-router-dom';  // Remove BrowserRouter!
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Thanks from './pages/Thanks.jsx';
import Game from './pages/Game.jsx';
import End from './pages/End.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/thanks" element={<Thanks />} />
      <Route path="/game" element={<Game />} />
      <Route path="/end" element={<End />} />
    </Routes>
  );
}