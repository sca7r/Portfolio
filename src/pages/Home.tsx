// src/pages/Home.tsx
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MoreAboutMeButton from '../components/MoreAboutMeButton';
import finalImage from '../assets/final.jpg';
import Media1Video from '../assets/Media1.mp4';

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
  { name: 'Python', category: 'Programming' },
  { name: 'C++', category: 'Programming' },
  { name: 'ROS2', category: 'Frameworks' },
  { name: 'PyTorch', category: 'Frameworks' },
  { name: 'TensorFlow', category: 'Frameworks' },
  { name: 'scikit-learn', category: 'Frameworks' },
  { name: 'SUMO', category: 'Simulation' },
  { name: 'Carla', category: 'Simulation' },
  { name: 'MATLAB/Simulink', category: 'Simulation' },
  { name: 'Cognex Vision', category: 'Tools' },
  { name: 'NVIDIA Jetson', category: 'Tools' },
  { name: 'Docker', category: 'Tools' },
  { name: 'Git', category: 'Tools' },
  { name: 'Linux', category: 'OS' },
  { name: 'Windows', category: 'OS' },
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
          



          <img
            src={finalImage}
            alt="Harshawardhan Patil"
            className="mt-10 mb-10 w-full max-w-6xl h-auto mx-auto shadow-lg border-4 border-blue-100 dark:border-blue-300 object-cover rounded-xl"
          />
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="text-left">
              <video
                src={Media1Video}
                autoPlay
                muted
                loop
                playsInline
                className="mt-10 mb-4 w-full max-w-md h-auto shadow-lg border-4 border-blue-100 dark:border-blue-300 object-cover rounded-xl"
              />
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                This video demonstrates the real-time navigation and perception capabilities of our autonomous system prototype in a test environment.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-300 mb-4">Core Skills</h3>
              <div className="grid grid-cols-1 gap-6">
                {['Programming', 'Frameworks', 'Tools', 'Simulation', 'OS'].map((category) => (
                  <div key={category}>
                    <h4 className="text-xl font-bold mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.filter(s => s.category === category).map(s => (
                        <span key={s.name} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Me */}
        <section className="mb-16">
          <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-300 mb-4">About Me</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Hi, I'm Harshawardhan
            <br />
            I'm a mechanical engineer turned autonomous systems enthusiast, building smarter, safer, and more efficient vehicles. Currently working on wiring optimization for zonal E/E architectures at Daimler AG, and diving deep into In-Vehicle communication, SIL and AUTOSAR.
            <br />
            When I'm not coding in Python or tuning deep learning models, you can find me prepping for the Ironman triathlon, trekking mountain trails, or chasing footballs in the German Kreis A-League. I'm a hands-on tinkerer who loves drones, cameras, and anything with an engine — from cars to fighter jets.
            <br />
            Fascinated by the blend of mechanics and intelligence, I aim to engineer systems that move with purpose. Always open to collaborate, learn, and build.
          </p>
        </section>

        <MoreAboutMeButton />

        {/* Projects */}
        <section className="mb-16">
          <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-300 mb-6">Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer hover:scale-[1.02] transition-transform"
                onClick={() => navigate(project.link)}
              >
                <h4 className="text-xl font-bold mb-1 text-blue-700 dark:text-blue-300">{project.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{project.summary}</p>
                <p className="text-sm text-blue-500 mb-2">{project.tech}</p>
              </div>
            ))}
          </div>
        </section>
        
               <section className="mb-16">
  <h2 className="text-3xl font-semibold text-blue-700 dark:text-blue-400 mb-6">Certifications & Language Skills</h2>
  <div className="flex flex-col md:flex-row justify-center items-start gap-10">
    <div className="flex-1">
      <h3 className="text-xl font-medium text-gray-700 dark:text-gray-200 mb-4">Certifications</h3>
      <ul className="list-disc list-inside text-left text-gray-600 dark:text-gray-300">
        <li>Certified ROS Developer – The Construct</li>
        <li>Deep Learning Specialization – Coursera</li>
        <li>Autonomous Driving Engineer Nanodegree – Udacity</li>
        <li>Advanced C++ Programming – Udemy</li>
        <li>Introduction to Self-Driving Cars – Coursera</li>
      </ul>
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-medium text-gray-700 dark:text-gray-200 mb-4">Language Skills</h3>
      <ul className="list-disc list-inside text-left text-gray-600 dark:text-gray-300">
        <li>English – Fluent (C2)</li>
        <li>German – Intermediate (A2–B1)</li>
        <li>Hindi – Native</li>
        <li>Marathi – Native</li>
      </ul>
    </div>
  </div>
</section>

        <section className="text-center mt-16">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            “Work hard, play harder.” — Life through my lens.
          </p>
        </section>
      </div>
    </motion.div>
  );
}

