import Groq from "groq-sdk";
import dotenv from "dotenv";
dotenv.config();

// Initialize Groq with your API key
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Function to generate a structured learning path
export async function generateLearningPath(subject: string, pace: string, style: string) {
  const learningPath = {
    learningPath: [
      {
        subject: subject,
        modules: [
          {
            moduleName: "Introduction to Operating Systems",
            difficulty: 1,
            status: "not started",
            isCompleted: false,
            description: "Module overview here",
            chapters: [
              {
                chapterName: "Chapter 1: Basics of Operating Systems",
                isCompleted: false,
                videoLink: "http://example.com/video1",
                articleLink: "http://example.com/article1"
              },
              {
                chapterName: "Chapter 2: Process Management",
                isCompleted: false,
                videoLink: "http://example.com/video2",
                articleLink: "http://example.com/article2"
              }
            ]
          }
        ]
      }
    ]
  };

  // Convert the learning path structure to a JSON-formatted string
  const structureJson = JSON.stringify(learningPath, null, 2);

  // Construct the prompt for Groq
  const customPrompt = `
    Generate a structured learning path JSON that matches the following schema exactly:

    ${structureJson}

    The learning path should be customized for a Computer Science student, with a ${pace} learning pace and a preference for ${style} learning style. 
    For the subject of ${subject}, fill in the modules, performance, and chapters to match this structure. 
    It should contain exactly 6 modules. The number of chapters can vary.
  `;

  // Call the Groq API to get the chat completion
  const chatCompletion = await groq.chat.completions.create({
    model: "llama3-70b-8192",
    messages: [
      {
        role: "user",
        content: customPrompt,
      },
    ],
    temperature: 1,
    max_tokens: 2048,
    top_p: 1,
    stream: true,
    stop: null,
  });

  let output = '';
  // Handle the stream data to print the completion returned by the LLM.
  for await (const chunk of chatCompletion) {
    output += chunk.choices[0]?.delta?.content || '';
  }

  // Extract and store only the JSON part
  let learningPathJson;
  const jsonStartIndex = output.indexOf('{'); // Find the starting index of the JSON part
  const jsonEndIndex = output.lastIndexOf('}'); // Find the ending index of the JSON part

  if (jsonStartIndex !== -1 && jsonEndIndex !== -1) {
    const jsonString = output.slice(jsonStartIndex, jsonEndIndex + 1);
    try {
      learningPathJson = JSON.parse(jsonString);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      learningPathJson = { error: "Failed to parse JSON response." };
    }
  } else {
    learningPathJson = { error: "JSON part not found in the response." };
  }


  // Return the parsed JSON
  return learningPathJson;
}

export async function evaluateLearningStyle(answers: string) {
  // Construct the prompt for Groq

  const customPrompt = `
    Based on the following student answers, determine the preferred learning style (audio, visual, reading) and learning pace (slow, medium, fast). 
    Answers: ${answers}

    Provide the learning style and pace in JSON format with the keys "learningStyle" and "learningPace".
  `;
  // Call the Groq API to get the chat completion
  const chatCompletion = await groq.chat.completions.create({
    model: "llama3-70b-8192",
    messages: [
      {
        role: "user",
        content: customPrompt,
      },
    ],
    temperature: 1,
    max_tokens: 2048,
    top_p: 1,
    stream: true,
    stop: null,
  });

  console.log("COMPLETION",chatCompletion);
  let output = '';
  // Handle the stream data to print the completion returned by the LLM.
  for await (const chunk of chatCompletion) {
    output += chunk.choices[0]?.delta?.content || '';
  }

  // Extract and store only the JSON part
  let learningStyleJson;
  const jsonStartIndex = output.indexOf('{'); // Find the starting index of the JSON part
  const jsonEndIndex = output.lastIndexOf('}'); // Find the ending index of the JSON part

  if (jsonStartIndex !== -1 && jsonEndIndex !== -1) {
    const jsonString = output.slice(jsonStartIndex, jsonEndIndex + 1);
    try {
      learningStyleJson = JSON.parse(jsonString);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      learningStyleJson = { error: "Failed to parse JSON response." };
    }
  } else {
    learningStyleJson = { error: "JSON part not found in the response." };
  }

  // Return the parsed JSON
  return learningStyleJson;
}
