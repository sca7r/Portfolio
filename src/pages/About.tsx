// src/pages/About.tsx
import { motion } from 'framer-motion';
import DiveVideo from '../assets/skydive.mp4';
import FunVideo from '../assets/fun.mp4';
import DroneVideo from '../assets/drone.mp4';
import BungeeImage from '../assets/bungee.jpeg';
import FootballImage from '../assets/football.jpeg';
import SkydiveImage from '../assets/skydive.jpeg';
import DreamImage from '../assets/dreamcar.jpeg';
import RealImage from '../assets/realmadrid.jpeg';
import CrImage from '../assets/ronaldo.jpeg';
import ScubaImage from '../assets/scuba.jpeg';
import TrailImage from '../assets/trail.jpeg';
import P1Image from '../assets/p1.jpeg';
import P2Image from '../assets/p2.jpeg';
import P3Image from '../assets/p3.jpeg';
import P4Image from '../assets/p4.jpeg';
import { useState } from 'react';

export default function About() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-purple-900 dark:to-purple-400 py-12 px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-black dark:text-white mb-12 tracking-tight">
          Beyond Engineering: The Other Side of Me
        </h1>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-black dark:text-white mb-4">
            Adventure & Adrenaline
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Outside the professional life, I'm an Athlete an explorer driven by adrenaline. From diving into the clouds during skydives to plunging off bridges in bungee jumps and exploring marine life while scuba diving, I thrive on experiences that test my courage and deepen my creativity.
          </p>
          <div className="flex justify-center">
            <video
              src={DiveVideo}
              autoPlay
              muted
              loop
              playsInline
              className="rounded-2xl shadow-xl border-4 border-blue-100 dark:border-pink-300 max-w-3xl w-full"
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-black dark:text-white mb-4">
            Passions & Hobbies
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Life outside the work matters. Here’s where I find balance and inspiration:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-2">
            <li>Trekking rugged trails and grappling peaks</li>
            <li>Competing in Kreis A-4 football league matches</li>
            <li>Quick jogs and fitness challenges to stay sharp</li>
            <li>Experimenting with Indian culinary artistry</li>
            <li>Gaming deep into the night when strategy calls</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-black dark:text-white mb-6">
            Moments Captured: My Adventures in Frames
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[BungeeImage, FootballImage, CrImage, ScubaImage, DreamImage, RealImage, P1Image, P2Image, TrailImage, P3Image, P4Image].map((img, idx) => (
              <div key={idx} className="w-[200px]">
                <img
                  src={img}
                  alt={`Experience ${idx + 1}`}
                  onClick={() => setSelectedImage(img)}
                  className="cursor-pointer h-auto w-full object-cover rounded-xl shadow-md border-2 border-blue-100 dark:border-pink-300 transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
              <div className="relative max-w-[95vw] max-h-[95vh]">
                <button
                  className="absolute top-2 right-2 bg-white dark:bg-gray-900 text-black dark:text-white rounded-full p-2 shadow-lg hover:bg-red-600 hover:text-white"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close image"
                >
                  &times;
                </button>
                <img
                  src={selectedImage}
                  alt="Zoomed View"
                  className="rounded-xl border-4 border-blue-100 dark:border-pink-300 shadow-2xl w-full h-full object-contain"
                />
              </div>
            </div>
          )}
        </section>
      </div>
    </motion.div>
  );
}

