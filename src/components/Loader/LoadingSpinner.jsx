import { FidgetSpinner } from 'react-loader-spinner';

const LoadingSpinner = () => (
  <div className='text-center grid place-content-center'>
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

export default LoadingSpinner;