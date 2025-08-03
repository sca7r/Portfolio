// src/pages/Ev.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import UniImage from '../../assets/uni.jpeg';
import PitchVideo from '../../assets/pitch.mp4';


export default function Ev() {
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
          Universal electric vehicle conversion solution for accelerating the EV adoption
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          The Universal electric vehicle conversion solution is compatible with all types of vehicles.The main principle standard here is,the existing IC engine and its components like the transmission fuel tank etc, will be replaced with all the electronic components required for an EV, i.e A ford Mache9000 motor will be held in as the main heart of the vehicle and the battery cells will be used to power the motor and rest stock system such as rotating shaft 12V powernet steering mechanism will be used which will help in reducing overall scrap and increasing sustainability.
        </p>

 

        <h3 className="text-2xl font-arial text-black-600 dark:text-black-300 mt-8 mb-4">
          Key Highlights:
        </h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>Huge impact on reducing Scrap and a sustainable solution for the car owner</li>
          <li>CAD model designed on solidworks </li>
          <li>Swapable batteries and rechargeable via solar panel and smart charging stations</li>
          
        </ul>

       <div className="mb-6">
          <h2 className="text-2xl font-arial text-black-600 dark:text-black-400 mb-2">
            Tech Stack:
          </h2>
          <div className="flex flex-wrap gap-4">
            {['Solidworks', 'CAD modeling', 'wireless charging'].map((tech, idx) => (
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
      src={PitchVideo}
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
      src={UniImage}
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

