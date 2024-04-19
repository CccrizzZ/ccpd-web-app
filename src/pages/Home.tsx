import {
  Button,
  Image
} from '@nextui-org/react'
import ccpdLogo from '../assets/ccpd-logo.jpg'
import hibidLogo from '../assets/hibid.png'
import gmapLogo from '../assets/gmap.png'
import aucLogo from '../assets/2auc_1.jpg'
import aucLogo2 from '../assets/2auc_2.jpg'
import aucLogo3 from '../assets/2auc_3.jpg'
import React from 'react'
import { openGoogleMapLink, openHibidLink } from '../utils'
import { FaBox, FaShippingFast, FaWarehouse } from 'react-icons/fa'
import { Fa2, FaSquarePhone } from 'react-icons/fa6'
import forest_1 from '../assets/forest_1.jpg'


const Home: React.FC = () => {
  const innerDivStyle = 'min-w-64 p-6 justify-center grid text-center bg-[url(https://ik.imagekit.io/fa2tirjbx/sunset_forest?updatedAt=1713567505289)] bg-gray-500 bg-blend-multiply'//shadow-green-500/50 shadow-lg
  const contentStyle = 'text-orange-400'
  const renderTopBanner = () => (
    <div className='xl:px-[20%] sm:px-[10%] xl:flex sm:block mt-6 mb-6 text-white w-full'>
      <div className={innerDivStyle}>
        <div className={iconDivStyle}>
          <FaBox size={32} />
        </div>
        <p className={contentStyle}>
          Please read our description before bidding with us,
          <br />
          some of the policy have updated since website renovation.
        </p>
      </div>
      <div className={innerDivStyle}>
        <div className={iconDivStyle}>
          <Fa2 size={32} />
        </div>
        <p className={contentStyle}>
          We Are Currently Holding 2 Auctions Per Week
          <br />
        </p>
      </div>
      <div className={innerDivStyle}>
        <div className={iconDivStyle}>
          <FaBox size={32} />
        </div>
        <p className={contentStyle}>
          Please read our description before bidding with us,
          <br />
          some of the policy have updated since website renovation.
        </p>
      </div>
    </div>
  )

  const renderJumbotron = () => (
    <section className="bg-center bg-cover bg-no-repeat bg-[url('https://ik.imagekit.io/fa2tirjbx/IMG_20231014_143614.jpg?updatedAt=1713042627522')] bg-gray-700 bg-blend-multiply min-h-[200px] max-h-[800px]">
      <div className="px-4 pt-20 mx-auto max-w-screen-xl text-center">
        <div className='inline-grid'>
          {/* <Image
            id='breathing-panel'
            className='shadow-2xl mb-3'
            isBlurred
            width={200}
            src={ccpdLogo}
            alt="ccpdLogo"
            onClick={openHibidLink}
          /> */}
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Toronto Liquidation Auction Warehouse</h1>
        <p className="mb-3 text-lg font-bold text-orange-300 lg:text-xl sm:px-16 lg:px-48">Bid & Win Amazon Product</p>
        <p className="mb-3 text-lg font-normal text-orange-300 lg:text-xl sm:px-16 lg:px-48">Auction Currently Available on Hibid.com</p>
        <p className="mb-3 text-lg font-normal text-orange-300 lg:text-xl sm:px-16 lg:px-48">Amazon / AliExpress Pallets Wholesale Available</p>
        <p className="mb-3 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48" id='breathing-panel'>0% Buyer's Premium</p>
        <div className="grid gap-3 pb-32 pt-12 sm:flex-row sm:justify-center sm:space-y-0 text-center">
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
          {/* <Button
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
          </Button> */}
        </div>
      </div>
    </section>
  )

  const cardStyle = 'bg-[#333] p-4 rounded-lg m-3 grid shadow-green-500	shadow-lg'
  const iconDivStyle = 'grid text-center justify-center p-2'
  const iconColor = '#FDBA74'
  const renderInfoCol = () => (
    <div className='mt-3 grid sm:grid-cols-1 md:grid-cols-3 gap-4 max-w-fit md:px-[10%] sm:px-[10%] text-white text-center'>
      <div className={cardStyle}>
        <p className='text-2xl'>Pickup</p>
        <div className={iconDivStyle}>
          <FaWarehouse size={100} color={iconColor} />
        </div>
        <p>Please read shipping policy page for details, we have partner up with beavery.ca to fulfill the delivery of your goods.</p>
        <Button className='mt-3 mb-3 font-bold'>Book for Pickup</Button>
      </div>
      <div className={cardStyle}>
        <p className='text-2xl'>Shipping</p>
        <div className={iconDivStyle}>
          <FaShippingFast size={100} color={iconColor} />
        </div>
        <p>Please read shipping policy for details, we have partner up with beavery.ca to fulfill the delivery of your goods.</p>
        <Button className='mt-3 mb-3 font-bold'>Request a Shipment</Button>
      </div>
      <div className={cardStyle}>
        <p className='text-2xl'>Contact Us</p>
        <div className={iconDivStyle}>
          <FaSquarePhone size={100} color={iconColor} />
        </div>
        <p>Contact us through web form for question about returns, refund, problematic transaction and payment methods.</p>
        <Button className='mt-3 mb-3 font-bold'>Submit a Ticket</Button>
      </div>
    </div>
  )

  const renderAboutUsBox = () => (
    <div className='grid text-center w-full xl:px-96 text-xl mt-12 mb-12 bg-[#222] text-white p-6'>
      <div className='inline-grid text-center px-4 pt-3 mx-auto max-w-screen-xl'>
        <Image
          id='breathing-panel'
          className='shadow-2xl mb-12'
          isBlurred
          width={200}
          src={ccpdLogo}
          alt="ccpdLogo"
          onClick={openHibidLink}
        />
      </div>
      <video autoPlay muted loop>
        <source src='https://ik.imagekit.io/fa2tirjbx/aXG3VMHj.mp4?updatedAt=1713566538970' type='video/mp4' />
      </video>
      <p className='text-4xl mb-3'>About Us:</p>
      <p className='text-lg font-thin'>
        We are a liquidation warehouse based in Toronto, Ontario, Canada, founded in 2021.
        <br />
        We offer brand-new items, unclaimed products, and customer returns,
        <br />
        from popular online retailers such as Amazon, HomeDepot and AliExpress at a huge discount.
        <br />
        Come by our warehouse near HWY 401 and 400, you never know what treasures you might find!
      </p>
    </div>
  )

  return (
    <div>
      {renderTopBanner()}
      {renderJumbotron()}
      {renderAboutUsBox()}
      {renderInfoCol()}
    </div>
  )
}

export default Home