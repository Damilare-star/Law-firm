import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      }}></div>
      
      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Professional Legal Services
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-blue-100 max-w-3xl mx-auto">
          Protecting your rights with experience and dedication
        </p>
        <p className="text-lg mb-8 text-blue-200 max-w-2xl mx-auto">
          Over 15 years of excellence in legal representation. We fight for justice and deliver results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact" className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition transform hover:scale-105 shadow-lg">
            Book Free Consultation
          </Link>
          <Link to="/services" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-lg">
            Our Services
          </Link>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
            <div className="text-4xl font-bold text-yellow-400 mb-2">15+</div>
            <div className="text-lg">Years Experience</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
            <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-lg">Cases Won</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
            <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
            <div className="text-lg">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
