import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Being part of SDP has shown me that real change starts in our neighborhoods. We're building something special here.",
    author: "Sarah Chen",
    role: "Zone Team Leader, Vancouver",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    quote: "The consensus-driven approach means everyone's voice matters. It's democracy as it should be.",
    author: "Michael Thompson",
    role: "Community Organizer, Toronto",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    quote: "SDP's structure ensures that policies reflect what communities actually need, not what politicians think we need.",
    author: "Marie Leblanc",
    role: "Neighborhood Coordinator, Montreal",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <h2 className="text-center text-3xl font-extrabold text-sdp-navy sm:text-4xl">
            Neighborhood Success Stories
          </h2>
          <div className="mt-12">
            <div className="mx-auto max-w-3xl">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-opacity duration-500 absolute w-full ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <figure className="relative bg-white p-6 rounded-xl shadow-lg">
                    <blockquote className="relative">
                      <p className="text-xl text-gray-800 font-medium">"{testimonial.quote}"</p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-start">
                      <div className="overflow-hidden rounded-full bg-gray-50">
                        <img
                          className="h-12 w-12 rounded-full"
                          src={testimonial.image}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-base font-medium text-gray-900">{testimonial.author}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-center gap-4">
              <button
                onClick={prev}
                className="rounded-full bg-sdp-navy p-2 text-white hover:bg-sdp-navy/90 focus:outline-none"
              >
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="rounded-full bg-sdp-navy p-2 text-white hover:bg-sdp-navy/90 focus:outline-none"
              >
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}