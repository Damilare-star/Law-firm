import React, { useState } from "react";
import axios from "axios";

function LawyerAIChat() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitQuestion = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;
    setLoading(true);
    setError("");
    setResponse("");

    try {
      const messages = [
        { role: "system", content: `You are a professional AI assistant for a law firm. Answer politely and informatively about the law firm's services, contact info, office hours, and consultations. Mention the email damilareabdulquadri76@gmail.com and phone +234-XXX-XXXXXXX if asked. Provide links to the law firm's GitHub and Twitter if requested. Do not provide legal advice; only describe services and info about the firm.` },
        { role: "user", content: `From: ${name || 'Anonymous'} (${email || 'no-email'})\nQuestion: ${question}` }
      ];

      const res = await axios.post('/api/chat', { model: 'gpt-3.5-turbo', messages });

      // openai v6 returns content under .choices[0].message.content
      const aiText = res.data?.choices?.[0]?.message?.content || res.data?.choices?.[0]?.text || JSON.stringify(res.data);
      setResponse(aiText);
    } catch (err) {
      console.error(err);
      setError('Could not reach AI. Try again later.');
    }

    setLoading(false);
  };

  return (
    <>
      {/* Small floating button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Ask Questions"
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center z-50"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {/* Modal form */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-40" onClick={() => setOpen(false)} />

          <form onSubmit={submitQuestion} className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-t-lg md:rounded-lg p-4 md:p-6 m-4 md:m-0 shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-semibold">Ask Our AI Assistant</h4>
              <button type="button" onClick={() => setOpen(false)} className="text-gray-600 hover:text-gray-900 dark:text-gray-300">✕</button>
            </div>

            <input
              type="text"
              placeholder="Your name (optional)"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full mb-2 px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
            />

            <input
              type="email"
              placeholder="Your email (optional)"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full mb-2 px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
            />

            <textarea
              placeholder="Type your question..."
              value={question}
              onChange={e => setQuestion(e.target.value)}
              rows={4}
              className="w-full mb-3 px-3 py-2 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
            />

            <div className="flex items-center gap-2">
              <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-60">
                {loading ? 'Sending...' : 'Send'}
              </button>
              <button type="button" onClick={() => { setQuestion(''); setResponse(''); }} className="text-sm text-gray-600 dark:text-gray-300">Clear</button>
            </div>

            {error && <p className="text-sm text-red-500 mt-3">{error}</p>}

            {response && (
              <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded text-sm whitespace-pre-wrap">
                <strong>AI:</strong>
                <div className="mt-2">{response}</div>
              </div>
            )}
          </form>
        </div>
      )}
    </>
  );
}

export default LawyerAIChat;
