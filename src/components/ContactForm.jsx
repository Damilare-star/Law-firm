import React, { useState } from "react";

function ContactForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Question sent: ${message}`);
    setMessage("");
  };

  return (
    <section className="py-16 px-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Ask Us a Question</h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
        Have a legal question? Send it to us and we'll get back to you shortly.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          placeholder="Type your question here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px]"
          required
        />
        <button type="submit" className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition font-semibold">
          Send Question
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
