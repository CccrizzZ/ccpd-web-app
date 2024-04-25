import React, { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Image
} from '@nextui-org/react'
// import {
//   FaSun,
//   FaMoon
// } from 'react-icons/fa'
// import { useTheme } from "next-themes"
import ccpdLogo from '../assets/ccpd-logo.jpg'
import { Link } from 'wouter'

const NavigationBar: React.FC = () => {
  // const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>()

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            className='shadow-lg'
            isBlurred
            width={40}
            src={ccpdLogo}
            alt="ccpdLogo"
          />
          <p className="font-bold text-inherit text-2xl ml-3">CC Power Deals Inc.</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link to="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/shipping" color="foreground">
            Shipping
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/contact-us" color="foreground">
            Warranty
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="flex"> */}
      {/* <Button isIconOnly color="warning" variant="faded" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'light' ? <FaSun /> : <FaMoon />}
          </Button> */}
      {/* </NavbarItem>
      </NavbarContent> */}
      <NavbarMenu>
        <NavbarMenuItem>
          <Link to="/" onClick={() => setIsMenuOpen(false)} color="warning">
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to="/shipping" onClick={() => setIsMenuOpen(false)} color="foreground">
            Shipping
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to="/contact-us" onClick={() => setIsMenuOpen(false)} color="foreground">
            Warranty
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to="/privacy-policy" onClick={() => setIsMenuOpen(false)} color="foreground">
            Privacy Policy
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to="/terms-and-conditions" onClick={() => setIsMenuOpen(false)} color="foreground">
            Terms & Conditions
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}

export default NavigationBar