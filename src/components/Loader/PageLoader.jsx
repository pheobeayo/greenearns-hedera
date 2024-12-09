import { FidgetSpinner } from 'react-loader-spinner';
import './style.css';

const PageLoader = () => {
  return (
    <div className='fixed w-screen h-screen top-0 left-0 bg-[rgba(255,255,255,0.8)] z-[55] flex items-center justify-center'>
      <FidgetSpinner
        height={80}
        width={80}
        color='#3F9AAE'
        wrapperStyle={{}}
        wrapperClass='fidget-spinner-wrapper'
        visible={true}
        ariaLabel='fidget-spinner-loading'
        secondaryColor='#0C3B45'
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default PageLoader;