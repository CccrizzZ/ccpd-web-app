import './App.css'
import NavFooter from './components/NavFooter'
import NavigationBar from './components/NavigationBar'
import { Route, Switch } from "wouter"
import Home from './pages/Home'
import ContactUs from './pages/ContactUs.tsx'
import Shipping from './pages/Shipping.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
import { useState } from 'react'

const App = () => {
  const [canSplash, setCanSplash] = useState<boolean>(false)

  return (
    <div id='app_content' className="h-[100vh]">
      <NavigationBar />
      <Switch>
        <Route path="/" component={() => <Home canSplash={canSplash} setCanSplash={setCanSplash} />} />
        <Route path='/contact-us' component={() => <ContactUs />} />
        <Route path='/shipping' component={() => <Shipping />} />
        <Route path='/privacy-policy' component={() => <PrivacyPolicy />} />

        {/* Default route in a switch */}
        <Route>404: No such page!</Route>
      </Switch>
      <NavFooter />
    </div>
  )
}

export default App
