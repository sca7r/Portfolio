// src/pages/Projects.tsx
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'ADAPT – Autonomous Driving and Parking Technology',
    description:
      'Developed an autonomous car robot with smart parking infrastructure. Integrated V2X, real-time control, and AI-based obstacle detection.',
    technologies: 'Jetson, Arduino, RealSense, LiDAR, Deep Learning, V2X, Grid Maps',
  },
  {
    title: 'Multi-Sensor Measurement System for Perception',
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
    title: 'Autonomous Emergency Braking (AEB)',
    description:
      'Real-time emergency braking using LiDAR-based object detection with data logging and evaluation.',
    technologies: 'Python, Sensor Fusion, LiDAR, Real-time Systems',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 dark:from-gray-900 dark:to-gray-800 p-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-700 dark:text-blue-400 mb-10">Projects</h2>

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

