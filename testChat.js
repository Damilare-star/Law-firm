import axios from 'axios';

async function test() {
  try {
    const res = await axios.post('http://localhost:4000/api/chat', {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: 'Hello' }
      ]
    });
    console.log('response data:', res.data);
  } catch (e) {
    console.error('error', e.response ? e.response.data : e.message);
  }
}

test();
