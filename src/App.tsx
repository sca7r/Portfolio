// src/App.tsx
import Navbar from './components/Navbar';
import { HashRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';

export default function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}


