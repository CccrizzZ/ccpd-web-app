// import { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  // NavbarMenuToggle,
  // NavbarMenu,
  // NavbarMenuItem,
  Button
} from "@nextui-org/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Image } from "@nextui-org/react";
import ccpdLogo from '../src/assets/ccpd-logo.jpg';
import hibidLogo from '../src/assets/hibid.jpg';

function App() {
  const HibidPageUrl = 'https://ccpowerdeals.hibid.com/auctions'
  const GoogleMapUrl = 'https://maps.app.goo.gl/o1zz8YvLX1JdhMqv7'
  return (
    <>
      <Navbar isBordered isBlurred={false}>
        <NavbarBrand>
          <Image
            width={60}
            className='p-2'
            alt="NextUI hero Image"
            src={ccpdLogo}
          />
          <p className="font-bold text-inherit">CC Power Deals Inc.</p>
        </NavbarBrand>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              radius="full"
              className="bg-gradient-to-tr from-blue-500 to-green-500 text-white shadow-lg"
              onClick={() => window.open(GoogleMapUrl)}
            >
              <FaMapMarkerAlt /> Find us on Google Map
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <div className='grid justify-center text-center'>
        <Button
          className="h-[400px] mt-20 bg-gradient-to-tr from-amber-500 to-rose-500 text-white shadow-lg grid justify-center"
          onClick={() => window.open(HibidPageUrl)}
        >
          <Image
            // isZoomed
            width={600}
            alt="Hibid"
            src={hibidLogo}
          />
        </Button>
        <h6 className='text-xl mt-3 font-bold'>☝️⬆️Click Here to Checkout Our Latest Auction on Hibid⬆️☝️</h6>
      </div>
      <div className='absolute bottom-0 min-h-6 p-6 bg-neutral-900 w-full text-center'>
        <p>CC Power Deals Inc. EST 2021</p>
        <p className='text-[#666]'>240 Bartor Rd Unit #4, North York, ON M9M 2W6</p>
      </div>
    </>
  )
}

export default App
