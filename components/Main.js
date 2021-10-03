import { useState } from 'react';

import Form from './Form';
import ReportTable from './ReportTable';
import { hours } from '../data.js';

function Main() {
  const [reports, setReports] = useState([]);

  const updateReport = (formObj) => {
    let result = calculate(formObj);
    let newReports = [...reports, result];
    setReports(newReports);
  };

  const calculate = (obj) => {
    const result = {
      location: obj.location,
      hourly_sale: generateCookiePerHour(obj.minCustomers, obj.maxCustomers, obj.avgCookies),
    };
    return result;
  };

  function generateRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function generateCookiePerHour(minCustomers, maxCustomers, avgCookies) {
    let cookieSaleEveryHour = [];
    for (var i = 0; i < 14; i++) {
      cookieSaleEveryHour.push(Math.round(generateRandomNum(minCustomers, maxCustomers) * avgCookies));
    }
    return cookieSaleEveryHour;
  }

  return (
    <div>
      <Form updateReport={updateReport} />
      <ReportTable hours={hours} reports={reports} />
    </div>
  );
}

export default Main;
