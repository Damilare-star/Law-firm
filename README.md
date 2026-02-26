# Law Firm Portfolio with AI Chat

A modern law firm website with an integrated AI chatbot assistant.

## Features

- Responsive design with Tailwind CSS
- Multi-page routing with React Router
- AI-powered chat assistant using OpenAI API
- Services showcase
- Contact form
- Dark mode support

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file and add your OpenAI API key:
```
REACT_APP_OPENAI_API_KEY=your_api_key_here
```

3. Update `src/components/AIChat.jsx` to use the environment variable:
```javascript
Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
```

4. Start the development server:
```bash
npm start
```

## Important Notes

- Replace `YOUR_OPENAI_API_KEY` in AIChat.jsx with your actual API key
- The AI chat widget appears as a floating component in the bottom-right corner
- Contact email: damilareabdulquadri76@gmail.com
