import { useState } from "react"
import { Button, Input, Textarea, Select, SelectItem, Checkbox } from "@nextui-org/react"
import "./ContactUs.css"
import HCaptcha from "@hcaptcha/react-hcaptcha"
import axios, { AxiosError, AxiosResponse } from "axios"
import {
  server,
  nullCheckObject
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
  time: string
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
  time: ''
}

const ContactUs = () => {
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
  const [showCheckboxError, setShowCheckboxError] = useState<boolean>(false)
  const [canSubmit, setCanSubmit] = useState<boolean>(false)


  // const checkBeforeSubmit = () => {
  //   if ((name === 'firstname' || name === 'lastname' || name === 'email') && formData.firstname.length > 50) {
  //     console.log(name)
  //     showModal('Invalid Input', 'The maximum length of this field is 50 characters, please check your input.')
  //     return // 防止输入超过 50 个字符
  //   } else if (name === 'inovicenum') {
  //     if (value.length > 7) {
  //       showModal('Invalid Input', 'Invoice number is a number no larger than 7 digits, please check your input.')
  //       return // invoice number 最大長度預設7位
  //     } else if (isNaN(Number(value))) {
  //       showModal('Invalid Input', 'Please enter only numbers in this column. Do not use other characters or special symbols such as #, +,-, $, (, ), etc.')
  //       return // 確保輸入的是數字
  //     }
  //   } else if (name === 'lotnum') {
  //     if (value.length > 6) {
  //       showModal('Invalid Input', 'Lot number is a number no larger than 6 digits, please check your input.')
  //       return // Lot number 最大長度預設6位
  //     } else if (isNaN(Number(value))) {
  //       showModal('Invalid Input', 'Please enter only numbers in this column. Do not use other characters or special symbols such as #, +,-, $, (, ), etc.')
  //       return // 確保輸入的是數字
  //     }
  //   } else if (name === 'phonenum') {
  //     if (value.length > 10) {
  //       showModal('Invalid Input', 'Phone number is a number no larger than 10 digits, please check your input.\nIf the phone number you are using is in a different format, please indicate it in the message column.')
  //       return // phone number 为 10 位数字 
  //     } else if (isNaN(Number(value))) {
  //       showModal('Invalid Input', 'Please enter only numbers in this column. Do not use other characters or special symbols such as #, +,-, $, (, ), etc.')
  //       return // 確保輸入的是數字
  //     }
  //   } else if (name === 'message' && value.length > 400) {
  //     showModal('Invalid Input', 'The maximum length of this field is 400 characters, please check your input.')
  //     return // 防止输入超过 400 个字符
  //   }
  // }


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

  const handleSubmit = async () => {
    // check for everything
    if (isLoading) return
    if (!agreeTerms) {
      setShowCheckboxError(true)
      return
    }
    if (nullCheckObject(formData)) {
      showModal('Please Complete The Form', 'Please Fill in All Necessary Fields in the Form')
      return
    }

    // send to server
    setIsLoading(true)
    await axios({
      method: 'post',
      url: server + '/submitContactForm',
      headers: { 'Content-Type': 'application/json' },
      data: { ...formData, time: 'today' }
    }).then((res: AxiosResponse) => {
      if (res.status === 200) {
        showModal('Ticket Submitted!', 'Please Wait Patiently While We Process Tickets.')
        window.location.reload();
        showModal('✅ Ticket Submitted!', 'Please Wait Patiently While We Process Tickets.')
        setFormData(initFormData)
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
    setIsLoading(false)
    setCanSubmit(false)
  }

  const renderHCapacha = () => (
    <HCaptcha
      sitekey="11bd2501-6d7f-4ce5-a31f-59237eca387f"
      onVerify={(token: string) => {
        console.log('hCaptcha verified:', token)
        setCanSubmit(true)
      }}
      onError={(err: any) => {
        console.error('hCaptcha error:', err)
      }}
    />
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
              maxLength={51}
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
              maxLength={51}
            />
          </div>
          <div className='Form-Group-cf'>
            <label className='Label-cf' id="phone">Phone Number<sup className="required-field">*</sup></label>
            <Input
              isRequired
              className='Input-cf'
              type="number"
              id="phone"
              name="phone"
              value={formData.phone}
              placeholder="Phone Number"
              onChange={handleChange}
              maxLength={11}
              pattern="[0-9]{10}"
              errorMessage="Please enter a valid 10-digit phone number"
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
              maxLength={51}
            />
          </div>
          <div className='Form-Group-cf'>
            <label className='Label-cf' id="inovice">Invoice Number<sup className="required-field">*</sup></label>
            <Input
              isRequired
              className='Input-cf'
              type="text"
              id="inovice"
              name="inovice"
              value={formData.invoice}
              placeholder="Invoice #"
              onChange={handleChange}
              maxLength={8}
            />
          </div>
          <div className='Form-Group-cf'>
            <label className='Label-cf' id="lot">Lot Number<sup className="required-field">*</sup></label>
            <Input
              isRequired
              className='Input-cf'
              type="number"
              id="lot"
              name="lot"
              value={formData.lot}
              placeholder="Lot #"
              onChange={handleChange}
              maxLength={7}
            />
          </div>
          <div className='Form-Group-cf'>
            <label className='Label-cf' id="response">Select Response <sup className="required-field">*</sup></label>
            <Select
              isRequired
              className='Select-cf'
              name="response"
              value={formData.reason}
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
              maxLength={401}
            />
          </div>
          <div className='Form-Group-cf '>
            <div className='checkbox-cf'>
              <Checkbox defaultSelected={false}
                onChange={(e) => {
                  setAgreeTerms(e.target.checked)
                  setShowCheckboxError(false)
                }}
              >
                <p>
                  I agree to <br />
                  <Link href='/'>privacy policy</Link>
                  <Link href='/' >Terms and Conditions</Link>
                  <sup className="required-field">*</sup>
                </p>
              </Checkbox>
            </div>
            {showCheckboxError && (<p className="required-field">Please agree to the terms and conditions before submitting.</p>)}
          </div>
          <div className='Form-Group-cf'>
            <label className='Label-cf '>&nbsp;</label>
            <div className='hCaptcha-cf'>
              {renderHCapacha()}
            </div>
          </div>
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
        </form>
      </div>
    </div>
  )
}

export default ContactUs
