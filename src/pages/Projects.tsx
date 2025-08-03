// src/pages/Projects.tsx
import ProjectCard from '../components/ProjectCard';
import AiVideo from '../assets/Ai.mp4';
import SkydiveImg from '../assets/skydive.jpeg';

const projects = [
  {
    title: 'ADAPT – Autonomous Driving and Parking Technology',
    description:
      'Developed an autonomous car robot with smart parking infrastructure. Integrated V2X, real-time control, and AI-based obstacle detection.',
    technologies: 'Jetson, Arduino, RealSense, LiDAR, Deep Learning, V2X, Grid Maps',
  },
  {
    title: 'Multi-Sensor Fusion System for Perception',
    description:
      'Designed a fusion system combining LiDAR and camera data for improved object-level scene understanding.',
    technologies: 'ROS2, Python, LiDAR, Camera, Deep Learning, Data Sync',
  },
  {
    title: 'Trajectory Planning for Autonomous Vehicles',
    description:
      'Implemented waypoint-based trajectory planner with obstacle avoidance using simulated and real sensor data.',
    technologies: 'ROS2, Carla, SUMO, LiDAR, Python, Pathfinding, SLAM',
  },
  {
    title: 'Object detection with a SSD Mobilnet using transfer learning',
    description:
      'A transfer learning based SSD Mobilnet model capable of recognizing several classes of objects which are integral to the autonomous driving context ',
    technologies: 'Python, Intel RealSense, SSD Mobilnet, Transfer Learning, NVIDIA Jetson',
  },
  {
    title: 'Autonomous Emergency Braking (AEB)',
    description:
      'Real-time emergency braking using LiDAR-based object detection with data logging and evaluation.',
    technologies: 'Python, Sensor Fusion, LiDAR, Real-time Systems',
  },
  {
    title: 'CPM Integration in V2X communication',
    description:
      'Real-time communication of CPM for V2X communication according to ETSI standards.',
    technologies: 'ETSI standards, LiDAR, Real-Time, V2X, SSD-Mobilnet, wireless communication',
  },
  {
    title: 'Universal electric vehicle conversion solution for accelerating the EV adoption',
    description:
      'A concept with a 3D model for Universal electric vehicle conversion increasing sustainability and reducing scrap waste.',
    technologies: 'Solidworks,CAD modelling, Systematic research, Wireless charging',
  },
  {
    title: 'Design of Electric utility vehicle (EUV)',
    description:
      'A design model of a Electric utility vehicle (EUV) with microcontroller acting as a master-slave combo for control, Solar charging capabilities with smart battery management system.',
    technologies: 'Solidworks, CAD modeling, Solar charging, Vehicle dynamics, HMI, Simulation, Microcontroller'
  },
  {
    title: 'Wireless sensor integrated device for concrete curing process',
    description:
      'A device used to monitor the curing process of concrete in concrete structure with alert system for detection of cracks internally to avoid collapsing of the structure ',
    technologies: 'Embedded C, Arduino Nano, Wire less charging, sensors, Durability analysis via FEM, WIFI, API server'
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 dark:from-gray-900 dark:to-gray-800 p-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-700 dark:text-blue-400 mb-10">Projects</h2>

        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <video
            src={AiVideo}
            autoPlay
            muted
            loop
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <img
            src={SkydiveImg}
            alt="Skydive"
            className="w-full md:w-1/3 mt-6 md:mt-0 md:ml-6 rounded-lg shadow-lg object-cover"
          />
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="transform hover:scale-[1.02] transition duration-300 ease-in-out"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

