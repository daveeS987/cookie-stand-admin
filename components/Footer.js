import useResource from '../hooks/useResource';

function Footer() {
  const { resources } = useResource();
  return (
    <nav className="w-full h-32 px-8 bg-gray-200 sm:px-0 pin-b">
      <div className="container flex justify-between py-5 mx-auto">
        <label className="text-3xl font-bold text-gray-800">
          {resources ? resources.length : 0}
          <span className="font-light"> Locations World Wide</span>
        </label>
      </div>
    </nav>
  );
}

export default Footer;
