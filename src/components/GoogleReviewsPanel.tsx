import { useEffect, useState } from "react"
import reviewsData from '../assets/reviews_data.json';
import googleLogo from '../assets/googleLogo.png'

export type Review = {
  userName: string
  numOfStars: string
  review: string
}

const GoogleReviewsPanel = () => {
  const [reviewsPerRow, setReviewsPerRow] = useState(calculateReviewsPerRow())
  const filteredReviews = reviewsData.filter((review) => review.numOfStars === '5 stars')
  const totalRows = Math.ceil(filteredReviews.length / reviewsPerRow)
  const rowArray = Array.from(
    { length: totalRows },
    (_, index) => filteredReviews.slice(index * reviewsPerRow, (index + 1) * reviewsPerRow)
  )
  const [currentRow, setCurrentRow] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRow((prevRow) => (prevRow + 1) % totalRows)
    }, 5000)

    return () => clearInterval(interval)
  }, [totalRows])

  // const goToPreviousPage = () => {
  //   setCurrentRow((prevRow) => (prevRow - 1 + totalRows) % totalRows)
  // }

  // const goToNextPage = () => {
  //   setCurrentRow((prevRow) => (prevRow + 1) % totalRows)
  // }

  useEffect(() => {
    const handleResize = () => {
      const newReviewsPerRow = calculateReviewsPerRow()
      if (newReviewsPerRow !== reviewsPerRow) {
        setReviewsPerRow(newReviewsPerRow)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [reviewsPerRow])

  function calculateReviewsPerRow() {
    if (window.innerWidth > 1024)
      return 3
    else if (window.innerWidth > 640)
      return 2
    else
      return 1
  }

  return (
    <div className="grid text-center bg-blend-multiply bg-gray-800 p-3 xl:w-[61.8%] md:w-[70%] sm:w-[70%] w-[70%] m-auto">
      <div className="flex items-center justify-center">
        <img
          src={googleLogo}
          alt="Google Logo"
          className="lg:h-20 lg:w-20 m-5 h-12 w-12"
        />
        <h2 className="text-white lg:text-2xl sm:text-2xl text-xl">
          Recent Google Reviews
        </h2>
      </div>
      <div className="flex space-x-6 overflow-hidden mt-8 max-h-96 h-48">
        {rowArray[currentRow].map((review: Review) => (
          <div key={review.userName} className={reviewsPerRow === 1 ? "w-full" : "w-96"}>
            <p className="text-orange-500 font-bold">{review.userName}</p>
            <p className="text-yellow-400 font-bold star-blink">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <p className="text-gray-300 italic">
              {review.review.length > 200 ? `${review.review.slice(0, 200)}...` : review.review}
            </p>
          </div>
        ))}
      </div>

      {/* <div className="flex justify-center mt-4">
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
      </div> */}
    </div>
  )
}
export default GoogleReviewsPanel