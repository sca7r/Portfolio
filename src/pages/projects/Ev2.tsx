// src/pages/Ev2.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BlockImage from '../../assets/block.jpeg';
import BrakeImage from '../../assets/brake.jpeg';
import ChasisImage from '../../assets/chasis.jpeg';
import SteeringImage from '../../assets/steering.jpeg';
import WheelImage from '../../assets/wheel.jpeg';
export default function Ev2() {
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
          Design of Electric utility vehicle (EUV)
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          The project involved modeling simulating and performing analysis of the Electric Utility Vehicle (EUV). Analysis is done on all the major components to optimize the vehicle performance and reduce complexity and manufacturing costs. All the calculations were done manually and considered at severe working conditions. Strength was the basic consideration throughout the design. Provided on board solar-powered charging facility with charge protection system.
        </p>

 

        <h3 className="text-2xl font-arial text-black-600 dark:text-black-300 mt-8 mb-4">
          Key Highlights:
        </h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>Simple design for an EUV for logistics</li>
          <li>Solar charging capability  </li>
          <li>Alert system to indicate battery usage with powerful battery management system</li>
          <li>High quality and industrial grade components utilized</li>
          
        </ul>

       <div className="mb-6">
          <h2 className="text-2xl font-arial text-black-600 dark:text-black-400 mb-2">
            Tech Stack:
          </h2>
          <div className="flex flex-wrap gap-4">
            {['Solidworks', 'CAD modeling', 'Solar charging', 'Vehicle dynamics','HMI','Simulation','Microcontroller'].map((tech, idx) => (
              <span
                key={idx}
                className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
  {[BlockImage, BrakeImage, ChasisImage, WheelImage, SteeringImage].map((img, idx) => (
    <div key={idx} className="flex justify-center items-center">
      <img
        src={img}
        alt={`Experience ${idx + 1}`}
        className="h-auto w-full max-w-xs object-contain rounded-xl shadow-lg border-4 border-blue-100 dark:border-pink-300"
      />
    </div>
  ))}
</div>

   


    <br />   

          <div className="font-arial text-sm text-black-500 dark:text-black-400">Created by Harshawardhan Patil</div>
      </div>
     
    </motion.div>
  );
}

