export const RULES = {
  quiz: [
    "One MCQ buzzer round, 25–30 questions, four options (A/B/C/D), one correct answer",
    "1 mark per question correct answer and -1 mark for wrong answer",
    "About 10-15 seconds per question",
    "Topics: AI, computer fundamentals, networking, Python/Java, DBMS & SQL, cybersecurity, cloud, latest tech",
    "No mobile phones or internet; tie-breaker question if required",
    "Coordinator/judges' decision is final",
  ],
  code: [
    "Languages: C, C++, Java and Python",
    "Stage 1 – Logic Clash (45 min): 5 logical questions, 4 mark each, no specific language required",
    "Same problem and test cases for every language; judged on correctness, hidden tests, efficiency and submission time",
    "Total: Logic Clash 20 + Final Clash 30 = 50 marks",
  ],
  build: [
    "Teams of 2 receive a real-world problem at the start and build a tech solution",
    "Output can be an app, website, AI tool, hardware concept, prototype or UI/model",
    "50 minutes to create; every team then presents (presentation is compulsory)",
    "Independent work; internet/reference allowed; no plagiarism",
    "AI tools allowed, but you must explain where and how you used them",
    "Judged on innovation, problem understanding, technical implementation, usefulness and presentation",
  ],
  pitch: [
    "5-minute pitch + 3-minute Q&A per team",
    "Structure: Problem → Solution → Target Users → Technology → Business Model → Future Scope",
    "Idea must be original or significantly improved; PPT/prototype allowed",
    "Fixed time with over-time penalty; professional and respectful presentation",
    "Sharks may challenge on differentiation, users, technology, competition and revenue model",
  ],
};

export const OBJECTIVES = [
  "Promote practical application of computer and technology knowledge",
  "Encourage logical thinking, coding ability, creativity, innovation and teamwork",
  "Provide a competitive but learning-oriented technical platform",
  "Develop communication, presentation, problem-solving and entrepreneurial skills",
];

export const AWARDS = [
  ["Tech AI Quiz", "Winner & Runner-up"],
  ["Code Clash", "Champion & Runner-up"],
  ["Build It", "Innovation Challenge Winner & Runner-up"],
  ["Shark Pitch Battle", "Best Pitch & Runner-up"],
];

export const COMMITTEE = [
  ["Faculty Event Coordinators", "Meenakshi Dixit"],
  ["Student Event Head", "Kavya Bajpai"],
  ["Student Co-Coordinator", ["Anupama Pandey", "Anand Tiwari", "Priyanshu Sachan"]],
  ["Technical Coordinator", "Shekhar Pandey"],
  ["Discipline Coordinator", "Aditya Shukla"],
];

export const EVENT = {
  name: "TechNova 2026",
  theme: "Think. Build. Innovate. Pitch.",
  date: "13 October 2026",
  timing: "9:15 AM – 4:00 PM",
  fee: 49,
  feeNote: "per team",
  venue: "CMS & VSGOI",
  paymentUPI: "yourupi@bank",
};


export const EVENTS = [
  {
    id: "quiz", title: "Tech AI Quiz", tagline: "One MCQ buzzer round",
    duration: "30–45 min", participants: "Individual / Teams of 2",
    facultyCoord: ["Akshita Mishra", "Prateek trivedi"], studentCoord: ["Anand Tiwari", "Ashish Dubey"]
  },
  {
    id: "code", title: "Code Clash", tagline: "Think Fast. Code Smart.",
    duration: "~1 hr", participants: "Individual / Teams of 2",
    facultyCoord: ["Hiten Gupta", "Shikha Sharma"], studentCoord: ["Priyanshu Sachan", "Sarthak Dixit"]
  },
  {
    id: "build", title: "Build It – Innovation Challenge", tagline: "Problem → prototype → presentation",
    duration: "~1 hr", participants: "Individual / Teams of 2",
    facultyCoord: ["Richa Shukla", "Anupama Pandey"], studentCoord: ["Kavya Bajpai", "Adarsh Shukla"]
  },
  {
    id: "pitch", title: "Shark Pitch Battle", tagline: "5-min pitch + 3-min Q&A",
    duration: "~1 hr", participants: "Individual / Teams of 2",
    facultyCoord: ["Deepali Nishad", "Ramjee Tiwari"], studentCoord: ["Anupama Pandey", "Nitish Kumar"]
  },
];

export const SCHEDULE = [
  ["9:15–9:45 AM", "Registration & Check-in"],
  ["9:40–9:50 AM", "Welcome & Inauguration"],
  ["9:50–10:00 AM", "Common Instructions"],
  ["10:00–10:45 AM", "Tech AI Quiz"],
  ["10:45–11:00 AM", "Transition Break"],
  ["11:00 AM–12:00 PM", "Code Clash"],
  ["12:00–12:10 PM", "Break"],
  ["12:10–1:10 PM", "Shark Pitch Battle"],
  ["1:10–1:45 PM", "Lunch Break"],
  ["1:45–2:45 PM", "Build-It Innovation Challenge"],
  ["2:45–3:20 PM", "Final Evaluation"],
  ["3:20–3:30 PM", "Closing Ceremony"],
  ["3:30–4:00 PM", "Award Ceremony"],
];