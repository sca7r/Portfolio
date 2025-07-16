// src/pages/projects/MultiSensor.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function MultiSensor() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
    > 
      <div className="max-w-5xl mx-auto">
          <Link to="/" className="text-blue-500 underline mb-6 inline-block">
            ← Back to Home
          </Link>
        </div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-300 mb-6">
          Multi-Sensor Measurement System
        </h1>

        <p className="text-gray-800 dark:text-gray-200 text-lg mb-4">
          This project focuses on designing a multi-sensor fusion system that integrates LiDAR and camera inputs for robust perception capabilities in autonomous systems.
        </p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
            Highlights:
          </h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>Designed a sensor fusion architecture for object-level synchronization</li>
            <li>Preprocessed raw data using calibration and alignment techniques</li>
            <li>Developed deep learning-based object detection using LiDAR-Camera data</li>
            <li>Improved scene understanding with enhanced perception layers</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <img src="/images/sensor_fusion_1.jpg" alt="Sensor Fusion Setup" className="rounded-lg shadow-md" />
          <img src="/images/sensor_fusion_2.jpg" alt="Object Detection Output" className="rounded-lg shadow-md" />
        </div>

        
      </div>
    </motion.div>
  );
}

