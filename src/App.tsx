import './App.css'
import NavFooter from './components/NavFooter'
import NavigationBar from './components/NavigationBar'
import { Route, Switch } from "wouter"
import Home from './pages/Home'
import ContactUs from './pages/ContactUs.tsx'
import Shipping from './pages/Shipping.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
import { useEffect, useState } from 'react'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { server } from './utils.tsx'

const App = () => {
  const [canSplash, setCanSplash] = useState<boolean>(false)
  const [appointmentLink, setAppointmentLink] = useState<string>({} as string)

  useEffect(() => {
    getPageInfo()
  }, [])

  const getPageInfo = async () => {
    await axios({
      method: 'get',
      url: server + '/getPageContent',
    }).then((res: AxiosResponse) => {
      if (res.status === 200) {
        setAppointmentLink(res.data['currentLink'])
      }
    }).catch((err: AxiosError) => {
      alert('Server Error ' + err.response?.data)
    })
  }

  return (
    <div id='app_content' className="h-[100vh]">
      <NavigationBar />
      <Switch>
        <Route path="/" component={() => <Home canSplash={canSplash} setCanSplash={setCanSplash} appointmentLink={appointmentLink} />} />
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
