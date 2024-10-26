const surveyQuestions = [
  {
    question: "1. How do you typically approach a problem you’ve never encountered before?",
    options: ["A) Research extensively to understand all aspects", "B) Break it down and tackle it in parts", "C) Trial and error until something works", "D) Seek advice or collaborate with others"]
  },
  {
    question: "2. When you learn a new programming language or tool, what drives your learning approach?",
    options: ["A) Mastery and understanding the 'why' behind it", "B) Efficiency to get results quickly", "C) Practical application and projects", "D) Structured step-by-step tutorials"]
  },
  {
    question: "3. You’ve come across a coding error you can’t fix. You are likely to:",
    options: ["A) Explore forums, documentation, and examples", "B) Debug until you find the root cause", "C) Take a break and revisit it later", "D) Consult someone more experienced"]
  },
  {
    question: "4. When tasked with learning an entirely new concept, which of these do you find most helpful?",
    options: ["A) Visual aids and real-life analogies", "B) Step-by-step written explanations", "C) Examples and hands-on practice", "D) Group discussions or collaborative sessions"]
  },
  {
    question: "5. Imagine you're asked to solve a complex problem with minimal guidance. How do you feel?",
    options: ["A) Excited – I like challenges", "B) Slightly stressed but motivated", "C) Anxious and overwhelmed", "D) Frustrated but willing to try"]
  },
  {
    question: "6. Which area of computer science excites you the most?",
    options: ["A) Artificial Intelligence and Machine Learning", "B) Cybersecurity and Ethical Hacking", "C) System Design and Networking", "D) Software Development and Automation"]
  },
  {
    question: "7. How often do you actively connect your coursework to real-world applications?",
    options: ["A) Frequently – it’s crucial for understanding", "B) Sometimes, when it’s obvious", "C) Rarely – I focus on the academic side", "D) I don’t see a direct connection"]
  },
  {
    question: "8. If you could solve any global problem using technology, what would it be?",
    options: ["A) Climate Change", "B) Health and Disease", "C) Education Accessibility", "D) Economic Inequality"]
  },
  {
    question: "9. What do you value most in team projects?",
    options: ["A) Collaboration and learning from peers", "B) Completing tasks efficiently", "C) Clarity in roles and organization", "D) Recognition and feedback"]
  },
  {
    question: "10. How do you typically handle failure in academic or technical tasks?",
    options: ["A) Reflect and try to improve", "B) Move on and focus on what’s next", "C) Feel disappointed but reattempt", "D) Lose motivation temporarily"]
  },
  {
    question: "11. How comfortable are you with tasks that involve ambiguity or uncertain outcomes?",
    options: ["A) I’m adaptable and open to experimenting", "B) I feel hesitant but will attempt it", "C) I prefer clear instructions and outcomes", "D) I struggle and avoid such tasks if possible"]
  },
  {
    question: "12. How do you view competition with your peers in an academic setting?",
    options: ["A) Positive – it motivates me", "B) Neutral – it doesn’t affect me much", "C) Pressuring but manageable", "D) Detrimental – I feel overwhelmed"]
  },
  {
    question: "13. What type of project role do you prefer to take on in group assignments?",
    options: ["A) Leader – guiding the project and team", "B) Researcher – providing knowledge and insights", "C) Executor – doing the core technical work", "D) Organizer – ensuring things stay on track"]
  },
  {
    question: "14. How do you react if the solution you initially thought of doesn't work?",
    options: ["A) I try to analyze what went wrong before attempting again", "B) I explore alternative solutions right away", "C) I get frustrated but keep trying", "D) I ask for feedback or guidance"]
  },
  {
    question: "15. When solving a problem, what drives your choice of method?",
    options: ["A) Efficiency and elegance of the solution", "B) Simplicity and reliability", "C) Originality – I try something new", "D) Previous knowledge – I stick to familiar methods"]
  },
  {
    question: "16. You’re working on a long-term project and experience a setback. Your first response is:",
    options: ["A) Reflect on how I could have prevented it", "B) Find a quick fix to get back on track", "C) Take a break before revisiting it", "D) Reconsider my approach to the project"]
  },
  {
    question: "17. How do you approach learning a complex algorithm that isn’t immediately intuitive?",
    options: ["A) Break it down and analyze each part", "B) Memorize key aspects and revisit details later", "C) Find real-world examples that use it", "D) Collaborate with classmates or friends"]
  },
  {
    question: "18. If you could instantly master one skill, which would you choose?",
    options: ["A) Problem-solving and critical thinking", "B) Communication and interpersonal skills", "C) Technical expertise in a specific area", "D) Adaptability and resilience"]
  },
  {
    question: "19. When working under tight deadlines, what is your usual approach?",
    options: ["A) Prioritize tasks and focus intensely", "B) Work consistently but adapt if needed", "C) Delegate and manage time efficiently", "D) Seek assistance if I need help meeting it"]
  },
  {
    question: "20. What is your primary way to manage stress?",
    options: ["A) Planning and breaking tasks into smaller steps", "B) Taking breaks and practicing mindfulness", "C) Reaching out to friends or mentors", "D) Reducing the workload where possible"]
  },
  {
    question: "21. When giving feedback to peers, you aim to be:",
    options: ["A) Honest but encouraging", "B) Constructive and actionable", "C) Supportive and positive", "D) Direct and to the point"]
  },
  {
    question: "22. How do you usually react if you receive negative feedback on a project?",
    options: ["A) Use it as a learning opportunity", "B) Feel disappointed but improve next time", "C) Take it personally at first but reflect later", "D) Feel discouraged and demotivated"]
  },
  {
    question: "23. What role do social relationships play in your academic success?",
    options: ["A) Important – they motivate me and provide support", "B) Somewhat helpful, but not critical", "C) Not very impactful – I work best independently", "D) I prefer a highly collaborative environment"]
  },
  {
    question: "24. Which soft skill do you find most challenging to improve?",
    options: ["A) Communication skills", "B) Time management", "C) Adaptability", "D) Emotional intelligence"]
  },
  {
    question: "25. What’s your biggest motivation for pursuing computer engineering?",
    options: ["A) Solving real-world problems", "B) Achieving personal and professional growth", "C) Building innovative technology", "D) Financial and career stability"]
  },
  {
    question: "26. What is your vision for your ideal career role?",
    options: ["A) Innovator and technology expert", "B) Team leader or project manager", "C) Researcher or academic", "D) Entrepreneur"]
  },
  {
    question: "27. How would you assess your understanding of emerging technologies like AI and blockchain?",
    options: ["A) Deeply informed – I stay up-to-date", "B) Familiar but could improve", "C) Basic – aware but need to learn more", "D) Minimal or no understanding"]
  },
  {
    question: "28. Which of these would you consider your greatest career asset?",
    options: ["A) Problem-solving skills", "B) Technical expertise", "C) Leadership and teamwork", "D) Adaptability and learning agility"]
  },
  {
    question: "29. Which of the following would best support your career preparation?",
    options: ["A) Technical skills and certification courses", "B) Networking and industry connections", "C) Mentorship and guidance", "D) Real-world projects and internships"]
  },
  {
    question: "30. What is the primary goal for your academic and career journey?",
    options: ["A) Contribute positively to society", "B) Attain a high level of expertise", "C) Gain financial and professional stability", "D) Innovate and disrupt industries"]
  },
  { question: "What do you consider the biggest skill gap for students in your field, and why?" },
  { question: "Describe a project or experience that tested your resilience. How did you handle it?" },
  { question: "If you could create a unique technological solution, what problem would it address, and why?" },
  { question: "What has been the most impactful learning experience in your academic journey so far?" },
  { question: "Describe your ideal learning environment for both academic and personal growth." }
];

export default surveyQuestions;