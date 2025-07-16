// src/components/Navbar.tsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-gray-900">
      <div className="text-2xl font-bold text-blue-600">Harshawardhan</div>
      <div className="space-x-4">
        <Link to="/contact" className="text-blue-500 hover:underline">
          Contact
        </Link>
      </div>
    </nav>
  );
}

