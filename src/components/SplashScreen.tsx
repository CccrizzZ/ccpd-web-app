import React from 'react'
import { Image } from '@nextui-org/react'
import { openHibidLink } from '../utils'
import ccpdLogo from '../assets/ccpd-logo.jpg'
import { ScaleLoader } from 'react-spinners'

type SplashScreenProps = {
  displaySplash: boolean
}

const SplashScreen: React.FC<SplashScreenProps> = (props: SplashScreenProps) => {
  if (props.displaySplash) {
    return (
      <div className='absolute h-[100vh] w-[100vw] bg-slate-800 z-[2000] grid justify-center align-middle top-0 select-none'>
        <div className='block justify-center gap-3 text-center'>
          <Image
            className='floating-box mt-[50%]'
            width={200}
            src={ccpdLogo}
            alt="ccpdLogo"
            onClick={openHibidLink}
          />
          <ScaleLoader
            className='mt-32'
            width={32}
            height={64}
            color='mediumseagreen'
          />
        </div>
      </div>
    )
  } else {
    return <></>
  }
}

export default SplashScreen