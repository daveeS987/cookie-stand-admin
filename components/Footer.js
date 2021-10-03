import Link from 'next/link';
import { useSelector } from 'react-redux';

function Footer() {
  const count = useSelector((state) => state.count.value);
  return (
    <nav className='w-full h-32 px-8 bg-gray-200 sm:px-0 pin-b'>
      <div className='container flex justify-between py-5 mx-auto'>
        <label className='text-3xl font-bold text-gray-800'>
          {count}
          <span className='font-light'> Locations World Wide</span>
        </label>
      </div>
    </nav>
  );
}

export default Footer;
