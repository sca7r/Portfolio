// src/pages/projects/Adapt.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Adapt() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-purple-900 dark:to-purple-400 py-12 px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-black-500 underline mb-6 inline-block">← Back to Home</Link>

        <h1 className="text-4xl font-arial  text-black-700 dark:text-black-300 mt-6 mb-4">
          ADAPT – Autonomous Driving and Parking Technology
        </h1>

        <p className="text-gray-700 dark:text-gray-300 mb-6">
          ADAPT is a smart mobility solution combining autonomous robotic vehicles with intelligent parking infrastructure. It enables seamless parking with minimal human intervention.
        </p>

        <img
          src="/projects/adapt-demo.jpg"
          alt="ADAPT Project"
          className="w-full rounded-lg shadow-lg mb-6"
        />

        <h2 className="text-2xl font-arial text-black-600 dark:text-black-300 mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
          <li>V2X Communication for smart infrastructure interaction</li>
          <li>Real-time trajectory planning with obstacle avoidance</li>
          <li>SSD-Mobilenet based object detection (88% mAP)</li>
          <li>Jetson-based edge inference and control</li>
        </ul>
<div className="mb-6">
          <h2 className="text-2xl font-arial text-black-600 dark:text-black-400 mb-2">
             Tech Stack:
          </h2>
          <div className="flex flex-wrap gap-4">
            {['Nvidia', 'Jetson', 'Python', 'ROS2', 'Intel RealSense', 'Y-LiDAR', 'SSD-Mobilenet', 'V2X Communication', 'Grid Mapping'].map((tech, idx) => (
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

        <div className="font-arial text-sm text-black-500 dark:text-black-400">Created by Harshawardhan Patil</div>
      </div>
    </motion.div>
  );
}

