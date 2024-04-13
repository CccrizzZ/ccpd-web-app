import React, { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Tooltip,
  Image,
  // Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@nextui-org/react'
import {
  FaMapMarkerAlt,
  FaSun,
  FaMoon
} from 'react-icons/fa'
import { useTheme } from "next-themes"
import ccpdLogo from '../assets/ccpd-logo.jpg'
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>()
  const menuItems = [
    "Home",
    "Policies",
    "Contact Us",
  ]

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <img src={ccpdLogo} width='40%' /> */}
          <p className="font-bold text-inherit text-2xl">258.ca</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link to="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/policies">
            Policies
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/warranty">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <Button isIconOnly color="warning" variant="faded" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'light' ? <FaSun /> : <FaMoon />}
          </Button>
        </NavbarItem>
        {/* <NavbarItem>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            {/* <Link
              color={
                "foreground"
              }
              className="w-full"
              to="#"
            >
              {item}
            </Link> */}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default NavigationBar