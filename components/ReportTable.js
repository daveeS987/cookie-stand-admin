import React from 'react';

function ReportTable({ hours, sales }) {
  if (sales && sales.length === 0) {
    return (
      <h2 className="text-xl text-center text-gray-200">
        No Cookie Stand Available
      </h2>
    );
  }

  return (
    <table className="w-2/3 mx-auto my-4 text-center">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-4 text-left">Location</th>
          {hours.map((hour) => {
            return (
              <th className="px-2" key={Math.random()}>
                {hour}
              </th>
            );
          })}
          <th className="px-4">Totals</th>
        </tr>
      </thead>
      <tbody>
        {sales &&
          sales.map((store) => {
            return (
              <tr
                className="odd:bg-gray-400 even:bg-gray-300"
                key={Math.random()}
              >
                <td className="p-2 text-left">{store.location}</td>
                {store.hourly_sales.map((sale) => {
                  return <td>{sale}</td>;
                })}
                <td>
                  {store.hourly_sales.reduce((acc, cur) => {
                    return acc + cur;
                  }, 0)}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default ReportTable;
