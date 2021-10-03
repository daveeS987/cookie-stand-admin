import React from 'react';

function Form() {
  return (
    <div className='p-4 mx-24 my-24 bg-gray-400 rounded-md'>
      <h2 className='text-center'>Create Cookie Stand</h2>
      <div>
        <div>
          <h2>Location</h2>
          <input type='text' placeholder='Enter New Location Here' />
        </div>
        <div class='flex flex-row'>
          <div>
            <h2>Minimum Customer Per Hour</h2>
            <input type='text' />
          </div>
          <div>
            <h2>Maximum Customer Per Hour</h2>
            <input type='text' />
          </div>
          <div>
            <h2>Average Cookies Per Sale</h2>
            <input type='text' />
          </div>
          <div>
            <button>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
