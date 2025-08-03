// src/pages/projects/MultiSensor.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScansImage from '../../assets/scans.png';
import OdVideo from '../../assets/od.mp4';

export default function MultiSensor() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-purple-900 dark:to-purple-400 py-12 px-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
    > 
      <div className="max-w-5xl mx-auto">
          <Link to="/" className="text-black-500 underline mb-6 inline-block">
            ← Back to Home
          </Link>
        </div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-arial text-black-700 dark:text-black-300 mb-6">
          Multi-Sensor Fusion System
        </h1>

        <p className="text-gray-800 dark:text-gray-200 text-lg mb-4">
          This project focuses on designing a multi-sensor fusion system that integrates LiDAR and camera inputs for robust perception capabilities in autonomous systems.
        </p>

        <div className="mb-6">
          <h2 className="text-2xl font-arial text-black-600 dark:text-black-400 mb-2">
            Key Highlights:
          </h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>Designed a sensor fusion architecture for object-level synchronization</li>
            <li>Preprocessed raw data using calibration and alignment techniques</li>
            <li>Developed deep learning-based object detection using LiDAR-Camera data</li>
            <li>Improved scene understanding with enhanced perception layers</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-arial text-black-600 dark:text-black-400 mb-2">
            Tech Stack:
          </h2>
          <div className="flex flex-wrap gap-4">
            {['Python', 'ROS2', 'LiDAR', 'Camera', 'Deep Learning', 'Object Detection'].map((tech, idx) => (
              <span
                key={idx}
                className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
  {/* Video Item */}
  <div className="flex justify-center">
    <video
      src={OdVideo}
      autoPlay
      muted
      loop
      playsInline
      className="transform rotate-0 w-full h-80 object-cover rounded-xl shadow-lg border-4 border-blue-100 dark:border-pink-300"
    />
  </div>

  {/* Image 1 */}
  <div className="flex justify-center">
    <img
      src={ScansImage}
      alt="Training"
      className="w-full h-80 object-cover rounded-xl shadow-lg border-4 border-blue-100 dark:border-pink-300"
    />
  </div>
 
</div>


    <br />  

          <div className="font-arial text-sm text-black-500 dark:text-black-400">Created by Harshawardhan Patil</div>
      </div>
    </motion.div>
  );
}

