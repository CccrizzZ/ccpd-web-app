import {
  Button,
  Image
} from '@nextui-org/react'
import ccpdLogo from '../assets/ccpd-logo.jpg'
import hibidLogo from '../assets/hibid.png'
import gmapLogo from '../assets/gmap.png'
import React from 'react'
import { openGoogleMapLink, openHibidLink } from '../utils'
import { FaShippingFast, FaMapPin, FaPhone, FaMailchimp } from 'react-icons/fa'
import { FaLetterboxd, FaSquareLetterboxd } from 'react-icons/fa6'

// Bid & Win Amazon Product - CC Power Deals Auction - Liquidation Discount Warehouse
// Visit Our Auction House In North York. Browse Our Catalog of Items at Auction Online. Amazon /Walmat/ Home depot/ Ali Express
const Home: React.FC = () => {

  const renderJumbotron = () => (
    <section className="bg-center bg-cover bg-no-repeat bg-[url('https://ik.imagekit.io/fa2tirjbx/IMG_20231014_143614.jpg?updatedAt=1713042627522')] bg-gray-700 bg-blend-multiply min-h-[500px]">
      <div className="px-4 pt-20 mx-auto max-w-screen-xl text-center">
        <div className='inline-grid'>
          <Image
            id='breathing-panel'
            className='shadow-2xl'
            isBlurred
            width={140}
            src={ccpdLogo}
            alt="ccpdLogo"
            onClick={openHibidLink}
          />
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Toronto Liquidation Auction Warehouse</h1>
        <p className="mb-3 text-lg font-bold text-orange-300 lg:text-xl sm:px-16 lg:px-48">Bid & Win Amazon Product</p>
        <p className="mb-3 text-lg font-normal text-orange-300 lg:text-xl sm:px-16 lg:px-48">Auction Currently Available on Hibid.com</p>
        <p className="mb-3 text-lg font-normal text-orange-300 lg:text-xl sm:px-16 lg:px-48">Amazon / AliExpress Pallets Wholesale Available</p>
        <p className="mb-3 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48" id='breathing-panel'>0% Buyer's Premium</p>
        <div className="flex gap-3 pb-32 pt-12 sm:flex-row sm:justify-center sm:space-y-0">
          <Button
            size='lg'
            variant='shadow'
            color='success'
            className='text-white block h-fit bg-[mediumseagreen] min-h-32'
            onClick={openHibidLink}
          >
            <p className='italic lg:text-2xl sm:text-2xl'>Visite Our Hibid Page</p>
            <div className='grid text-center justify-center p-2'>
              <Image
                isBlurred
                width={250}
                src={hibidLogo}
                alt="hibidLogo"
              />
            </div>
          </Button>
          <Button
            size='lg'
            variant='shadow'
            color='primary'
            className='text-white h-fit bg-[dodgerblue] min-h-32 text-center grid'
            onClick={openGoogleMapLink}
          >
            <p className='mt-3 lg:text-2xl sm:text-xl  italic'>
              Find Us on
              <br />
              Google Map
            </p>
            <div className='grid text-center justify-center p-2'>
              <Image
                isBlurred
                width={60}
                src={gmapLogo}
                alt="gmapLogo"
              />
            </div>
          </Button>
        </div>
      </div>
    </section>
  )

  const renderInfoCol = () => (
    <div className='mt-3 grid sm:grid-cols-1 md:grid-cols-3 gap-4 max-w-fit md:px-[10%] sm:px-[10%] text-white'>
      <div className="bg-[#333] p-4 rounded-lg m-3">
        <h2>Pickup</h2>
        <FaShippingFast size={64} color='#f06' />
        <p>Please read shipping policy for details, we have partner up with beavery.ca to fulfill the delivery of your goods.</p>
        <Button>Beavery.ca</Button>
      </div>
      <div className="bg-[#333] p-4 rounded-lg m-3">
        <h2>Shipping Policies</h2>
        <FaShippingFast size={64} color='#f06' />
        <p>Please read shipping policy for details, we have partner up with beavery.ca to fulfill the delivery of your goods.</p>
        <Button>Beavery.ca</Button>
      </div>
      <div className="bg-[#333] p-4 rounded-lg m-3">
        <h2>Contact Us</h2>
        <FaSquareLetterboxd size={64} color='#f06' />
        <p>Contact us through web form for question about returns, refund, problematic transaction and payment methods.</p>
        <Button>Beavery.ca</Button>
      </div>
    </div>
  )

  return (
    <div>
      {renderJumbotron()}
      {renderInfoCol()}
    </div>
  )
}

export default Home