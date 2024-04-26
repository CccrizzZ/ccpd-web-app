import { useEffect, useRef, useState } from "react"
import { Button, Input, Textarea, Select, SelectItem, Checkbox } from "@nextui-org/react"
import "./ContactUs.css"
import HCaptcha from "@hcaptcha/react-hcaptcha"
import axios, { AxiosError, AxiosResponse } from "axios"
import {
  nullCheckObject,
  server
} from "../utils"
import AlertModal from '../components/AlertModal'
import { Link } from "wouter"
import { ClipLoader } from "react-spinners"

export interface FormValues {
  firstname: string
  lastname: string
  phone: string
  email: string
  invoice: string
  lot: string
  reason: string
  message: string
}

const initFormData: FormValues = {
  firstname: '',
  lastname: '',
  phone: '',
  email: '',
  invoice: '',
  lot: '',
  reason: '',
  message: '',
}

const ContactUs = () => {
  const capacha = useRef<HCaptcha>(null)
  const [formData, setFormData] = useState<FormValues>(initFormData)
  const [showAlert, setShowAlert] = useState<boolean>(false)
  const [alertInfo, setAlertInfo] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const selectOptions = [
    "Item not as described",
    "Received wrong item",
    "Item damaged or not working"
  ]
  const [agreeTerms, setAgreeTerms] = useState<boolean>(false)
  const [canSubmit, setCanSubmit] = useState<boolean>(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // later make the alert modal a standalone component
  const showModal = (title: string, msg: string) => {
    setAlertInfo({ title: title, msg: msg })
    setShowAlert(true)
  }

  const handleSubmit = async () => {
    // check for everything
    if (isLoading) return
    if (!agreeTerms) {
      showModal('Please Agree to Private Policy', 'You Have to Agree to Our Policy Before Proceeding')
      return
    }
    if (nullCheckObject(formData)) {
      showModal('Please Complete The Form', 'Please Fill in All Necessary Fields in the Form')
      return
    }

    return;
    // send to server
    setIsLoading(true)
    await axios({
      method: 'post',
      url: server + '/submitContactForm',
      headers: { 'Content-Type': 'application/json' },
      data: { ...formData, time: 'today' }
    }).then((res: AxiosResponse) => {
      if (res.status === 200) {
        showModal('✅ Ticket Submitted!', 'Please Wait Patiently While We Process Tickets.')
        setFormData(initFormData)
        setIsLoading(false)
        setCanSubmit(false)
        setAgreeTerms(false)
        capacha.current?.resetCaptcha()
      }
    }).catch((err: AxiosError) => {
      if (err.response) {
        showModal("Error Submitting Form!", String(err.response.data))
      } else {
        alert('Server Error')
      }
      setIsLoading(false)
      setCanSubmit(false)
    })
  }

  const renderHCapacha = () => (
    <div className="grid justify-center mt-6 mb-3">
      <HCaptcha
        ref={capacha}
        sitekey="11bd2501-6d7f-4ce5-a31f-59237eca387f"
        theme='dark'
        onVerify={(token: string) => {
          console.log('hCaptcha verified:', token)
          setCanSubmit(true)
        }}
        onError={(err: any) => {
          console.error('hCaptcha error:', err)
        }}
      />
    </div>
  )

  return (
    <div>
      <AlertModal
        open={showAlert}
        onOpenChange={() => setShowAlert(false)}
        title={alertInfo['title']}
        msg={alertInfo['msg']}
      />
      <div className="Title-War mb-3">
        <h1 className="H1-pg">Warranty</h1>
        <p>All request will be answered within 24-48 hours.</p>
      </div>
      <div className="w-[61.8%] xl:w-[30%] lg:w-[46.2%] md:w-[48.6%] sm:w-[46%] m-auto">
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input
            isRequired
            type="text"
            id="firstname"
            name="firstname"
            label="First Name"
            value={formData.firstname}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, firstname: event.target.value })}
            maxLength={50}
            errorMessage="Please enter a valid name"
          />
          <Input
            isRequired
            type="text"
            id="lastname"
            name="lastname"
            label="Last Name"
            value={formData.lastname}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, lastname: event.target.value })}
            maxLength={50}
            errorMessage="Please enter a valid name"
          />
        </div>
        <div>
          <Input
            isRequired
            label="Phone"
            type="number"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, phone: event.target.value }) }}
            max={999999999999}
            errorMessage="Please enter a valid 10-digit phone number"
          />
        </div>
        <div>
          <Input
            isRequired
            type="email"
            id="email"
            name="email"
            label="Email"
            value={formData.email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: event.target.value })}
            maxLength={50}
            errorMessage="Please enter a valid email address"
          />
        </div>
        <div>
          <Input
            isRequired
            type="text"
            id="inovice"
            name="inovice"
            label="Invoice"
            value={formData.invoice}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, invoice: event.target.value })}
            maxLength={8}
            errorMessage="Please enter a valid 8-digit invoice number"
          />
        </div>
        <div>
          <Input
            isRequired
            type="number"
            id="lot"
            name="lot"
            label="Lot"
            value={formData.lot}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, lot: event.target.value })}
            max={9999}
            errorMessage="Please enter valid lot number"
          />
        </div>
        <div>
          <Select
            isRequired
            label="Reason for Contact"
            name="reason"
            errorMessage="Please select reason of contact"
            value={formData.reason}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, reason: event.target.value })}
          >
            {selectOptions.map((val) => (
              <SelectItem key={val} value={val}>
                {val}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div>
          <Textarea
            isRequired
            className='resize-none'
            id="message"
            name="message"
            label="Message"
            value={formData.message}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, message: event.target.value })}
            placeholder="Enter your message here"
            maxLength={400}
            errorMessage="Maximum length 400 characters"
          />
        </div>
        <div className="grid justify-center pt-6">
          <Checkbox
            color="success"
            isRequired
            defaultSelected={false}
            isSelected={agreeTerms}
            onValueChange={setAgreeTerms}
          >
            <p>I Agree to <Link href='/privacy-policy' className='underline'>Privacy Policy</Link><sup className="required-field">*</sup></p>
          </Checkbox>
        </div>
        {renderHCapacha()}
        <div className='grid justify-center pt-3'>
          <Button
            disabled={!canSubmit}
            size="lg"
            radius="full"
            className={canSubmit ? 'bg-gradient-to-tr from-emerald-500 to-blue-500 text-white' : 'text-[#333] shadow-lg w-64 text-2xl'}
            onClick={handleSubmit}
          >
            {isLoading ? <ClipLoader color="#333" size={30} /> : 'Submit Ticket'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
