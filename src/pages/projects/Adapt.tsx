// src/pages/projects/Adapt.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import VizImage from '../../assets/visualisation.jpg';
import ArchiImage from '../../assets/archi.jpg';
import RqtImage from '../../assets/rqt.png';
import CarImage from '../../assets/car.jpeg';
import ParkingVideo from '../../assets/parking.mp4';
import ProductVideo from '../../assets/product.mp4';

export default function Adapt() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

        <h1 className="text-4xl font-arial text-black-700 dark:text-black-300 mt-6 mb-4">
          ADAPT – Autonomous Driving and Parking Technology
        </h1>

        <p className="text-gray-700 dark:text-gray-300 mb-6">
          ADAPT is a smart mobility solution combining autonomous robotic vehicles with intelligent parking infrastructure. It enables seamless parking with minimal human intervention.<br /><br />
          Parking Autonomously to the Nearest Feasible Parking Spot<br />
          Main Actors: Ego Vehicle, Infrastructure<br />
          Preconditions:<br />
          Infrastructure monitors parking spots in the vicinity.<br />
          User is at their destination.<br /><br />
          Success Guarantee: EV parked at the selected spot according to the user preferences.<br />
          Steps:<br />
          - User starts the process by selecting desired preferences on the VI.<br />
          - EV initiates communication with infrastructure for parking spots list.<br />
          - EV receives available spot data from infrastructure.<br />
          - EV sends confirmation to infrastructure about the chosen spot.<br />
          - EV selects best route to the parking spot.<br />
          - EV drives autonomously and parks at the spot.<br />
          - User can live track his EV using the Mobile Interface<br />
        </p>

        <h2 className="text-2xl font-arial text-black-600 dark:text-black-300 mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
          <li>V2X Communication for smart infrastructure interaction</li>
          <li>Real-time trajectory planning with obstacle avoidance</li>
          <li>SSD-Mobilenet based object detection (80% mAP)</li>
          <li>Jetson-based edge inference and control</li>
        </ul>

        <div className="mb-6">
          <h2 className="text-2xl font-arial text-black-600 dark:text-black-400 mb-2">Tech Stack:</h2>
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

        <div className="flex justify-center">
          <video
            src={ProductVideo}
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover rounded-xl shadow-lg border-4 border-blue-100 dark:border-pink-300"
          />
        </div>

        <br /><br />

        <div className="flex justify-center">
          <video
            src={ParkingVideo}
            autoPlay
            muted
            loop
            playsInline
            className="transform rotate-0 w-60 h-60 object-cover rounded-xl shadow-lg border-4 border-blue-100 dark:border-pink-300"
          />
        </div>

        <br /><br />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
          {[VizImage, ArchiImage, RqtImage, CarImage].map((img, idx) => {
            
            return (
              <div key={idx} className="flex justify-center items-center">
                
                <img
                  src={img}
                  alt={`Experience ${idx + 1}`}
                  onClick={() => setSelectedImage(img)}
                  className={`h-auto w-full max-w-xs object-contain rounded-xl shadow-lg border-4 border-blue-100 dark:border-pink-300 transition-transform duration-300 hover:scale-105 cursor-pointer `}
                />
              </div>
            );
          })}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="relative">
              <button
                className="absolute top-2 right-2 bg-white text-black rounded-full px-3 py-1 text-lg shadow-lg"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
              <img
                src={selectedImage}
                alt="Modal View"
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl border-4 border-blue-100 dark:border-pink-300"
              />
            </div>
          </div>
        )}

        <br />
        <div className="font-arial text-sm text-black-500 dark:text-black-400">
          Created by Harshawardhan Patil
        </div>
      </div>
    </motion.div>
  );
}

