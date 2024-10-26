import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey:  'APIKEYHERE',
});

// Enhanced helper function to check for education-related keywords
const isEducationQuestion = (message) => {
  const educationKeywords = [
    'marks', 'grading', 'exam', 'school', 'education',
    'homework', 'assignment', 'study', 'university', 'course',
    'tutoring', 'lecture', 'scholarship', 'test', 'student'
  ];
  return educationKeywords.some(keyword => message.toLowerCase().includes(keyword));
};

// API endpoint
app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;

  if (!isEducationQuestion(userMessage)) {
    return res.json({ reply: "Please ask an education-related question." });
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: userMessage }],
    });

    // Get the full reply without limiting to 15 words
    const reply = response.choices[0].message.content.trim();

    // Optionally, limit the character count to improve readability (e.g., 250 characters)
    const limitedReply = reply.length > 250 ? reply.slice(0, 250) + '...' : reply;

    res.json({ reply: limitedReply });
  } catch (error) {
    console.error(error);
    res.json({ reply: "I'm sorry, something went wrong. Please try again later." });
  }
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
