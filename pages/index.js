import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm';
import Main from '../components/Main';
import { useAuth } from '../contexts/auth';

export default function Home() {
  /*
  we can grab user from authContext

  if user is logged in
      show Main
  if user is not logged in
      show loginForm
  */

  const { user } = useAuth();

  return (
    <>
      <Layout>{user ? <Main /> : <LoginForm />}</Layout>
    </>
  );
}
