// src/pages/Home.tsx
import { motion } from 'framer-motion';
import MoreAboutMeButton from '../components/MoreAboutMeButton';

export default function Home() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 py-12 px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Intro Section */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-blue-700 dark:text-blue-400 mb-4">Harshawardhan Patil</h1>
          <h2 className="text-2xl text-gray-600 dark:text-gray-300">Mechanical Engineer | Autonomous Driving Specialist</h2>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
            Passionate about engineering innovative mobility solutions and driving the future of autonomous technologies.
          </p>
        </section>

        {/* About Me Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-300 mb-4">About Me</h3>
          <p className="text-gray-700 dark:text-gray-300">
            I'm a Master's student in Autonomous Driving at Hochschule Coburg and currently working on my Master's Thesis at Daimler AG. My core strengths lie in autonomous navigation, trajectory planning, and sensor fusion. I enjoy building intelligent vehicle systems that are safe, efficient, and scalable.
          </p>
        </section>
        <MoreAboutMeButton />

        {/* Projects Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-300 mb-4">Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">ADAPT – Autonomous Driving and Parking Technology</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                Smart infrastructure and autonomous robot for efficient parking using V2X communication.
              </p>
              <p className="text-sm text-blue-500">Jetson, LiDAR, V2X, Grid Maps</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Multi-Sensor Measurement System</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                Developed a sensor fusion system integrating LiDAR and camera for improved perception.
              </p>
              <p className="text-sm text-blue-500">Python, Deep Learning, ROS2</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Trajectory Planning</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                Implemented waypoint following and parking maneuvers with sensor-assisted path planning.
              </p>
              <p className="text-sm text-blue-500">SUMO, Carla, SLAM, ROS2</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">Autonomous Emergency Braking</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                Real-time braking system based on LiDAR scans and safety evaluation.
              </p>
              <p className="text-sm text-blue-500">Python, Sensor Fusion, Real-Time</p>
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

