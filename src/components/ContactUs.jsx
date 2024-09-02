import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <div className="bg-green-50 font-[sans-serif] lg:h-screen">
        <div className="grid lg:grid-cols-2 items-center gap-6 h-full sm:p-12 p-8 max-sm:p-4">
          {/* Form Section */}
          <div className="max-w-lg mx-auto lg:mx-0 lg:mr-10">
            <h2 className="text-4xl font-extrabold text-gray-800">Get In Touch</h2>
            <p className="text-sm text-gray-600 mt-4 leading-relaxed">
              Have a specific inquiry or looking to explore new opportunities? Our experienced team is ready to engage with you.
            </p>

            <form className="mt-8 bg-white rounded-lg p-6 shadow-md space-y-4 w-full">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none"
              />
              <textarea
                placeholder="Message"
                rows="6"
                className="w-full rounded-md px-6 bg-[#f0f1f2] text-sm pt-3 outline-none"
              ></textarea>
              <button
                type="button"
                className="text-gray-800 bg-green-200 hover:bg-green-300 font-semibold rounded-md text-sm px-6 py-3 block w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://readymadeui.com/images/analtsis.webp"
              className="lg:w-1/2 object-contain"
              alt="Contact Us"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
