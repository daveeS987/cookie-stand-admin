import Link from 'next/link';
import { useAuth } from '../contexts/auth';

function Header() {
  const { user, logout } = useAuth();

  return (
    <nav className="sticky w-full h-auto px-8 bg-gray-200 sm:px-0">
      <div className="container flex justify-between py-5 mx-auto">
        <label className="text-3xl font-light text-gray-800">
          <Link href="/">
            <a className="transition hover:text-blue-600">
              CookieStand<span className="font-bold">Admin</span>
            </a>
          </Link>
        </label>
        <ul className="flex items-center text-gray-800">
          <li className="mr-6 font-semibold uppercase">
            <Link href="/overview">
              <a className="transition hover:text-blue-600">Overview</a>
            </Link>
          </li>
          {user && (
            <li className="mr-6 font-semibold text-gray-800 uppercase transition border border-gray-800 rounded-md hover:text-gray-200 hover:bg-gray-600">
              <a className="block px-4 py-1" onClick={logout}>
                Logout
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
