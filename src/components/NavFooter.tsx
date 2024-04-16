import {
  Button,
  Image
} from '@nextui-org/react'
import React from 'react'
import { FaFacebook, FaMapPin } from 'react-icons/fa'
import { openUrlInNewTab } from '../utils'
import ccpdLogo from '../assets/ccpd-logo.jpg'
import { FaMapLocation, FaMapLocationDot } from 'react-icons/fa6'

const NavFooter = () => {
  const facebookUrl = ''
  const highbidUrl = ''
  const googleMapUrl = 'https://maps.app.goo.gl/o1zz8YvLX1JdhMqv7'

  return (
    <div className='stickToBottom w-[100vw] p-12'>
      {/* <Image
        width={60}
        className='p-2 m-auto'
        alt="NextUI hero Image"
        src={ccpdLogo}
      /> */}
      <div>
        <p className='text-[#aaa]'>258 Inc.</p>
        <p className='text-[#666]'>Previously CC Power Deals</p>
      </div>
      <div className='flex gap-6 mt-3'>
        <Button
          isIconOnly
          color="primary"
          variant="flat"
          aria-label="Facebook"
          onClick={() => openUrlInNewTab(facebookUrl)}
        >
          <FaFacebook />
        </Button>
        <Button
          isIconOnly
          color="primary"
          variant='flat'
          aria-label="GoogleMap"
          onClick={() => openUrlInNewTab(googleMapUrl)}
        >
          <FaMapPin />
        </Button>
      </div>
    </div>
  )
}

export default NavFooter