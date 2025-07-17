// src/components/MoreAboutMeButton.tsx
import { Link } from 'react-router-dom';

export default function MoreAboutMeButton() {
  return (
    <div className="text-center mt-8 group">
      <Link
        to="/about"
        className="inline-flex items-center gap-2 px-6 py-3 text-white bg-blue-600 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg hover:scale-105"
      >
        More About Me
        <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
      </Link>
    </div>
  );
}

