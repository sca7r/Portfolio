// src/pages/ProjectDetails.tsx
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const projectData: { [key: string]: { title: string; details: string; tech: string; image?: string } } = {
  adapt: {
    title: 'ADAPT – Autonomous Driving and Parking Technology',
    details:
      'Developed an Autonomous driving car robot and smart infrastructure for parking. Includes V2X, Jetson, Grid maps, and SSD-Mobilenet. Conducted real-world validations and integrated path-following algorithms.',
    tech: 'Jetson, LiDAR, V2X, Grid Maps, SSD-Mobilenet, Deep Learning',
    image: '/images/adapt.jpg',
  },
  multisensor: {
    title: 'Multi-Sensor Measurement System',
    details:
      'Designed multi-sensor fusion architecture. Integrated LiDAR, camera, and preprocessing pipeline. Applied deep learning models for perception refinement.',
    tech: 'Python, ROS2, Deep Learning, LiDAR, SLAM',
    image: '/images/multisensor.jpg',
  },
  trajectory: {
    title: 'Trajectory Planning',
    details:
      'Built trajectory planning module with obstacle avoidance. Used SUMO & Carla to simulate parking and path planning algorithms.',
    tech: 'SUMO, Carla, SLAM, ROS2',
    image: '/images/trajectory.jpg',
  },
  braking: {
    title: 'Autonomous Emergency Braking',
    details:
      'Implemented emergency braking system using LiDAR data. Real-time collision detection with safety validation.',
    tech: 'Python, LiDAR, Real-time Systems',
    image: '/images/braking.jpg',
  },
};

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectData[id ?? ''];

  if (!project) return <p className="text-center text-red-500">Project not found.</p>;

  return (
    <motion.div
      className="min-h-screen py-16 px-6 bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-700 dark:text-blue-300 mb-6">
          {project.title}
        </h2>
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="rounded-lg mb-6 shadow-md w-full"
          />
        )}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{project.details}</p>
        <p className="text-sm text-blue-500">Technologies Used: {project.tech}</p>
      </div>
    </motion.div>
  );
}

