// src/pages/Aeb.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Aeb() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="text-blue-500 underline mb-6 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-300 mb-4">
          Automatic Emergency Braking
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Implemented emergency braking system using LiDAR data. Real-time collision detection with safety validation.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <img
            src="/Aeb.png"
            alt="Trajectory Simulation"
            className="rounded-lg shadow-md"
          />
          <img
            src="/Aeb2.png"
            alt="Trajectory Visualization"
            className="rounded-lg shadow-md"
          />
        </div>

        <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-300 mt-8 mb-4">
          Key Highlights:
        </h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>Waypoint-based motion planning and parking maneuvers</li>
          <li>Obstacle detection with LiDAR & Camera fusion</li>
          <li>Dynamic re-routing based on SLAM updates</li>
          <li>Simulation environments: Carla & SUMO</li>
        </ul>

        <h3 className="text-xl font-semibold text-blue-500 mt-6 mb-2">Tech Stack:</h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">SUMO</span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Carla</span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">SLAM</span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">ROS2</span>
        </div>
      </div>
    </motion.div>
  );
}

