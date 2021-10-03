import React from 'react';

function Form() {
  return (
    <div className='w-2/3 p-8 px-16 mx-auto my-16 bg-gray-800 border-2 border-gray-400 rounded-md'>
      <div className='my-4'>
        <h2 className='text-3xl italic font-light tracking-wider text-center text-gray-200'>Create Cookie Stand</h2>
      </div>
      <div className='flex mt-8'>
        <h2 className='mr-4 text-lg text-gray-200'>Location:</h2>
        <input type='text' placeholder='Enter New Location Here' className='flex-grow' />
      </div>
      <div className='flex flex-wrap justify-between gap-8 mt-8 justify-items-center'>
        <div className='flex-grow'>
          <h2 className='text-gray-200'>Minimum Customer Per Hour</h2>
          <input type='text' className='w-full' />
        </div>
        <div className='flex-grow'>
          <h2 className='text-gray-200'>Maximum Customer Per Hour</h2>
          <input type='text' className='w-full' />
        </div>
        <div className='flex-grow'>
          <h2 className='text-gray-200'>Average Cookies Per Sale</h2>
          <input type='text' className='w-full' />
        </div>
        <div className='flex-grow'>
          <button className='w-full p-2 px-8 mx-4 text-gray-200 border-2 border-gray-200 rounded-md'>Create</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
