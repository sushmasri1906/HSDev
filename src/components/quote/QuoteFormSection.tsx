import React from "react";

export default function QuoteFormSection() {
  return (
    <section className="bg-[#0c0c1d] text-white py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let’s Turn Your Vision Into a Powerful Reality
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          Share your project details, and we’ll provide a tailored quote that aligns with your goals and budget. Our team is ready to bring your ideas to life with creativity, strategy, and precision.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#14142b] p-8 rounded-2xl shadow-xl">
          <div className="flex flex-col">
            <label className="mb-2 text-sm text-gray-400">Your name *</label>
            <input
              type="text"
              className="px-4 py-3 rounded-lg bg-[#1f1f3a] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 text-white"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm text-gray-400">Your email *</label>
            <input
              type="email"
              className="px-4 py-3 rounded-lg bg-[#1f1f3a] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 text-white"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm text-gray-400">Phone number *</label>
            <div className="flex">
              <span className="bg-[#1f1f3a] border border-gray-700 text-gray-300 px-4 flex items-center rounded-l-lg">
                +91
              </span>
              <input
                type="tel"
                className="px-4 py-3 w-full rounded-r-lg bg-[#1f1f3a] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 text-white"
                placeholder="9876543210"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm text-gray-400">Select your services *</label>
            <select
              className="px-4 py-3 rounded-lg bg-[#1f1f3a] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 text-white"
              required
            >
              <option value="">Choose a service</option>
              <option value="uiux">UI/UX Design</option>
              <option value="brand">Brand Design</option>
              <option value="webflow">Webflow Development</option>
              <option value="nocode">No-code Development</option>
            </select>
          </div>

          <div className="md:col-span-2 flex flex-col">
            <label className="mb-2 text-sm text-gray-400">Briefly describe your project</label>
            <textarea
              rows={5}
              className="px-4 py-3 rounded-lg bg-[#1f1f3a] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 text-white"
              placeholder="Tell us about your project goals, timelines, and expectations..."
            ></textarea>
          </div>

          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-[#1c00d3] hover:bg-[#000fb5] transition px-8 py-3 rounded-xl font-semibold shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
