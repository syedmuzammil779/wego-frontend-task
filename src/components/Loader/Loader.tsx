import { Circles } from 'react-loader-spinner';
import './Loader.scss';

const Loader = () => {
  return (
    <div className="loading-screen">
      <Circles
        height="100"
        width="100"
        color="#ffc700"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
