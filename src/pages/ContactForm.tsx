import React, { useState } from 'react';
import { Button, Input, Textarea } from "@nextui-org/react";

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
        <label className='Lable-cf Lable-cf-name' htmlFor="name">Name<sup className="required-field">*</sup></label>
        <Input className='Input-cf Input-cf-first' type="text" id="firstname" name="firstname" value={formData.firstname} placeholder="First Name" onChange={handleChange} />
        <p className='Text-cf-first'>first</p>
        <Input className='Input-cf Input-cf-last' type="text" id="lastname" name="lastname" value={formData.lastname} placeholder="Last Name" onChange={handleChange} />
        <p className='Text-cf-last'>last</p>
      </div>

      <div className='Form-Group-cf'>
        <label className='Lable-cf' htmlFor="phonenum">Phone Number<sup className="required-field">*</sup></label>
        <Input className='Input-cf' type="text" id="phonenum" name="phonenum" value={formData.phonenum} placeholder="Phone Number" onChange={handleChange} />
      </div>

      <div className='Form-Group-cf'>
        <label className='Lable-cf' htmlFor="email">Email<sup className="required-field">*</sup></label>
        <Input className='Input-cf' type="email" id="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} />
      </div>

      <div className='Form-Group-cf'>
        <label className='Lable-cf' htmlFor="inovicenum">Invoice Number<sup className="required-field">*</sup></label>
        <Input className='Input-cf' type="text" id="inovicenum" name="inovicenum" value={formData.inovicenum} placeholder="Invoice #" onChange={handleChange} />
      </div>

      <div className='Form-Group-cf'>
        <label className='Lable-cf' htmlFor="lotnum">Lot Number<sup className="required-field">*</sup></label>
        <Input className='Input-cf' type="text" id="lotnum" name="lotnum" value={formData.lotnum} placeholder="Lot #" onChange={handleChange} />
      </div>

      <div className='Form-Group-cf'>
        <label className='Lable-cf' htmlFor="response">Select Response <sup className="required-field">*</sup></label>
        <select className='Select-cf' id="response" name="response" value={formData.response} onChange={handleSelectChange}>
          <option value="Item not as described">Item not as described</option>
          <option value="Received wrong item">Received wrong item</option>
          <option value="Order not received">Order not received</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className='Form-Group-cf'>
        <label className='Lable-cf' htmlFor="message">Message<sup className="required-field">*</sup></label>
        <Textarea className='Taxtarea-cf' id="message" name="message" value={formData.message} onChange={handleChange} />
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
