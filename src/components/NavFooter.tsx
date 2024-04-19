import {
  Button,
  Image,
} from '@nextui-org/react'
import React from 'react'
import { FaFacebook, FaMapPin } from 'react-icons/fa'
import { openFacebookLink, openGoogleMapLink } from '../utils'

const NavFooter: React.FC = () => {
  return (
    <div className='stickToBottom p-12 mt-12 xl:px-[20%] md:px-[10%] sm:px-0'>
      <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4 max-w-fit'>
        <div>
          <div>
            <p className='text-[#aaa]'>CC Power Deals Inc.</p>
            <p className='text-[#666]'>Est. 2021</p>
            <p className='text-[#666]'>
              240 Bartor Rd Unit #4
              <br />
              North York, ON M9M 2W6
            </p>
            {/* <p className='text-[#aaa]'>258 Inc.</p> */}
            {/* <p className='text-[#666]'>Previously CC Power Deals</p> */}
          </div>
          <div className='flex gap-6 mt-3'>
            <Button
              isIconOnly
              color="primary"
              variant="flat"
              aria-label="Facebook"
              onClick={openFacebookLink}
            >
              <FaFacebook />
            </Button>
            <Button
              isIconOnly
              color="primary"
              variant='flat'
              aria-label="GoogleMap"
              onClick={openGoogleMapLink}
            >
              <FaMapPin />
            </Button>
          </div>
        </div>
        <div className='col-start-20 col-end-24'>

        </div>
      </div>
    </div>
  )
}

export default NavFooter