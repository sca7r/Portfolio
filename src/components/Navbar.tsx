// src/components/Navbar.tsx
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-gray-900">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        My Portfolio
      </Link>
      <div className="space-x-4">
        <Link
          to="/contact"
          className={`${
            location.pathname === '/Contact' ? 'font-semibold underline' : 'text-blue-500'
          } hover:underline`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

