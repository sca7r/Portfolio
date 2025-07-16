// src/components/MoreAboutMeButton.tsx
import { Link } from 'react-router-dom';

export default function MoreAboutMeButton() {
  return (
    <div className="text-center mt-8">
      <Link
        to="/about"
        className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-md transition duration-300"
      >
        More About Me
      </Link>
    </div>
  );
}
