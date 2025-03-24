import React, { useState } from 'react';

export default function JoinMovement() {
  const [formData, setFormData] = useState({
    email: '',
    postalCode: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log('Form submitted:', formData);
  };

  return (
    <section id="join-movement" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-sdp-navy">Join the Movement</h2>
          <p className="mt-4 text-lg text-center text-gray-600">
            Connect with your local team and help build a better democracy
          </p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sdp-orange focus:border-sdp-orange"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
                Postal Code
              </label>
              <div className="mt-1">
                <input
                  id="postalCode"
                  name="postalCode"
                  type="text"
                  required
                  pattern="[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]"
                  placeholder="A1A 1A1"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sdp-orange focus:border-sdp-orange"
                  value={formData.postalCode}
                  onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sdp-orange hover:bg-sdp-orange/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sdp-orange"
              >
                Connect with Your Local Team
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}