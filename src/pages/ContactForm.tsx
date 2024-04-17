import React, { useState } from 'react';
import { Button, Input, Textarea, Select, SelectItem } from "@nextui-org/react";
import { response } from "./data";
import HCaptcha from '@hcaptcha/react-hcaptcha'; // 引入 hCaptcha

interface ContactFormProps {
  onSubmit: (formData: FormValues) => void;
}

export interface FormValues {
  firstname: string;
  lastname: string;
  phonenum: string;
  email: string;
  inovicenum: string;
  lotnum: string;
  response: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormValues>({
    firstname: '',
    lastname: '',
    phonenum: '',
    email: '',
    inovicenum: '',
    lotnum: '',
    response: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      firstname: '',
      lastname: '',
      phonenum: '',
      email: '',
      inovicenum: '',
      lotnum: '',
      response: '',
      message: '',
    });
  };

  return (
    <form className='Form-cf' onSubmit={handleSubmit}>
      <div className='Form-Group-cf Form-Group-cf-name'>
        <label className='Label-cf Label-cf-name' id="name">Name<sup className="required-field">*</sup></label>
        <Input className='Input-cf Input-cf-first' type="text" id="firstname" name="firstname" value={formData.firstname} placeholder="First Name" onChange={handleChange} />
        <p className='Text-cf-first'>first</p>
        <Input className='Input-cf Input-cf-last' type="text" id="lastname" name="lastname" value={formData.lastname} placeholder="Last Name" onChange={handleChange} />
        <p className='Text-cf-last'>last</p>
      </div>

      <div className='Form-Group-cf'>
        <label className='Label-cf' id="phonenum">Phone Number<sup className="required-field">*</sup></label>
        <Input className='Input-cf' type="text" id="phonenum" name="phonenum" value={formData.phonenum} placeholder="Phone Number" onChange={handleChange} />
      </div>

      <div className='Form-Group-cf'>
        <label className='Label-cf' id="email">Email<sup className="required-field">*</sup></label>
        <Input className='Input-cf' type="email" id="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} />
      </div>

      <div className='Form-Group-cf'>
        <label className='Label-cf' id="inovicenum">Invoice Number<sup className="required-field">*</sup></label>
        <Input className='Input-cf' type="text" id="inovicenum" name="inovicenum" value={formData.inovicenum} placeholder="Invoice #" onChange={handleChange} />
      </div>

      <div className='Form-Group-cf'>
        <label className='Label-cf' id="lotnum">Lot Number<sup className="required-field">*</sup></label>
        <Input className='Input-cf' type="text" id="lotnum" name="lotnum" value={formData.lotnum} placeholder="Lot #" onChange={handleChange} />
      </div>

      <div className='Form-Group-cf'>
        <label className='Label-cf' id="response">Select Response <sup className="required-field">*</sup></label>
        <Select
          isRequired
          className='Select-cf'
          id="response"
          name="response"
          value={formData.response}
          onChange={handleSelectChange}
          aria-labelledby="response"
        >
          {response.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </Select>
      </div>

      <div className='Form-Group-cf'>
        <label className='Label-cf' id="message">Message<sup className="required-field">*</sup></label>
        <Textarea
          className='Textarea-cf'
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message here"
        />
      </div>

      <div className='Form-Group-cf'>
        <label className='Label-cf '>&nbsp;</label>
        <div className='hCaptcha-cf'>
        <HCaptcha
          sitekey="11bd2501-6d7f-4ce5-a31f-59237eca387f" // 替換為您的 hCaptcha 網站金鑰
          onVerify={(token: string) => {
            console.log('hCaptcha verified:', token);
            // 在這裡處理 hCaptcha 驗證成功的邏輯，例如提交表單等
          }}
          onError={(err: any) => {
            console.error('hCaptcha error:', err);
          }}
        />
        </div>
      </div>

      <div className='Form-button'>
        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
