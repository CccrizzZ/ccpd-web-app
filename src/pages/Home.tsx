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
import React, { useEffect, useState } from 'react'
import { openBeaveryLink, openGoogleMapLink, openHibidLink } from '../utils'
import { FaBox, FaShippingFast, FaWarehouse } from 'react-icons/fa'
import { Fa2, FaSquarePhone } from 'react-icons/fa6'
import forest_1 from '../assets/forest_1.jpg'
import ReactPlayer from 'react-player'
import { Link } from 'wouter'
import reviewsData from '../assets/reviews_data.json';
import googleLogo from '../assets/googleLogo.png'
import './Home.css'

const Home: React.FC = () => {
  const [videoMuted, setVideoMuted] = useState<boolean>(true)
  useEffect(() => {
    window.scrollTo(0, 0)

    setTimeout(() => {
      setVideoMuted(false)
    }, 2000);
  }, [])

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
          If there is a problem with your purchases,
          <br />
          please submit the form in "Contact Us" page for detailed response.
        </p>
      </div>
    </div>
  )

  const renderJumbotron = () => (
    <section className="bg-center bg-cover bg-no-repeat bg-[url('https://ik.imagekit.io/fa2tirjbx/IMG_20231014_143614.jpg?updatedAt=1713042627522')] bg-gray-700 bg-blend-multiply min-h-[200px] max-h-[1100px]">
      <div className="px-4 pt-12 mx-auto max-w-screen-xl text-center pb-12">
        <div className='inline-grid'>
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
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Toronto Liquidation Auction Warehouse</h1>
        <p className="mb-3 text-lg font-bold text-amber-500 lg:text-xl sm:px-16 lg:px-48">Bid & Win Amazon Product</p>
        <p className="mb-3 text-lg font-normal text-amber-500 lg:text-xl sm:px-16 lg:px-48">Auction Currently Available on Hibid.com</p>
        <p className="mb-3 text-lg font-normal text-amber-500 lg:text-xl sm:px-16 lg:px-48">Amazon / AliExpress Pallets Wholesale Available</p>
        <p className="mb-3 text-lg font-bold text-white lg:text-xl sm:px-16 lg:px-48 mt-6" id='breathing-panel'>0% Buyer's Premium</p>
        <div className="grid pt-12 sm:flex-row sm:justify-center sm:space-y-0 text-center">
          <Button
            size='lg'
            variant='shadow'
            color='success'
            className='text-white block h-fit bg-orange-600 min-h-32 max-w-72 m-auto shadow-amber-700 shadow-2xl rolling-border-box'
            onClick={openHibidLink}
          >
            <p className='italic text-2xl'>***Click Here to Bid***</p>
            <div className='grid text-center justify-center p-2'>
              <Image
                isBlurred
                width={200}
                src={aucLogo}
                alt="aucLogo"
              />
            </div>
            <p className='italic text-2xl'>***Click Here to Bid***</p>
          </Button>
        </div>
      </div>
    </section>
  )

  const cardStyle = 'bg-[#333] p-4 rounded-lg m-3 grid shadow-orange-400	shadow-lg'
  const iconDivStyle = 'grid text-center justify-center p-2'
  const iconColor = '#F28D39'
  const renderInfoCol = () => (
    <div className='mt-3 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 max-w-fit md:px-[10%] sm:px-[10%] lg:px-[5%] text-white text-center'>
      <div className={cardStyle}>
        <p className='text-2xl'>Pickup</p>
        <div className={iconDivStyle}>
          <FaWarehouse size={100} color={iconColor} />
        </div>
        <p>Please read shipping policy page for details, we have partner up with beavery.ca to fulfill the delivery of your goods.</p>
        <Button className='mt-3 mb-3 font-bold' disabled>Book for Pickup (Coming Soon)</Button>
      </div>
      <div className={cardStyle}>
        <p className='text-2xl'>Shipping</p>
        <div className={iconDivStyle}>
          <FaShippingFast size={100} color={iconColor} />
        </div>
        <p>Please read shipping policy for details, we have partner up with beavery.ca to fulfill the delivery of your goods.</p>
        <Button className='mt-3 mb-3 font-bold' onClick={openBeaveryLink}>Request for Shipment</Button>
      </div>
      <div className={cardStyle}>
        <p className='text-2xl'>Warranty</p>
        <div className={iconDivStyle}>
          <FaSquarePhone size={100} color={iconColor} />
        </div>
        <p>Contact us through web form for question about returns, refund, problematic transaction and payment methods.</p>

        <Button className='mt-3 mb-3 font-bold'><Link to='./contact-us'>Submit a Ticket</Link></Button>

      </div>
    </div>
  )

  const renderGoogleReviews = () => {
    const [reviewsPerRow, setReviewsPerRow] = useState(calculateReviewsPerRow()); 
    const filteredReviews = reviewsData.filter((review) => review.numOfStars === '5 stars');
    const totalRows = Math.ceil(filteredReviews.length / reviewsPerRow);
    const rowArray = Array.from({ length: totalRows }, (_, index) =>
      filteredReviews.slice(index * reviewsPerRow, (index + 1) * reviewsPerRow)
    );
  
    const [currentRow, setCurrentRow] = useState(0);
  
    const goToPreviousPage = () => {
      setCurrentRow((prevRow) => (prevRow - 1 + totalRows) % totalRows);
    };
  
    const goToNextPage = () => {
      setCurrentRow((prevRow) => (prevRow + 1) % totalRows);
    };
  
    useEffect(() => {
      const handleResize = () => {
        const newReviewsPerRow = calculateReviewsPerRow();
        if (newReviewsPerRow !== reviewsPerRow) {
          setReviewsPerRow(newReviewsPerRow);
        }
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [reviewsPerRow]);
  
    function calculateReviewsPerRow() {
      if(window.innerWidth>1024)
        return 3
      else if (window.innerWidth>640)
        return 2
      else 
        return 1
    }
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentRow((prevRow) => (prevRow + 1) % totalRows);
      }, 5000); 
  
      return () => clearInterval(interval);
    }, [totalRows]);
  
    return (
      <div className="grid text-center w-full mt-12 mb-12 p-6 bg-blend-multiply bg-gray-800 ">
        <div className="flex items-center justify-center">
          <img src={googleLogo} alt="Google Logo" className="lg:h-20 lg:w-20 m-5 h-12 w-12" />
          <h2 className="text-white lg:text-4xl m-5 sm:text-3xl text-xl">Our Google Reviews</h2>
        </div>
        <div className="flex space-x-6 overflow-hidden mt-8">
          {rowArray[currentRow].map((review) => (
            <div key={review.userName} className={reviewsPerRow === 1 ? "w-full" : "w-96"}>
              <p className="text-orange-500 font-bold">{review.userName}</p>
              <p className="text-yellow-400 font-bold star-blink">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
              <p className="text-gray-300">
                {review.review.length > 200 ? `${review.review.slice(0, 200)}...` : review.review}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="text-orange-500"
            onClick={goToPreviousPage}
            disabled={currentRow === 0}
          >
            &lt; Previous
          </button>
          <button
            className="text-orange-500 ml-4"
            onClick={goToNextPage}
            disabled={currentRow === totalRows - 1}
          >
            Next &gt;
          </button>
        </div>
      </div>
    );
  };

  
  
  const renderAboutUsBox = () => (
    <div
      style={{ backgroundImage: `url(${forest_1})` }}
      className="grid text-center w-full text-xl mt-12 mb-12 text-white p-6  bg-blend-multiply bg-gray-500"
    >
      {/* <div className='mb-12 mt-12 grid justify-center'>
        <ReactPlayer
          muted
          loop
          playing={true}
          url='https://www.youtube.com/watch?v=RZBbl8V8pjs'
        />
      </div> */}

      {/* <video autoPlay muted loop>
        <source src='https://ik.imagekit.io/fa2tirjbx/aXG3VMHj.mp4?updatedAt=1713566538970' type='video/mp4' />
      </video> */}
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

  return (
    <div>
      <div className='flex justify-center mt-3'>
        <ReactPlayer
          className='max-w-[90%]'
          loop
          // muted={videoMuted}
          playing={videoMuted}
          url='https://www.youtube.com/watch?v=MUAjzmvs450'
        />
      </div>
      {renderTopBanner()}
      {renderJumbotron()}
      <div className='xl:w-[61.8%] md:w-[70%] sm:w-[70%] w-[70%] grid m-auto'>        
        {renderGoogleReviews()}
        {renderAboutUsBox()}
        {renderInfoCol()}
      </div>
    </div>
  )
}

export default Home