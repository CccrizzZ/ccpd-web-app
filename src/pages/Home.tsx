import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image
} from '@nextui-org/react'
import aucLogo from '../assets/button_logo.jpg'
import React, { useEffect, useState } from 'react'
import { openHibidLink, openUrlInNewTab } from '../utils'
import {
  FaArrowDown,
  FaArrowUp,
  FaPhone,
  FaShippingFast,
  FaWarehouse,
  FaExclamationTriangle,
  FaPhoneSquareAlt,
  FaDiceTwo
} from 'react-icons/fa'
import forest_1 from '../assets/forest_1.jpg'
import ReactPlayer from 'react-player'
import { Link } from 'wouter'
import './Home.css'
import SplashScreen from '../components/SplashScreen'
import GoogleReviewsPanel from '../components/GoogleReviewsPanel'
import { ContentInfo } from '../Types'
// import Marquee from 'react-fast-marquee'

type HomeProps = {
  canSplash: boolean
  setCanSplash: (can: boolean) => void
  contentArr: ContentInfo[]
}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const [videoMuted, setVideoMuted] = useState<boolean>(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    setTimeout(() => {
      setVideoMuted(false)
      // console.log('can splash:' + props.canSplash)
      props.setCanSplash(false)
    }, 3000)
  }, [])

  const renderImportantNotice = () => (
    <div className='xl:w-[55%] lg:w-[61.8%] sm:x-[80%] w-[80%] bg-slate-800 text-center m-auto p-3 rounded-xl'>
      <p className='text-xl text-orange-500'>Important Notice</p>
      <div className='font-light'>
        Pick up items must be collected within <span className='text-orange-500 font-bold'>FIVE (5)</span> days with no exceptions.
        <br />
        Failure to collect items within <span className='text-orange-500 font-bold'>FIVE (5) days</span>, after notification via email or phone, if there is no response to our emails or calls,
        <br />
        will result in re-auction of the purchased items with no refunds.
        <p className='text-orange-500'>If you are unable to collect your items, kindly refrain from bidding.</p>
      </div>
    </div>
  )

  const renderVideo = (data?: Record<string, string>) => (
    <div className='flex justify-center'>
      <ReactPlayer
        className='max-w-[90%] min-h-[50%]'
        loop
        // muted={videoMuted}
        playing={videoMuted}
        url={data ? data['videoUrl'] : ''}
      />
    </div>
  )

  const innerDivStyle = 'min-w-64 p-6 justify-center grid text-center bg-[url(https://ik.imagekit.io/fa2tirjbx/sunset_forest?updatedAt=1713567505289)] bg-gray-500 bg-blend-multiply'//shadow-green-500/50 shadow-lg
  const contentStyle = 'text-orange-400'
  const renderTopBanner = () => (
    <div className='xl:px-[20%] sm:px-[10%] xl:flex sm:block mt-6 mb-6 text-white w-full'>
      <div className={innerDivStyle}>
        <div className={iconDivStyle}>
          <FaExclamationTriangle size={32} />
        </div>
        <p className={contentStyle}>
          Please read our description before bidding with us,
          <br />
          some of the policy have updated since website renovation.
        </p>
      </div>
      <div className={innerDivStyle}>
        <div className={iconDivStyle}>
          <FaDiceTwo size={32} />
        </div>
        <p className={contentStyle}>
          We Are Currently Holding 2 Auctions Per Week
          <br />
        </p>
      </div>
      <div className={innerDivStyle}>
        <div className={iconDivStyle}>
          <FaPhone size={32} />
        </div>
        <p className={contentStyle}>
          If there is a problem with your purchases,
          <br />
          please submit the form in "Contact Us" page for detailed response.
        </p>
      </div>
    </div>
  )

  const renderJumbotron = () => (
    <section className="bg-center bg-cover bg-no-repeat bg-[url('https://ik.imagekit.io/fa2tirjbx/IMG_20231014_143614.jpg?updatedAt=1713042627522')] bg-gray-700 bg-blend-multiply min-h-[200px] max-h-[1200px]">
      <div className="px-4 pt-12 mx-auto max-w-screen-xl text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Toronto Liquidation Auction Warehouse</h1>
        <p className="mb-3 text-lg font-bold text-amber-500 lg:text-xl sm:px-16 lg:px-48">Bid & Win Amazon Product</p>
        <p className="mb-3 text-lg font-normal text-amber-500 lg:text-xl sm:px-16 lg:px-48">Amazon / AliExpress Pallets Wholesale Available</p>
        {/* bid button */}
        <div className="grid pt-12 sm:flex-row sm:justify-center sm:space-y-0 text-center justify-center overflow-x-hidden" id='breathing-panel'>
          <div className='rb-box p-2 shadow-amber-700 shadow-2xl max-w-fit mb-16'>
            <Button
              size='lg'
              variant='shadow'
              color='success'
              className='text-white justify-center grid h-fit bg-orange-600 min-h-32 m-auto shadow-amber-700 shadow-2xl z-30'
              onClick={openHibidLink}
            >
              <div className='flex justify-center mt-2'>
                <FaArrowDown size={32} />
                <FaArrowDown size={32} />
                <FaArrowDown size={32} />
              </div>
              <p className='italic text-2xl'>Click Here to Bid</p>
              <Image
                className='!max-w-[600px] m-auto sm:w-[350px] xl:w-[450px] w-[290px]'
                isBlurred
                src={aucLogo}
                alt="aucLogo"
              />
              <p className='italic text-2xl'>Click Here to Bid</p>
              <div className='flex justify-center mb-2'>
                <FaArrowUp size={32} />
                <FaArrowUp size={32} />
                <FaArrowUp size={32} />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )

  // convert link record to dropdown menu array
  const convertObjectToArray = (data: Record<string, string>) => {
    const items: { key: string, label: string }[] = []
    Object.entries(data).map(([key, c]) => {
      items.push({
        key: key,
        label: c
      })
    })
    return items.reverse()
  }

  const cardStyle = 'bg-[#333] p-4 rounded-lg m-3 grid shadow-orange-400 shadow-lg'
  const iconDivStyle = 'grid text-center justify-center p-2'
  const iconColor = '#F28D39'
  const contentText = 'font-light'
  const renderInfoCol = (data?: Record<string, string>) => (
    <div className='mt-3 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 max-w-fit md:px-[10%] sm:px-[10%] lg:px-[5%] text-white text-center xl:w-[61.8%] md:w-[70%] sm:w-[70%] w-[70%] m-auto'>
      <div className={cardStyle}>
        <p className='text-2xl'>Pickup</p>
        <div className={iconDivStyle}>
          <FaWarehouse size={100} color={iconColor} />
        </div>
        <p className={contentText}>Please use signupgenius.com to book appointments, to reschedule an appointment, please make changes at <span className='underline'>signupgenius.com</span>.</p>
        {/* need button menu to select auction lot number */}
        {/* <Button className='mt-3 mb-3 font-bold' onClick={() => openUrlInNewTab(data ? data['bookingLink'] : "")}>
          Appointment
        </Button> */}
        {/* links drop down menu for past auctions (limited to 3) */}
        <span className='text-gray-500'>*Select from a list of booking links down below.</span>
        <Dropdown>
          <DropdownTrigger>
            <Button className='mt-3 mb-3 font-bold'>
              Select Appointment
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            onAction={(key) => openUrlInNewTab(String(key))}
            items={data !== undefined ? convertObjectToArray(data) : []}
          >
            {(item) => (
              <DropdownItem key={item.label}>
                Auction {item.key}
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className={cardStyle}>
        <p className='text-2xl'>Shipping</p>
        <div className={iconDivStyle}>
          <FaShippingFast size={100} color={iconColor} />
        </div>
        <p className={contentText}>Please read the shipping policy for details, we have partnered up with beavery.ca to fulfill the delivery of your goods.</p>
        <Link to='./shipping'>
          <Button className='mt-3 mb-3 font-bold w-full p-0'>Request</Button>
        </Link>
      </div>
      <div className={cardStyle}>
        <p className='text-2xl'>Warranty</p>
        <div className={iconDivStyle}>
          <FaPhoneSquareAlt size={100} color={iconColor} />
        </div>
        <p className={contentText}>Contact us through the web form for questions about returns, refunds, problematic transactions, and payment methods.</p>
        <Link to='./contact-us'>
          <Button className='mt-3 mb-3 font-bold w-full p-0'>Submit</Button>
        </Link>
      </div>
    </div>
  )

  const renderAboutUsBox = () => (
    <div
      style={{ backgroundImage: `url(${forest_1})` }}
      className="grid text-center text-xl text-white p-6  bg-blend-multiply bg-gray-500 xl:w-[61.8%] md:w-[70%] sm:w-[70%] w-[70%] m-auto"
    >
      <p className='text-4xl mb-3'>About Us:</p>
      <p className='text-lg font-thin'>
        We are a liquidation warehouse based in Toronto, Ontario, Canada, founded in 2021.
        <br />
        <br />
        We offer brand-new items, unclaimed products, and customer returns,
        <br />
        <br />
        from popular online retailers such as Amazon, HomeDepot and AliExpress at a huge discount.
        <br />
        <br />
        Come by our warehouse near HWY 401 and 400, you never know what treasures you might find!
      </p>
    </div>
  )

  const renderBanner = (data?: Record<string, string>) => (
    <img src={data ? data['url'] : ""} className='xl:w-[61.8%] md:w-[90%] sm:w-[90%] w-[90%] grid m-auto' onClick={() => openHibidLink()} />
  )

  // dictionary of all prefabs
  // add prefabs here and manipulate the page content object in database to customize page
  const componentDict: Record<string, (val: Record<string, string>) => JSX.Element> = {
    "importantNotice": renderImportantNotice,
    "youtubeVideo": renderVideo,
    "topBanner": renderTopBanner,
    "jumbotron": renderJumbotron,
    "banner": renderBanner,
    "googleReview": GoogleReviewsPanel,
    "aboutUsBox": renderAboutUsBox,
    "infoCol": renderInfoCol,
  }

  return (
    <div className='gap-6 grid'>
      <SplashScreen displaySplash={props.canSplash} />
      {/* render all component according to content object */}
      <div className='mt-1'></div>
      {props.contentArr.map((val, index) => {
        const renderFunction = componentDict[val['name']]
        return <React.Fragment key={index}>{renderFunction(val['data'])}</React.Fragment>;
      })}
    </div>
  )
}

export default Home