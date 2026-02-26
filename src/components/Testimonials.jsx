import React from "react";

const testimonials = [
  { 
    name: "John Doe", 
    role: "Business Owner",
    text: "Excellent service and professional team! They handled my corporate case with expertise and dedication. Highly recommended!",
    rating: 5
  },
  { 
    name: "Jane Smith", 
    role: "Individual Client",
    text: "They helped me through a difficult family law matter with care and compassion. I couldn't have asked for better representation.",
    rating: 5
  },
  { 
    name: "Michael Johnson", 
    role: "Real Estate Developer",
    text: "Outstanding legal advice on property transactions. Their attention to detail saved me from potential legal issues.",
    rating: 5
  },
  { 
    name: "Sarah Williams", 
    role: "Entrepreneur",
    text: "Professional, responsive, and results-driven. They exceeded my expectations in every way.",
    rating: 5
  },
];

function Testimonials() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Don't just take our word for it
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic mb-6 text-lg">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
