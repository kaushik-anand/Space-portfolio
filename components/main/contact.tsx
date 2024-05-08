// Import necessary modules and types
"use client";
import React, { useRef, useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../sub/style';
// import { EarthCanvas } from './canvas';
import SectionWrapper from '../sub/hoc/SectionWrapper';
import  Variants, { slideIn }  from '../sub/utils/motion';

// Define the Contact component
const Contact: React.FC = () => {
  // Define refs and state
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false); // State to track if the message was sent successfully

  // Handle form input change
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Send email using emailjs
    emailjs
      .send(
        'service_ayae2bd',
        'template_6cpf7st',
        {
          from_name: form.name,
          to_name: 'Kaushik Anand',
          from_email: form.email,
          to_email: 'kaushikanand1724@gmail.com',
          message: form.message,
        },
        'hid8kaMsapSy8X5rc'
      )
      .then(
        () => {
          // Reset form and loading state
          setLoading(false);
          setMessageSent(true); // Set messageSent state to true
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          // Log error and show alert
          setLoading(false);
          console.error(error);
          alert('Ahh, something went wrong. Please try again.');
        }
      );
  };

  return (
    <div className='mt-24'>
    <form className="w-1/2 bg-transparent border-2 border-gray-300 rounded-lg p-8 mx-auto relative z-30 opacity-100 ">
      <h2 className="text-2xl font-bold mb-5" style={{ color: "violet" }}>GET IN TOUCH.</h2>
      <div className="mb-8" id="contact">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-3 py-4 text-lg placeholder-gray-400 bg-transparent border border-gray-300 rounded shadow text-white"
        />
      </div>
        <div className="mb-8">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-3 py-4 text-lg placeholder-gray-400 bg-transparent border border-gray-300 rounded shadow text-white"
          />
        </div>
        <div className="mb-8">
          <input
            type="text"
            placeholder="Your Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full px-3 py-12 text-lg placeholder-gray-400 bg-transparent border border-gray-300 rounded shadow text-white"
          />
          
        </div>
        <button
          onClick={handleSubmit} // Handle form submission on button click
          className="px-6 py-3 text-lg font-bold text-white  duration-150 ease-linear bg-black-500 hover:bg-violet-400 border border-[#7042f88b]"
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
        {messageSent && (
        <p className="text-violet mt-4">Message Sent, Will get back to you at the earliest.</p>
      )}
      <div className="flex justify-center mt-4 z-30">
        <a href="/Kaushik_Anand_resume.pdf" download className="text-white px-4 py-2 bg-black-500 hover:bg-violet-400 rounded-md border border-[#7042f88b]">
          Download CV
        </a>

      </div>
      </form>

     
    </div>
  );
};

// Export the Contact component wrapped in SectionWrapper
export default Contact;
