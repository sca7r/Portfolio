// src/pages/About.tsx
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12 px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-10 text-center">Beyond Engineering</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-300 mb-4">Adventure & Adrenaline</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            When I'm not engineering systems, I'm exploring the world through adventure sports. I've gone skydiving, bungee jumping, and scuba diving. These adrenaline-pumping experiences sharpen my instincts and fuel my creativity.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <video controls className="rounded shadow-md">
              <source src="/videos/skydive.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <img src="/images/bungee.jpg" alt="Bungee Jump" className="rounded shadow-md" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-300 mb-4">Passions & Hobbies</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>🏃‍♂️ Trekking across mountain ranges</li>
            <li>⚽ Competing in football leagues (Kreis A-4 Klasse)</li>
            <li>📸 Capturing tech moments through photography</li>
            <li>🍳 Experimenting with Indian recipes</li>
            <li>🎮 Enjoying immersive VR driving simulators</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-300 mb-4">Moments Captured</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <img src="/images/trek1.jpg" alt="Trek" className="rounded shadow-md" />
            <img src="/images/football.jpg" alt="Football" className="rounded shadow-md" />
            <img src="/images/kitchen.jpg" alt="Cooking" className="rounded shadow-md" />
          </div>
        </section>
      </div>
    </motion.div>
  );
}

