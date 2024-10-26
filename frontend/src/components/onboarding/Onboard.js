import Groq from 'groq-sdk';

const groq = new Groq({apiKey:'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'});

async function main(userAnswers) {
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Build a custom user type based on the following answers:\n${userAnswers}`,
      }
    ],
    model: "llama-3.1-8b-instant",
    temperature: 1,
    max_tokens: 1024,
    top_p: 1,
    stream: true,
    stop: null
  });

  for await (const chunk of chatCompletion) {
    process.stdout.write(chunk.choices[0]?.delta?.content || '');
  }
}

// Example usage:
// Assume you call this function with user answers formatted as a string
const exampleUserAnswers = `
What is your preferred mode of transportation?: Car
What type of cuisine do you prefer?: Italian
What is your favorite hobby?: Reading
`;

// Call the main function with the user answers
main(exampleUserAnswers);
