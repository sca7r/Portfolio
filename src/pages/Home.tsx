// src/pages/Home.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MoreAboutMeButton from '../components/MoreAboutMeButton';

const projects = [
  {
    title: 'ADAPT – Autonomous Driving and Parking Technology',
    summary: 'Smart infrastructure and autonomous robot for efficient parking using V2X communication.',
    tech: 'Jetson, LiDAR, V2X, Grid Maps',
    details: 'Developed an Autonomous driving car robot and a smart infrastructure for parking. Designed test cases, in-vehicle validation, and integrated V2X communication and custom SSD-Mobilenet.',
    link: '/projects/adapt',
  },
  {
    title: 'Multi-Sensor Measurement System',
    summary: 'Developed a sensor fusion system integrating LiDAR and camera for improved perception.',
    tech: 'Python, Deep Learning, ROS2',
    details: 'Designed a multi-sensor fusion architecture with LiDAR and camera synchronization. Built preprocessing pipeline for object detection and used DL models for perception enhancement.',
    link: '/projects/multisensor',
  },
  {
    title: 'Trajectory Planning',
    summary: 'Waypoint following and parking maneuvers with sensor-assisted path planning.',
    tech: 'SUMO, Carla, SLAM, ROS2',
    details: 'Built waypoint-based trajectory planning integrated with LiDAR and camera sensors. Used Carla + SUMO for simulation and developed SLAM-based updates for dynamic obstacles.',
    link: '/projects/trajectory',
  },
  {
    title: 'Autonomous Emergency Braking',
    summary: 'Real-time braking system based on LiDAR scans and safety evaluation.',
    tech: 'Python, Sensor Fusion, Real-Time',
    details: 'Designed a braking controller using Python and LiDAR-based obstacle detection. Real-time logging and evaluation implemented for validation and test scenarios.',
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
      <div className="max-w-5xl mx-auto">
        {/* Intro */}
        <section className="mb-16 text-center">
          <img
            src="/harsh-profile.jpg"
            alt="Harshawardhan Patil"
            className="w-full max-w-md h-auto mx-auto mb-6 shadow-md border-4 border-blue-500 dark:border-blue-300 object-cover"
          />
          <h1 className="text-5xl font-bold text-blue-700 dark:text-blue-400 mb-4">Harshawardhan Patil</h1>
          <h2 className="text-2xl text-gray-600 dark:text-gray-300">Mechanical Engineer | Autonomous Driving Specialist</h2>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
            Passionate about engineering innovative mobility solutions and driving the future of autonomous technologies.
          </p>
        </section>

        {/* About Me */}
        <section className="mb-16">
          <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-300 mb-4">About Me</h3>
          <p className="text-gray-700 dark:text-gray-300">
            I'm a Master's student in Autonomous Driving at Hochschule Coburg and currently working on my Master's Thesis at Daimler AG. My core strengths lie in autonomous navigation, trajectory planning, and sensor fusion.
          </p>
        </section>
        <MoreAboutMeButton />

        {/* Skills Grid */}
        <section className="mb-16">
          <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-300 mb-6">Core Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-100">{skill.name}</p>
                <p className="text-xs text-blue-500">{skill.category}</p>
              </div>
            ))}
          </div>
        </section>

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

        <section className="text-center mt-16">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            “Work hard, play harder.” — Life through my lens.
          </p>
        </section>
      </div>
    </motion.div>
  );
}

