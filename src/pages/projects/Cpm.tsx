// src/pages/projects/cpm.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Cpm() {
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
          CPM Integration
        </h1>

        <p className="text-gray-700 dark:text-gray-300 mb-6">
          The Project was about detecting the objects in vicinity of the ego vehicle and covert it into cooperative perception message forming a structure according to ETSI standards defined for CPM. Then CPM is converted into UDPRAW xml file and transmitted via a V2X device and received by a reciever and coverted into ROS CPM format and visualised in GUI
        </p>

     

        <h2 className="text-2xl font-arial text-black-600 dark:text-black-300 mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
          <li>V2X Communication for smart infrastructure interaction</li>
          <li>Real-time communication with other traffic participants</li>
          <li>detection of objects that are not visible directly</li>
          <li>V2X Cohda OBU -based signal transmission </li>
        </ul>
<div className="mb-6">
          <h2 className="text-2xl font-arial text-black-600 dark:text-black-400 mb-2">
             Tech Stack:
          </h2>
          <div className="flex flex-wrap gap-4">
            {['Nvidia', 'Jetson', 'Python', 'ROS2', 'Intel RealSense', 'Y-LiDAR', 'Cohda OBU', 'V2X Communication', 'SSD monilnet','CPM'].map((tech, idx) => (
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

