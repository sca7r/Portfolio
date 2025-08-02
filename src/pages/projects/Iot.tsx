// src/pages/Iot.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Iot() {
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
          Wireless sensor integrated device for concrete curing process
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          A smart, cheap, durable device to monitor the concrete curing process saving time and water resources in building any concrete structure, Using Arduino Nano, pH sensors, WIFI module, Battery with wireless charging capability and ultrasonic sensors. Helping engineers to also detect cracks internally which can avoid the concrete structure from coming down. 
        </p>

 

        <h3 className="text-2xl font-arial text-black-600 dark:text-black-300 mt-8 mb-4">
          Key Highlights:
        </h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>Durable Device that can be placed during the pouring process of concrete </li>
          <li>Wireless charging capability  </li>
          <li>Alert system to indicate cracks internally in the structure</li>
          <li>Wireless and remote control of the device from users mobile or desktop</li>
          
        </ul>

       <div className="mb-6">
          <h2 className="text-2xl font-arial text-black-600 dark:text-black-400 mb-2">
            Tech Stack:
          </h2>
          <div className="flex flex-wrap gap-4">
            {['Embedded C', 'Arduino Nano', 'Wire less charging', 'sensors','Durability analysis via FEM','WIFI','API server'].map((tech, idx) => (
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

