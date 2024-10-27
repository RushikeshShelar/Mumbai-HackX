# Adaptive Learning Platform - Coding Saints

A personalized, AI-powered adaptive learning platform tailored for Computer Science engineering students. This platform dynamically generates custom learning paths based on students' learning pace, style, and knowledge gaps, ensuring a unique and targeted learning experience.

## Features

- **User Registration and Profile Setup:** Create a profile with information on learning preferences and pace.
- **Adaptive Learning Paths:** Automatically generated paths that adjust dynamically based on assessment performance.
- **Quiz and Assessment Integration:** Track progress and adapt content difficulty based on real-time assessment.
- **Feedback-driven Updates:** Student feedback on modules ensures continuous path optimization.

## Tech Stack

- **Frontend:** Next.js, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB, Groq Cloud (LLaMA AI integration)
- **Database:** MongoDB (NoSQL)
- **AI and Machine Learning:** LLaMA AI via Groq Cloud

---

## Getting Started

### Prerequisites

- **Node.js** (version 14 or above)
- **MongoDB** (local or cloud instance)
- **API Key for Groq Cloud**

### Running Locally

Follow these steps to set up and run the project locally:

#### Backend Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/RushikeshShelar/Mumbai-HackX.git
   cd Mumbai-HackX
   ```
2. **Navigate to Backend Folder:**

```bash
Copy code
cd backend
```

3. **Environment Variables:**

- Create a .env file in the backend folder with the following:

```bash
PORT=8000
MONGODB_URL="your_mongodb_url"
GROQ_API_KEY="your_groq_api_key"
```

4. Build Backend:

```bash
npm run build
```

5. Seed the Database:

```bash
npm run seed
```

6. Start Backend Server:

```bash
npm run start
```

Frontend and Chatbot Setup

1. Open a New Terminal:

- Navigate to the frontend folder.

```bash
cd frontend
```

3. Add OpenAI API Key:
4. Open src/component/chatbot/chatbot.js and add your OpenAI API key where indicated:

```bash
const openai = new OpenAI({
  apiKey: 'Your Api key',
});
```

3. Run Chatbot Backend:

```bash
npm run chatbot
```

4. Start Frontend Server:

```bash
npm run dev
```
