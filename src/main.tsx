// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { BrowserRouter } from 'react-router-dom'

import NavFooter from './components/NavFooter'
import NavigationBar from './components/NavigationBar'

import Warranty from './pages/Warranty.tsx'
import Shipping from './pages/Shipping.tsx'
import Error from './pages/Error404.tsx'
import GoogleApiTest from './pages/GoogleApiTest.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <NextUIProvider>
    <NavigationBar/>
    <NextThemesProvider attribute="class" defaultTheme="light">
      <Warranty />
    </NextThemesProvider>
    <NavFooter/>
  </NextUIProvider>
  // </React.StrictMode>,
)
