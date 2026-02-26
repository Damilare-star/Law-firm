import React from "react";

function About() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              About Our Firm
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Our law firm has over 15 years of experience helping clients navigate complex legal matters. 
              We are dedicated, professional, and committed to protecting your rights.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              With a team of experienced attorneys specializing in various practice areas, we provide 
              comprehensive legal solutions tailored to your unique situation.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Our commitment to excellence and client satisfaction has earned us a reputation as one of 
              the most trusted law firms in the region.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-300 mb-1">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Cases Handled</div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-300 mb-1">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Success Rate</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-blue-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Experienced legal professionals with proven track records</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Personalized attention to every case</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Transparent communication throughout the process</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Competitive rates and flexible payment options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
