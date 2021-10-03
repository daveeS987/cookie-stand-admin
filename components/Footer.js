import Link from 'next/link';

function Footer() {
  return (
    <nav className='w-full px-8 bg-gray-200 h-36 sm:px-0 pin-b'>
      <div className='container flex justify-between py-5 mx-auto'>
        <label className='text-3xl font-bold text-gray-800'>
          8<span className='font-light'> Locations World Wide</span>
        </label>
      </div>
    </nav>
  );
}

export default Footer;
