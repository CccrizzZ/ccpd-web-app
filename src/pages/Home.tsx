import { Button } from '@nextui-org/react'
import React from 'react'

const Home = () => {
  return (
    <div>
      {/* <div className=' flex flex-col items-center justify-center'>
        <Image
          onClick={() => window.open(HibidPageUrl)}
          // isZoomed
          className=""
          id="breathing-panel"
          width={400}
          alt="Hibid"
          src={zeroBp}
        />
      </div> */}
      <section className="bg-center bg-cover bg-no-repeat bg-[url('https://ik.imagekit.io/fa2tirjbx/IMG_20231014_143614.jpg?updatedAt=1713042627522')] bg-gray-700 bg-blend-multiply min-h-[500px]">
        <div className="px-4 pt-24 mx-auto max-w-screen-xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Amazon Liquidation Sales</h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Liquidation Auction House Based in Toronto, Ontario</p>
          <div className="flex gap-3 sm:flex-row sm:justify-center sm:space-y-0">
            <Button size='lg'>
              Visite Our Hibid Page
            </Button>
            <Button size='lg'>
              Find Us on Google Map
            </Button>
          </div>
        </div>
      </section>
      <div className='mt-3'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, dolorem beatae! Aut libero inventore neque! Labore, dicta illo omnis ea provident nostrum cum molestiae autem tenetur, odit vitae sint numquam.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, dolorem beatae! Aut libero inventore neque! Labore, dicta illo omnis ea provident nostrum cum molestiae autem tenetur, odit vitae sint numquam.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, dolorem beatae! Aut libero inventore neque! Labore, dicta illo omnis ea provident nostrum cum molestiae autem tenetur, odit vitae sint numquam.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, dolorem beatae! Aut libero inventore neque! Labore, dicta illo omnis ea provident nostrum cum molestiae autem tenetur, odit vitae sint numquam.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, dolorem beatae! Aut libero inventore neque! Labore, dicta illo omnis ea provident nostrum cum molestiae autem tenetur, odit vitae sint numquam.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, dolorem beatae! Aut libero inventore neque! Labore, dicta illo omnis ea provident nostrum cum molestiae autem tenetur, odit vitae sint numquam.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, dolorem beatae! Aut libero inventore neque! Labore, dicta illo omnis ea provident nostrum cum molestiae autem tenetur, odit vitae sint numquam.
      </div>
    </div>
  )
}

export default Home