import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

// Load .env.local so local key works in development
dotenv.config({ path: '.env.local' });

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({ apiKey: process.env.REACT_APP_OPENAI_API_KEY || process.env.OPENAI_API_KEY });

app.post('/api/chat', async (req, res) => {
  try {
    const { model, messages } = req.body;

    const completion = await client.chat.completions.create({
      model: model || 'gpt-3.5-turbo',
      messages,
      temperature: 0.2,
      max_tokens: 800,
    });

    res.json(completion);
  } catch (err) {
    console.error('OpenAI error', err);
    res.status(500).json({ error: err.message || 'OpenAI request failed' });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`AI proxy listening on http://localhost:${port}`));
