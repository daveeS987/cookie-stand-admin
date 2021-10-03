import Link from 'next/link';

function Header() {
  return (
    <nav className='sticky w-full h-auto px-8 bg-gray-200 sm:px-0'>
      <div className='container flex justify-between py-5 mx-auto'>
        <label className='text-3xl font-light text-gray-800'>
          Cookie<span className='font-bold'>Stand</span>
        </label>
        <ul className='flex items-center text-gray-800'>
          <li className='mr-6 font-semibold text-gray-800 uppercase transition border border-gray-800 rounded-md hover:text-gray-200 hover:bg-blue-600'>
            <Link href='/overview'>
              <a className='block px-4 py-1'>Overview</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
