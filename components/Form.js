import { useState } from 'react';
import useResource from '../hooks/useResource';

function Form() {
  const [formItems, setFormItems] = useState({});
  const { createResource } = useResource();

  const handleChange = (e) => {
    const newFormItems = {
      ...formItems,
      [e.target.name]: e.target.value,
    };
    setFormItems(newFormItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createResource(formItems);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-2/3 p-4 px-16 mx-auto my-10 bg-gray-800 border-2 border-gray-400 rounded-md"
    >
      <div className="my-4">
        <h2 className="text-3xl italic font-light tracking-wider text-center text-gray-200">
          Create Cookie Stand
        </h2>
      </div>
      <div className="flex flex-wrap items-center mt-8">
        <h2 className="mr-2 text-lg text-gray-200">Location:</h2>
        <input
          name="location"
          type="text"
          placeholder="Enter New Location Here"
          className="flex-grow p-2 m-2"
          onChange={handleChange}
        />
        <button className="px-10 py-2 m-2 text-gray-200 border-2 border-gray-200 rounded-md">
          Create
        </button>
      </div>
      <div className="flex flex-wrap justify-between gap-8 mt-8 text-center justify-items-center">
        <div className="flex-grow">
          <h2 className="text-gray-300">Minimum Customer Per Hour</h2>
          <input
            name="minimum_customers_per_hour"
            type="number"
            className="w-full"
            onChange={handleChange}
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-300">Maximum Customer Per Hour</h2>
          <input
            name="maximum_customers_per_hour"
            type="number"
            className="w-full"
            onChange={handleChange}
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-300">Average Cookies Per Sale</h2>
          <input
            name="average_cookies_per_sale"
            type="number"
            className="w-full"
            onChange={handleChange}
          />
        </div>
      </div>
    </form>
  );
}

export default Form;
