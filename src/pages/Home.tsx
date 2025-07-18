// src/pages/Home.tsx
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MoreAboutMeButton from '../components/MoreAboutMeButton';
import finalImage from '../assets/final.jpg';
import Media1Video from '../assets/Media1.mp4';
import SkydiveImage from '../assets/skydive.jpeg';

const projects = [
  {
    title: 'ADAPT – Autonomous Driving and Parking Technology',
    summary: 'Developed an Autonomous driving car and a smart infrastructure for parking. Designed test cases, in-vehicle validation, and integrated V2X communication and custom SSD-Mobilenet',
    tech: 'Jetson, LiDAR, V2X, Grid Maps, Sensor fusion, Deep learning, Reinforcement learning, SLAM, ROS2, Trajectory planing, Environment model',
    link: '/projects/adapt',
  },
  {
    title: 'Multi-Sensor Measurement System',
    summary: 'Designed a multi-sensor fusion architecture with LiDAR and camera synchronization. Built preprocessing pipeline for object detection and used DL models for perception enhancement.',
    tech: 'Python, LiDAR, Stereo Camera, ROS2, Kalman filter',
    link: '/projects/multisensor',
  },
  {
    title: 'Trajectory Planning',
    summary: 'Built waypoint-based trajectory planning integrated with LiDAR and camera sensors. Autonomously drive the car to the target point and park with steering maneuvers .',
    tech: 'A* algorithm, Vehicle dynamics, Carla, SLAM, ROS2',
    link: '/projects/trajectory',
  },
  {
    title: 'Autonomous Emergency Braking',
    summary: 'Designed a braking controller using Python and LiDAR-based obstacle detection. Real-time logging and evaluation implemented for validation and test scenarios.',
    tech: 'Python, Sensor Fusion, Real-Time, Quality-of-service',
    link: '/projects/aeb',
  },
];

const skills = [
  'Python', 'C++', 'ROS2', 'PyTorch', 'TensorFlow', 'Scikit-Learn', 'AUTOSAR',
  'In-vehicle Networks', 'Embedded Systems', 'SIL', 'ISO26262', 'Deep Learning',
  'Reinforcement Learning', 'Transfer Learning', 'SUMO', 'Carla', 'MATLAB/Simulink',
  'Cognex Vision', 'NVIDIA Jetson', 'Path Planning', 'SLAM', 'Trajectory Planning',
  'Sensor Fusion', 'Kalman Filter', 'GIT', 'Docker', 'Linux', 'Windows',
  'V-Model', 'Agile (Scrum)'
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 py-12 px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Intro */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-blue-700 dark:text-blue-400 mb-4">Harshawardhan Patil</h1>
          <h2 className="text-2xl text-gray-600 dark:text-gray-300">Mechanical Engineer | Autonomous Systems engineer</h2>
          <p className="mt-6 mb-20 text-lg text-gray-700 dark:text-gray-300">
            Passionate about engineering innovative mobility solutions and driving the future of autonomous technologies.
          </p>
         </section>
          
          
          <section className="mb-16">
          <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-300 mb-4">About Me</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Hi, I'm Harshawardhan<br />
            I'm a mechanical engineer turned autonomous systems enthusiast, building smarter, safer, and more efficient vehicles. Currently working on wiring optimization for zonal E/E architectures at Daimler AG, and diving deep into In-Vehicle communication, SIL and AUTOSAR.<br />
            When I'm not coding in Python or tuning deep learning models, you can find me prepping for the Ironman triathlon, trekking mountain trails, or chasing footballs in the German Kreis A-League. I'm a hands-on tinkerer who loves drones, cameras, and anything with an engine — from cars to fighter jets.<br />
            Fascinated by the blend of mechanics and intelligence, I aim to engineer systems that move with purpose. Always open to collaborate, learn, and build.
          </p>
        </section>
        

          <img
            src={finalImage}
            alt="Harshawardhan Patil"
            className="mt-10 mb-10 w-full max-w-6xl h-auto mx-auto shadow-lg border-4 border-blue-100 dark:border-blue-300 object-cover rounded-xl"
          />
        

<section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left - Video */}
            <div className="flex flex-col items-start">
              <video
                src={Media1Video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full max-w-md h-auto shadow-lg border-4 border-blue-100 dark:border-blue-300 object-cover rounded-xl"
              />
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                This video demonstrates the real-time navigation and perception capabilities of our autonomous system prototype in a test environment.
              </p>
            </div>

            {/* Right - Top: Image, Bottom: Skills */}
            <div className="flex flex-col gap-6">
              <img
                src={SkydiveImage}
                alt="Skydiving Experience"
                className="w-full h-auto rounded-xl shadow-lg border-4 border-blue-100 dark:border-blue-300 object-cover"
              />
              <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-300 mb-2">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-blue-200 to-blue-400 dark:from-gray-600 dark:to-gray-700 text-blue-900 dark:text-blue-100 shadow hover:scale-105 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>


        

        <MoreAboutMeButton />

        {/* Projects */}
        <section className="mb-16">
          <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-300 mb-6 mt-20">Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer hover:scale-[1.02] transition-transform border border-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900"
                onClick={() => navigate(project.link)}
              >
                <h4 className="text-xl font-bold mb-1 text-blue-700 dark:text-blue-300 underline">{project.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{project.summary}</p>
                <p className="text-sm text-blue-500 mb-2 italic">{project.tech}</p>
                <p className="text-sm text-blue-600 dark:text-blue-300 mt-2">Click to explore more →</p>
              </div>
            ))}
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-blue-700 dark:text-blue-400 mb-6 mt-20">Certifications & Language Skills</h2>
            <div className="flex flex-col md:flex-row justify-center items-start gap-10">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-gray-700 dark:text-gray-200 mb-4">Certifications</h3>
                <ul className="list-disc list-inside text-left text-gray-600 dark:text-gray-300">
                  <li>Deep Learning with TensorFlow - IBM</li>
                  <li>Linux Professional Certification - LinkedIn Learning</li>
                  <li>Basics of PLC - GTTC</li>
                  <li>Designing in PTC Creo - GTTC</li>
                  <li>Advanced automobile design - Tata Technologies</li>
                  <li>Intellectual property rights - NPTEL</li>
                </ul>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium text-gray-700 dark:text-gray-200 mb-4">Language Skills</h3>
                <ul className="list-disc list-inside text-left text-gray-600 dark:text-gray-300">
                  <li>English – Fluent (C2)</li>
                  <li>German – Intermediate (A2 progressing towards B1)</li>
                  <li>Hindi – Native</li>
                  <li>Marathi – Native</li>
                </ul>
              </div>
            </div>
          </section>
        </section>

        <section className="text-center mt-16">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            “Work hard, play harder!”<br />
            "Designed with love by Harsh ‪‪❤︎‬"
          </p>
        </section>
      </div>
    </motion.div>
  );
}

