// src/pages/Trajectory.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DigImage from '../../assets/diagram.png';

export default function Trajectory() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-purple-900 dark:to-purple-400 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="text-black-500 underline mb-6 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-arial text-black-700 dark:text-black-300 mb-4">
          Trajectory Planning
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Designed and implemented a waypoint-following algorithm for autonomous parking maneuvers. The system supports dynamic obstacle updates and real-time planning. Integrated LiDAR and camera data enabled enhanced safety and perception. Carla and SUMO simulators were used for testing in realistic urban scenarios.
        </p>



        <h3 className="text-2xl font-arial text-black-600 dark:text-black-300 mt-8 mb-4">
          Key Highlights:
        </h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>Waypoint-based motion planning and parking maneuvers</li>
          <li>Obstacle detection with LiDAR & Camera fusion</li>
          <li>Dynamic re-routing based on SLAM updates</li>
          <li>Simulation environments: Carla & SUMO</li>
        </ul>

         <div className="mb-6">
          <h2 className="text-2xl font-arial text-black-600 dark:text-black-400 mb-2">
            Tech Stack:
          </h2>
          <div className="flex flex-wrap gap-4">
            {['SUMO', 'Carla', 'SLAM', 'ROS2', 'Python'].map((tech, idx) => (
              <span
                key={idx}
                className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1  gap-6">
  
       {/* Image 4 */}
  <div className="flex justify-center">
    <img
      src={DigImage}
      alt="Experience 4"
      className="w-full h-90 object-cover rounded-xl shadow-lg border-4 border-blue-100 dark:border-pink-300"
    />

  
  </div>
     <ul className="list-disc list-inside text-gray-700 dark:text-gray-900 space-y-2">
          <li>Steering maneuvers calculations for trajectory .</li>
           </ul>
</div>
   


    <br />   

          <div className="font-arial text-sm text-black-500 dark:text-black-400">Created by Harshawardhan Patil</div>
      </div>
    </motion.div>
  );
}

