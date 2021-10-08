import useResource from '../hooks/useResource';
import Form from './Form';
import ReportTable from './ReportTable';
import { hours } from '../data.js';

function Main() {
  const { resources, loading } = useResource();

  return (
    <div>
      <Form />
      <ReportTable hours={hours} sales={resources} />
    </div>
  );
}

export default Main;
