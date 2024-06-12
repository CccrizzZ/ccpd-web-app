import { Oval } from 'react-loader-spinner'
import { useAtom } from 'jotai';
import { showLoadSpinner } from '../atom';

const LoadSpinner = () => {
  const [isLoading] = useAtom(showLoadSpinner);

  if (isLoading) {
    return (
      <div className='fixed h-[100vh] w-[100%] z-[1500] bg-[#333] opacity-80 justify-center grid'>
        <div className='w-32 h-32 m-auto justify-center grid'>
          <Oval
            visible={true}
            height="120"
            width="120"
            color="#ff4d00"
            secondaryColor="#999"
          />
          <p className='m-auto mt-3'>
            Loading...
          </p>
        </div>
      </div>
    )
  }
}
export default LoadSpinner