// src/components/AnimatedRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import ProjectDetails from '../pages/ProjectDetails';
import Adapt from '../pages/projects/Adapt';
import MultiSensor from '../pages/projects/MultiSensor';
import Trajectory from '../pages/projects/Trajectory';
import Aeb from '../pages/projects/Aeb';
import Contact from '../pages/Contact';
export default function AnimatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
      <Route path="/projects/adapt" element={<Adapt />} />
      <Route path="/projects/multisensor" element={<MultiSensor />} />
      <Route path="/projects/trajectory" element={<Trajectory />} />
      <Route path="/projects/aeb" element={<Aeb />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}





