// src/pages/projects/cpm.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TestImage from '../../assets/test.jpeg';
import VImage from '../../assets/v.png';
import BlkImage from '../../assets/blk.jpeg';


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

<div className="grid grid-cols-1  gap-6">
  

  {/* Image 1 */}
  <div className="flex justify-center">
    <img
      src={TestImage}
      alt="Training"
      className="w-full h-90 object-cover rounded-xl shadow-lg border-4 border-blue-100 dark:border-pink-300"
    />
   <p className="px-8 text-center text-black-700 dark:text-gray-900 mt-10">
                Live testing at Kronach, Germany.
              </p>
  </div>
  
<br /> 
  {/* Image 2 */}
  <div className="flex justify-center">
    <img
      src={BlkImage}
      alt="Experience 2"
      className="w-full h-90 object-cover rounded-xl shadow-lg border-4 border-blue-100 dark:border-pink-300"
    />
    <p className=" text-center text-black-700 dark:text-gray-900 mt-10">
                Flow chart for CPM integration.
              </p>
  </div>
</div>
  <br /> 
    {/* Image 3 */}
  <div className="flex justify-center">
    <img
      src={VImage}
      alt="Experience 3"
      className="w-full h-70 object-cover rounded-xl shadow-lg border-4 border-blue-100 dark:border-pink-300"
    />
       <p className="px-8 text-center text-black-700 dark:text-gray-900 mt-10">
                CPM output.
              </p>
  </div>


   


    <br />  

        <div className="font-arial text-sm text-black-500 dark:text-black-400">Created by Harshawardhan Patil</div>
      </div>
    </motion.div>
  );
}

