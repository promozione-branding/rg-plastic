
import React, { useState } from "react";

const PopupForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Machinery Enquiry:", formData);
    alert("Thank you! Your enquiry has been submitted.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      product: "",
      message: "",
    });

    onClose?.();
  };

  if (!isOpen) return null;

  const inputClasses =
    "w-full rounded-lg border border-slate-700 bg-[#111e32] px-4 py-2 text-sm text-white placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";

  const labelClasses =
    "mb-2 block text-sm font-semibold text-slate-200";

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-slate-950/85 p-3 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="machinery-popup-title"
        className="relative my-auto max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-blue-500/30 bg-[#0b1425] p-6 text-white shadow-2xl shadow-black/50 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close popup"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-2xl text-slate-300 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
        >
          &times;
        </button>

        {/* Header */}
        <div className="mb-7 pr-8">
          <span className="mb-4 inline-block rounded border border-blue-500/30 bg-blue-500/10 px-3 py-2 text-[11px] font-extrabold tracking-[0.2em] text-blue-400">
            INDUSTRIAL SOLUTIONS
          </span>

          <h2
            id="machinery-popup-title"
            className="text-3xl font-extrabold leading-tight text-white sm:text-4xl"
          >
            Get a{" "}
            <span className="text-blue-500">Quick Quote</span>
          </h2>

          <p className="mt-3 text-sm leading-5 text-slate-400">
            Tell us your machinery requirements. Our team will
            get back to you shortly.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Name */}
            <div>
              <label htmlFor="name" className={labelClasses}>
                Full Name <span className="text-blue-400">*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                className={inputClasses}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelClasses}>
                Email Address <span className="text-blue-400">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                className={inputClasses}
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className={labelClasses}>
                Phone Number <span className="text-blue-400">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
                className={inputClasses}
                required
              />
            </div>

            {/* Product */}
            <div>
              <label htmlFor="product" className={labelClasses}>
                Machinery / Product{" "}
                <span className="text-blue-400">*</span>
              </label>
              <select
                id="product"
                name="product"
                value={formData.product}
                onChange={handleChange}
                className={`${inputClasses} [color-scheme:dark]`}
                required
              >
                <option value="">Select a product</option>
                <option value="Industrial Machinery">
                  Industrial Machinery
                </option>
                <option value="CNC Machines">CNC Machines</option>
                <option value="Hydraulic Equipment">
                  Hydraulic Equipment
                </option>
                <option value="Automation Systems">
                  Automation Systems
                </option>
                <option value="Spare Parts">Spare Parts</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label htmlFor="message" className={labelClasses}>
                Your Requirements{" "}
                <span className="text-blue-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Describe your machinery requirements..."
                value={formData.message}
                onChange={handleChange}
                className={`${inputClasses}  resize-y`}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 font-bold text-white shadow-lg shadow-blue-900/20 transition duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-blue-600 hover:shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0b1425]"
          >
            Submit Enquiry
            <span className="text-xl" aria-hidden="true">
              &rarr;
            </span>
          </button>

        </form>
      </div>
    </div>
  );
};

export default PopupForm;
