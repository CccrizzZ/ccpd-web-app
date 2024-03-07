// import { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Tooltip
} from "@nextui-org/react";
import {
  FaMapMarkerAlt,
  FaSun,
  FaMoon
} from "react-icons/fa";
import { Image } from "@nextui-org/react";
import ccpdLogo from './assets/ccpd-logo.jpg';
import zeroBp from './assets/bp0.jpg'
import { useTheme } from "next-themes";
import './App.css'

function App() {
  const { theme, setTheme } = useTheme()
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
          <NavbarItem>
            <Tooltip content={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`} >
              <Button isIconOnly color="warning" variant="faded" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {theme === 'light' ? <FaSun /> : <FaMoon />}
              </Button>
            </Tooltip>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <div className='grid justify-center text-center'>
        <Button
          id="breathing-panel"
          className="h-[600px] mt-20 bg-gradient-to-tr from-blue-600 to-rose-500 text-white shadow-lg grid justify-center"
          onClick={() => window.open(HibidPageUrl)}
        >
          <Image
            // isZoomed
            width={400}
            alt="Hibid"
            src={zeroBp}
          />
        </Button>
        {/* <h6 className='text-xl mt-3 font-bold'>☝️⬆️Click Here to Checkout Our Latest Auction on Hibid⬆️☝️</h6> */}
      </div>
      <div className='absolute bottom-0 min-h-6 p-4 bg-neutral-900 w-full text-center'>
        <p className='text-[#666]'>CC Power Deals Inc. EST 2021 <br /> 240 Bartor Rd Unit #4, North York, ON M9M 2W6</p>
      </div>
    </>
  )
}

export default App
