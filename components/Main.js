// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import useResource from '../hooks/useResource';

import Form from './Form';
import ReportTable from './ReportTable';
// import { changeCount } from '../redux/countSlice';
import { hours } from '../data.js';

function Main() {
  // const [reports, setReports] = useState([]);
  // const dispatch = useDispatch();

  // const updateReport = (formObj) => {
  //   let result = calculate(formObj);
  //   let newReports = [...reports, result];
  //   dispatch(changeCount(newReports.length));
  //   setReports(newReports);
  // };

  const { resources, loading } = useResource();
  console.log('🚀 ~ loading: ', loading);
  console.log('resources: ', resources);

  return (
    <div>
      <Form />
      <ReportTable hours={hours} sales={resources} />
    </div>
  );
}

export default Main;
