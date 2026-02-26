import React from "react";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Schedule a free consultation with our experienced legal team today
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/contact" 
            className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition transform hover:scale-105 shadow-lg"
          >
            Book Free Consultation
          </Link>
          <a 
            href="tel:+234XXXXXXXXXX" 
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-lg"
          >
            Call Now
          </a>
        </div>
        <p className="mt-8 text-blue-200">
          Email: damilareabdulquadri76@gmail.com | Phone: +234-XXX-XXXXXXX
        </p>
      </div>
    </section>
  );
}

export default CallToAction;
