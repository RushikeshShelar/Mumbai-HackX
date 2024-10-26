import json
from groq import Groq
from datetime import datetime

# Define user preferences and learning path data
style = "visual"  # Example style, update based on user profile
pace = "moderate"  # Example pace, update based on user profile
subject = "Operating Systems"  # Example subject, update based on context

# Construct the desired structure as a Python dictionary
desired_structure = {
    "learningPath": [
        {
            "subject": subject,
            "modules": [
                {
                    "moduleName": "Introduction to Operating Systems",
                    "difficulty": 1,
                    "status": "not started",
                    "isCompleted": False,
                    "description": "Module overview here",
                    "chapters": [
                        {
                            "chapterName": "Chapter 1: Basics of Operating Systems",
                            "isCompleted": False,
                            "videoLink": "http://example.com/video1",
                            "articleLink": "http://example.com/article1"
                        },
                        {
                            "chapterName": "Chapter 2: Process Management",
                            "isCompleted": False,
                            "videoLink": "http://example.com/video2",
                            "articleLink": "http://example.com/article2"
                        }
                    ]
                }
            ]
        }
    ]
}

# Convert to a JSON-formatted string
structure_json = json.dumps(desired_structure, indent=2)

# Construct the prompt for Groq
custom_prompt = (
    f"Generate a structured learning path JSON that matches the following schema exactly:\n\n{structure_json}\n\n"
    f"The learning path should be customized for a Computer Science student, with a {pace} learning pace and a preference for {style} learning style. For the subject of {subject}"
    f"Fill in the modules, performance, and chapters to match this structure.It should contain exact 6 modules. The No. of Chapters can vary"
)

client = Groq()
completion = client.chat.completions.create(
    model="llama3-70b-8192",
    messages=[
        {
            "role": "user",
            "content": custom_prompt
        }
    ],
    temperature=1,
    max_tokens=2048,
    top_p=1,
    stream=True,
    stop=None,
)

# Print the response
for chunk in completion:
    print(chunk.choices[0].delta.content or "", end="")
