import './App.css'
import AdsComponent from './components/AdsComponent'
import NavFooter from './components/NavFooter'
import NavigationBar from './components/NavigationBar'
import { Link, Route, Switch } from "wouter"
import Home from './pages/Home'
import ContactUs from './pages/ContactUs.tsx'
import Shipping from './pages/Shipping.tsx'
import Error from './pages/Error404.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'

const App = () => {

  return (
    <div id='app_content' className="h-[100vh]">
      {/* <AdsComponent /> */}
      <NavigationBar />
      <Switch>
        <Route path="/" component={() => <Home />} />
        <Route path='/contactUs' component={() => <ContactUs />} />
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
