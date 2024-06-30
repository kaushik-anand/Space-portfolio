"use client";
import React, { useRef, useState, FormEvent, ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Form validation
    if (!form.name || !form.email || !form.message) {
      setLoading(false);
      setError('All fields are required 🤨.');
      return;
    }

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
          setLoading(false);
          setMessageSent(true);
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert('Ahh, something went wrong. Please try again.');
        }
      );
  };

  return (
    <div className='mt-24' id="contact">
      <h1 className="flex flex-col items-center text-4xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-8 md:py-16">
        Let Us Work Together.
      </h1>
      <form className="w-full max-w-lg bg-transparent border-2 border-[#2A0E61] rounded-lg p-8 mx-auto relative z-30 opacity-100 md:max-w-2xl" onSubmit={handleSubmit}>
        <h2 className="text-lg md:text-2xl font-bold mb-5" style={{ color: "violet" }}>GET IN TOUCH 😀</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4 md:mb-8 ">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-3 py-2 md:py-3 text-base md:text-lg placeholder-gray-400 bg-transparent border border-[#2A0E61] rounded shadow text-white"
          />
        </div>
        <div className="mb-4 md:mb-8">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-3 py-2 md:py-3 text-base md:text-lg placeholder-gray-400 bg-transparent border border-[#2A0E61] rounded shadow text-white"
          />
        </div>
        <div className="mb-6 md:mb-8">
          <textarea
            placeholder="Your Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-3 py-2 md:py-3 text-base md:text-lg placeholder-gray-400 bg-transparent border border-[#2A0E61] rounded shadow text-white"
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 text-base md:text-lg font-bold text-white bg-black-500 hover:bg-violet-400 border border-[#7042f88b] rounded-md"
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
        {messageSent && (
          <p className="text-violet mt-4">Message Sent, Will get back to you at the earliest 😊.</p>
        )}
        <div className="flex justify-center mt-4 z-30">
          <a href="/Kaushik_Anand_Resume.pdf" download className="text-white px-4 py-2 bg-black-500 hover:bg-violet-400 rounded-md border border-[#7042f88b]">
            Download CV
          </a>
        </div>
      </form>
    </div>
  );
};

export default Contact;
