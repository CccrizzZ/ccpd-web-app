import React, { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Tooltip,
  Image,
  Link,
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
// import { Link } from "wouter"

const NavigationBar = () => {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>()
  const menuItems = [
    "Home",
    "Policies",
    "Contact Us",
  ]

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <img src={ccpdLogo} width='40%' /> */}
          <p className="font-bold text-inherit text-2xl">CC Power Deals Inc.</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/" color="warning">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/shipping" color="foreground">
            Shipping Policies
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contactUs" color="foreground">
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
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="/" onClick={() => setIsMenuOpen(false)} color="warning">
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/shipping" onClick={() => setIsMenuOpen(false)} color="foreground">
            Shipping Policies
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/contactUs" onClick={() => setIsMenuOpen(false)} color="foreground">
            Contact Us
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}

export default NavigationBar