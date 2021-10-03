import Link from 'next/link';

function Header() {
  return (
    <nav className='sticky w-full h-auto px-8 bg-gray-200 sm:px-0'>
      <div className='container flex justify-between py-5 mx-auto'>
        <label className='text-3xl font-light text-gray-800'>
          <Link href='/'>
            <a class='hover:text-blue-600 transition'>
              CookieStand<span className='font-bold'>Admin</span>
            </a>
          </Link>
        </label>
        <ul className='flex items-center text-gray-800'>
          <li class='uppercase font-semibold mr-6'>
            <Link href='/overview'>
              <a class='hover:text-blue-600 transition'>Overview</a>
            </Link>
          </li>
          <li className='mr-6 font-semibold text-gray-800 uppercase transition border border-gray-800 rounded-md hover:text-gray-200 hover:bg-gray-600'>
            <Link href='/'>
              <a className='block px-4 py-1'>Login</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
