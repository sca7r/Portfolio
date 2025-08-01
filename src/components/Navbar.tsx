// src/components/Navbar.tsx
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="flex justify-between items-center px-8 py-3 bg-gradient-to-b from-white to-blue-50 dark:from-purple-100 dark:to-purple-900 ">
    
      <Link to="/" className={`${
            location.pathname === '/' ? 'font-bold ' : 'text-black-800'
          } hover:underline`}>
        Home
      </Link>
     

        
      <div className="space-x-4">
        <Link
          to="/contact"
          className={`${
            location.pathname === '/Contact' ? 'font-bold ' : 'text-black-800 '
          } hover:underline`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

