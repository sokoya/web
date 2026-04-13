import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    description: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
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
      console.log('Form Submitted:', formData);
      // Clear form after successful submission
      setFormData({ name: '', email: '', reason: '', description: '' });
      alert('Form submitted successfully!');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="w-full flex justify-center">
      <motion.form
        transition={{ duration: 1, ease: 'easeInOut' }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="form-container p-5 w-[50%] bg-slate-200/50 backdrop-blur-2xl rounded-xl"
        onSubmit={handleSubmit}
      >
        <h3 className="my-10 mt-10 text-xl font-bold text-center">Reach out to us</h3>
        <div className="flex">
          <div className="m-5">
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
            />
            {errors.name && <small className="text-red-500">{errors.name}</small>}
          </div>
          <div className="m-5">
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
            />
            {errors.email && <small className="text-red-500">{errors.email}</small>}
          </div>
        </div>
        <div className="m-5">
          <label className="font-semibold">Reason</label>
          <br />
          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className={`w-full rounded-lg p-3 my-3 border text-md ${
              errors.reason ? 'border-red-500' : 'border-slate-400'
            }`}
          >
            <option value="">Select an option</option>
            <option value="Make Enquiries">Make Enquiries</option>
            <option value="Suggestion">Suggestion</option>
            <option value="Ask questions">Ask questions</option>
          </select>
          {errors.reason && <small className="text-red-500">{errors.reason}</small>}
        </div>
        <div className="m-5">
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
          />
          {errors.description && <small className="text-red-500">{errors.description}</small>}
        </div>
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="bg-primary text-white p-2 m-5 w-[80%] rounded-lg hover:bg-primary-dark transition duration-300"
          >
            Send
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default Form;
