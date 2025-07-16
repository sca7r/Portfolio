// src/pages/Contact.tsx
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12 px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-10">Get in Touch</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          I'm always open to exciting opportunities, collaborations, or just a great conversation about technology, sports, or life.
        </p>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
          <p className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">📧 harsh23patil96@gmail.com</p>
          <p className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">📞 +49 176 32793881</p>

          <div className="flex justify-center gap-6 mt-6">
            <a href="https://www.linkedin.com/in/harshawardhanpatil/" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">
              LinkedIn
            </a>
            <a href="https://github.com/ha7sh" target="_blank" className="text-gray-800 dark:text-gray-200 hover:underline">
              GitHub
            </a>
            <a href="/resume/Harshawardhan_Patil_Resume.pdf" download className="text-green-700 dark:text-green-400 hover:underline">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

