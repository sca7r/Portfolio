import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AiVideo from '../../assets/Ai.mp4';
import TrainingImage from '../../assets/training.jpeg';
import MapImage from '../../assets/map.png';


export default function Od() {
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
          Object detection with a SSD Mobilnet using transfer learning
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          The project involved trained SSD Mobilnet model and ROS2 components for object detection in a model city environment. The model has been fine-tuned on a dataset representative of a controlled urban landscape, with the goal of accurately identifying key elements that are crucial for autonomous navigation. The model has been trained to recognize several classes of objects which are integral to the autonomous driving context. <br /><br />These classes, annotated in the dataset, include:
          <br />
          Person: Individuals dummies in the model city.<br />
          traffic_light: Signalling devices positioned at road intersections, pedestrian crossings, and other locations to control flows of traffic.<br />
          potted plant: Trees, shrubs, and other plant within the model city<br />
          car: Cars, trucks, and other modes of transportation moving or stationary within the model city.<br />
          <br />
          Each class has been annotated with a unique color code for visual differentiation in the detection process. 
        </p>

        <h3 className="text-2xl font-arial text-black-600 dark:text-black-300 mt-8 mb-4">
          Key Highlights:
        </h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>Data Capture: We collected images from our model city using the Intel Realsense Camera.</li>
          <li>Annotation: Utilizing the Roboflow tool, we annotated the dataset with bounding boxes around objects of interest across the aforementioned classes. </li>
          <li>Model Training: We trained our model using NVIDIA Jetson and DetecNet architectures to optimize for prediction precision based on the pre-trained model.</li>
          <li>ROS2 Integration: The trained model was then implemented within a ROS2 environment to serve as a real-time object detection component.</li><br />
        </ul>

        <div className="mb-6">
          <h2 className="text-2xl font-arial text-black-600 dark:text-black-400 mb-2">
            Tech Stack:
          </h2>
          <div className="flex flex-wrap gap-4">
            {['Python', 'Intel RealSense', 'SSD Mobilnet', 'Transfer Learning','NVIDIA Jetson'].map((tech, idx) => (
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
      src={AiVideo}
      autoPlay
      muted
      loop
      playsInline
      className="transform rotate-180 w-full h-80 object-cover rounded-xl shadow-lg border-4 border-blue-100 dark:border-pink-300"
    />
  </div>

  {/* Image 1 */}
  <div className="flex justify-center">
    <img
      src={TrainingImage}
      alt="Training"
      className="w-full h-80 object-cover rounded-xl shadow-lg border-4 border-blue-100 dark:border-pink-300"
    />
  </div>

  {/* Image 2 */}
  <div className="flex justify-center">
    <img
      src={MapImage}
      alt="Experience 2"
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

