import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import HeroComponent from '../Components/HeroComponent'
import { motion } from 'framer-motion'

function ContactUs() {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    description: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Full name is required.';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email.';
    }
    if (!formData.reason) newErrors.reason = 'Please select a reason.';
    if (!formData.description || formData.description.length < 10) {
      newErrors.description = 'Description must be at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
    document.getElementsByTagName("form").submit();
      grecaptcha.execute();
      setFormData({ name: '', email: '', reason: '', description: '' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                
                <title>Contact us | Payscribe</title>
                <script src="https://www.google.com/recaptcha/api.js" async defer></script>
            </Helmet>
       {/* <HeroComponent
        customSectionStyle="flex flex-col justify-center items-center m-0 h-[30em] w-screen z-10"
        columns={1}
        title=''
        subtitle='Contact us'
        description={''}/> */}
<div className='flex justify-center items-center h-[60vh] bg-basic-gradient w-full'>
  <div>
<h2 className='text-white text-center font-semibold mb-5 md:mb-2 md:text-5xl text-3xl'>Contact us</h2>
  </div>
</div>
        <div className=' p-5 flex justify-center items-center w-full '>
        <div className="w-full flex justify-center mt-[8em] md:transform -translate-y-[8em]">
        <motion.form
          transition={{duration: 0.7, ease: 'easeOut' }}
          initial={{opacity: 0, y: 300}}
          whileInView={{opacity: 100, y: -100}}
          variants={{
            hidden: { opacity: 0, y: 100 },
            show: { opacity: 1, y: 0 },
          }}
        className="form-container p-5 md:w-[50%] w-full bg-slate-200/50 backdrop-blur-2xl rounded-xl"
        onSubmit={handleSubmit}
      >
        <h3 className="my-10 mt-10 text-sm p-3 font-medium text-center text-black/80">We want to send your question directly to the correct department and answer your questions as quickly as possible. To help us with this, we ask that you please complete the form below. Include any details you think may be helpful.</h3>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="md:m-5 m-3">
            <label className="font-semibold">Full name:</label>
            <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className={`px-5 py-2 my-3 rounded-lg w-full border text-md ${
                errors.name ? 'border-red-500' : 'border-slate-400'
              }`}
              onKeyDown={() => setErrors("")}
            />
            {errors.name && <small className="text-red-500">{errors.name}</small>}
          </div>
          <div className="md:m-5 m-3">
            <label className="font-semibold">Email</label>
            <br />
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className={`px-5 py-2 my-3 rounded-lg w-full border text-md ${
                errors.email ? 'border-red-500' : 'border-slate-400'
              }`}
              onKeyDown={() => setErrors("")}

            />
            {errors.email && <small className="text-red-500">{errors.email}</small>}
          </div>
        </div>
        <div className="md:m-5 m-3">
          <label className="font-semibold">Reason</label>
          <br />
          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className={`w-full rounded-lg p-3 my-3 border text-md ${
              errors.reason ? 'border-red-500' : 'border-slate-400'
            }`}
            onKeyDown={() => setErrors("")}

          >
            <option value="">Select an option</option>
            <option value="Bills Payment">Bills Payment</option>
            <option value="Card Issuing">Card Issuing</option>
            <option value="Payment Collection">Payment Collection</option>
            <option value="Custom Request">Custom Request</option>
            <option value="Payment links">Payment links</option>

          </select>
          {errors.reason && <small className="text-red-500">{errors.reason}</small>}
        </div>
        <div className="md:m-5 m-3">
          <label className="font-semibold">Description</label>
          <br />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Descriptive detail"
            className={`px-5 py-2 my-3 rounded-lg w-full border h-[10em] text-md ${
              errors.description ? 'border-red-500' : 'border-slate-400'
            }`}
            onKeyDown={() => setErrors("")}

          />
          {errors.description && <small className="text-red-500">{errors.description}</small>}
        </div>
        <div className="w-full flex justify-center">
          <button
            type="submit"
            data-sitekey="6LdkXqQUAAAAAPlxlHzz763aYs4WGxY0eFntsc20" data-callback="onSubmit"
            className=" g-recaptcha bg-primary text-white p-2 md:m-5 m-3 w-[80%] rounded-lg hover:bg-primary-dark transition duration-300"
          >
            Send
          </button>
        
        </div>
      </motion.form>
    </div>
        </div>
    </div>
  )
}

export default ContactUs