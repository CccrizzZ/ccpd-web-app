import { useState } from "react"
import { Button, Input, Textarea, Select, SelectItem } from "@nextui-org/react"
import "./ContactUs.css"
import HCaptcha from "@hcaptcha/react-hcaptcha"
import axios, { AxiosError, AxiosResponse } from "axios"
import {
  server,
  isObjectsEqual,
  nullCheckObject
} from "../utils"
import AlertModal from '../components/AlertModal'

export interface FormValues {
  firstname: string
  lastname: string
  phonenum: string
  email: string
  inovicenum: string
  lotnum: string
  response: string
  message: string
}

const initFormData: FormValues = {
  firstname: '',
  lastname: '',
  phonenum: '',
  email: '',
  inovicenum: '',
  lotnum: '',
  response: '',
  message: '',
}

const ContactUs = () => {
  const [formData, setFormData] = useState<FormValues>(initFormData)
  const [canSubmit, setCanSubmit] = useState<boolean>(false)
  const [showAlert, setShowAlert] = useState<boolean>(false)
  const [alertInfo, setAlertInfo] = useState<Record<string, string>>({})
  const selectOptions = [
    "Item not as described",
    "Received wrong item",
    "Item damaged or not working"
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const showModal = (title: string, msg: string) => {
    setAlertInfo({ title: title, msg: msg })
    setShowAlert(true)
  }

  const handleSubmit = () => {
    if (nullCheckObject(formData)) {
      showModal('Please Complete The Form', 'Please Fill in All Necessary Fields in the Form')
      return
    }
    axios({
      method: 'post',
      url: server + '/submitContactForm',
      responseType: 'text',
      data: JSON.stringify(formData)
    }).then((res: AxiosResponse) => {
      console.log(res.data)
      if (res.status === 200) {
        showModal('Ticket Submitted!', 'Please Wait Patiently While We Process Tickets.')
      }
    }).catch((err: AxiosError) => {
      console.log(err)
    })
    setFormData(initFormData)
  }

  return (
    <div className="">
      <AlertModal
        open={showAlert}
        onOpenChange={() => setShowAlert(false)}
        title={alertInfo['title']}
        msg={alertInfo['msg']}
      />
      <div className="Title-War mb-3">
        <h1 className="H1-pg">Contact Form</h1>
        <p>All request will be answered within 24-48 hours.</p>
      </div>
      <div className="WebForm-War">
        <form className='Form-cf' onSubmit={handleSubmit}>
          <div className='Form-Group-cf Form-Group-cf-name'>
            <label className='Label-cf Label-cf-name' id="name">Name<sup className="required-field">*</sup></label>
            <Input
              isRequired
              className='Input-cf Input-cf-first'
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              placeholder="First Name"
              onChange={handleChange}
            />
            <Input
              isRequired
              className='Input-cf Input-cf-last'
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              placeholder="Last Name"
              onChange={handleChange}
            />
          </div>
          <div className='Form-Group-cf'>
            <label className='Label-cf' id="phonenum">Phone Number<sup className="required-field">*</sup></label>
            <Input
              isRequired
              className='Input-cf'
              type="text"
              id="phonenum"
              name="phonenum"
              value={formData.phonenum}
              placeholder="Phone Number"
              onChange={handleChange}
            />
          </div>
          <div className='Form-Group-cf'>
            <label className='Label-cf' id="email">Email<sup className="required-field">*</sup></label>
            <Input
              isRequired
              className='Input-cf'
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className='Form-Group-cf'>
            <label className='Label-cf' id="inovicenum">Invoice Number<sup className="required-field">*</sup></label>
            <Input
              isRequired
              className='Input-cf'
              type="text"
              id="inovicenum"
              name="inovicenum"
              value={formData.inovicenum}
              placeholder="Invoice #"
              onChange={handleChange}
            />
          </div>
          <div className='Form-Group-cf'>
            <label className='Label-cf' id="lotnum">Lot Number<sup className="required-field">*</sup></label>
            <Input
              isRequired
              className='Input-cf'
              type="text"
              id="lotnum"
              name="lotnum"
              value={formData.lotnum}
              placeholder="Lot #"
              onChange={handleChange}
            />
          </div>
          <div className='Form-Group-cf'>
            <label className='Label-cf' id="response">Select Response <sup className="required-field">*</sup></label>
            <Select
              isRequired
              className='Select-cf'
              name="response"
              value={formData.response}
              onChange={handleSelectChange}
              aria-labelledby="response"
            >
              {selectOptions.map((val) => (
                <SelectItem key={val} value={val}>
                  {val}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className='Form-Group-cf'>
            <label className='Label-cf' id="message">Message<sup className="required-field">*</sup></label>
            <Textarea
              isRequired
              className='Textarea-cf resize-none'
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message here"
              maxLength={350}
            />
          </div>
          <div className='Form-Group-cf'>
            <label className='Label-cf '>&nbsp;</label>
            <div className='hCaptcha-cf'>
              <HCaptcha
                sitekey="11bd2501-6d7f-4ce5-a31f-59237eca387f"
                onVerify={(token: string) => {
                  console.log('hCaptcha verified:', token)
                }}
                onError={(err: any) => {
                  console.error('hCaptcha error:', err)
                }}
              />
            </div>
          </div>
          <div className='Form-button'>
            <Button
              size="lg"
              radius="full"
              className="bg-gradient-to-tr from-emerald-500 to-blue-500 text-white shadow-lg w-64 text-2xl"
              onClick={handleSubmit}
            >
              Submit Ticket
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
