import {
  Button,
  Image
} from '@nextui-org/react'
import React from 'react'
import { FaFacebook, FaTiktok, FaYoutube } from 'react-icons/fa'
import {
  openFacebookLink,
  openGoogleMapLink,
  openHibidLink,
  openTikTokLink,
  openYouTubeLink
} from '../utils'
import ccpdLogo from '../assets/ccpd-logo.jpg'
import { Link } from 'wouter'
import { SiGooglemaps } from "react-icons/si"

const NavFooter: React.FC = () => {
  const containerClass = 'mt-3 text-left mb-12 w-full p-3'
  const headerClass = 'font-bold text-xl mb-1 text-orange-400'
  const iconRowClass = 'flex gap-3 '

  const renderLogo = () => (
    <div className={containerClass}>
      <div className='inline-grid pt-6'>
        <Image
          width={500}
          src={ccpdLogo}
          alt="ccpdLogo"
          onClick={openHibidLink}
        />
      </div>
    </div>
  )

  const renderLinks = () => (
    <div className={containerClass}>
      <h3 className={headerClass}>Socials</h3>
      {/* <div className='inline-grid text-center mx-auto justify-center'>
      <Image
        className='shadow-2xl'
        width={100}
        src={ccpdLogo}
        alt="ccpdLogo"
        onClick={openHibidLink}
      />
    </div> */}
      <div className='gap-3 grid mt-3'>
        <div className={iconRowClass}>
          <Button
            isIconOnly
            variant="flat"
            className='bg-[#4267B2]'
            aria-label="Facebook"
            onClick={openFacebookLink}
          >
            <FaFacebook />
          </Button>
          <Button
            isIconOnly
            className='bg-[#4285F4]'
            variant='flat'
            aria-label="GoogleMap"
            onClick={openGoogleMapLink}
          >
            <SiGooglemaps />
          </Button>
        </div>
        <div className={iconRowClass}>
          <Button
            isIconOnly
            className='bg-[#FF0000]'
            variant='flat'
            aria-label="Youtube"
            onClick={openYouTubeLink}
          >
            <FaYoutube />
          </Button>
          <Button
            isIconOnly
            className='from-[#ff0050] to-[#00f2ea] bg-gradient-to-tr text-black'
            variant='flat'
            aria-label="Youtube"
            onClick={openTikTokLink}
          >
            <FaTiktok />
          </Button>
          <Button
            isIconOnly
            className='bg-[#FF0000]'
            variant='flat'
            aria-label="Xiaohongshu"
            onClick={undefined}
          >
            <img src='https://ik.imagekit.io/fa2tirjbx/xhs.png?updatedAt=1713648695901' />
          </Button>
        </div>
        <div className={iconRowClass}>
        </div>
      </div>
    </div>
  )

  const renderNavigation = () => (
    <div className={containerClass}>
      <h3 className={headerClass}>Navigation</h3>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/contact-us'>Warranty</Link></li>
      </ul>
    </div>
  )

  const renderAbout = () => (
    <div className={containerClass}>
      <h3 className={headerClass}>About</h3>
      <ul>
        <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
        <li><Link to='/shipping'>Shipping</Link></li>
      </ul>
    </div>
  )

  const renderBusinessHours = () => (
    <div className={containerClass + ' min-w-56'}>
      <h3 className={headerClass}>Business Hours</h3>
      <ul className='text-sm'>
        <li className='text-[#888]'>Tuesday - Saturday:</li>
        <li className='text-[#666]'>12pm - 6:30pm</li>
        <li className='text-[#888]'>Sunday & Monday & Holidays:</li>
        <li className='text-[#666]'>Closed</li>
      </ul>
    </div>
  )

  const renderContact = () => (
    <div className={containerClass + ' min-w-64'}>
      <h3 className={headerClass}>Contact</h3>
      <p className='text-[#aaa]'>CC Power Deals Inc.</p>
      <p className='text-[#666] text-sm'>
        240 Bartor Rd Unit #4
        <br />
        North York, ON M9M 2W6
        <br />
        +1 416-740-2333
      </p>
    </div>
  )

  return (
    <div className='stickToBottom p-12 mt-12 xl:px-[20%] md:px-[10%] sm:px-6'>
      <div className='sm:block md:block lg:flex xl:flex grid-cols-4 sm:grid-cols-1 gap-6 justify-between'>
        {renderLogo()}
        {renderLinks()}
        {renderNavigation()}
        {renderAbout()}
        {renderBusinessHours()}
        {renderContact()}
      </div>
      <hr className='border-[#333]' />
      <div className='grid text-center'>
        <p className='text-gray-400 mt-6'>©2024 CC Power Deals Inc. <br /> All Right Reserved</p>
      </div>
    </div>
  )
}

export default NavFooter