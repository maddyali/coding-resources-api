const resources = [
  {
    name: "Building a Simple CRUD app with Node, Express, and MongoDB",
    url: "https://zellwk.com/blog/crud-express-mongodb/",
    description:
      "A comprehensive tutorial on working with Node, Express, and MongoDB.",
    keywords: [
      "node",
      "mongodb",
      "express",
      "javascript",
      "backend",
      "fullstack",
    ],
  },
  {
    name: "You Don't Know JS (book series) - 1st Edition",
    url: "https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/README.md",
    description:
      "A series of books diving deep into the core mechanisms of the JavaScript language.",
    keywords: [
      "javascript",
      "scope",
      "closures",
      "types",
      "async",
      "es6",
      "performance",
    ],
  },
  {
    name: "The Odin Project",
    url: "https://www.theodinproject.com/dashboard",
    description:
      "The Odin Project is a coding resource for absolute beginners that offers a free, open source curriculum. An ideal option for anyone wanting to learn coding online. The Odin Project has a full stack Ruby course and a full stack JavaScript course, in addition to an introduction to frameworks.",
    keywords: [
      "html",
      "css",
      "javascript",
      "top",
      "fullstack",
      "frontend",
      "backend",
      "projects",
      "course",
      "open source",
    ],
  },
  {
    name: "FreeCodeCamp",
    url: "https://www.freecodecamp.org/",
    description:
      "FreeCodeCamp is a non-profit that offers free online coding classes and certifications in specialties such as responsive web design, data visualization, machine learning and more.",
    keywords: [
      "html",
      "css",
      "javascript",
      "top",
      "fullstack",
      "frontend",
      "backend",
      "projects",
      "course",
      "open source",
    ],
  },
  {
    name: "Git explorer",
    url: "https://gitexplorer.com/",
    description:
      "Find the right git commands you need without digging through the web.",
    keywords: ["git", "command line", "tool"],
  },
  {
    name: "Postman",
    url: "https://www.postman.com",
    description:
      "Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.",
    keywords: [
      "api",
      "rest api",
      "api platform",
      "data",
      "build",
      "test",
      "workspace",
      "http requests",
      "tool",
    ],
  },

  {
    name: "Public API's",
    url: "https://github.com/public-apis/public-apis",
    description: "A collective list of free API's.",
    keywords: ["api", "public api", "rest api", "collaboration"],
  },

  {
    name: "Flexbox Froggy",
    url: "https://flexboxfroggy.com/",
    description: "A game for learning CSS flexbox.",
    keywords: ["css", "flexbox"],
  },
  {
    name: "Grid Garden",
    url: "https://cssgridgarden.com/",
    description: "A game for learning CSS grid.",
    keywords: ["css", "grid"],
  },

  {
    name: "Unsplash",
    url: "https://unsplash.com",
    description:
      "Beautiful, free images and photos that you can download and use for any project. Better than any royalty free or stock photos.",
    keywords: [
      "images",
      "free",
      "high-resolution",
      "wallpapers",
      "3d renders",
      "textures",
      "patterns",
      "experimental",
      "architecture",
      "nature",
      "business and work",
      "fashion",
      "film",
      "food",
      "drink",
      "street photography",
      "arts and culture",
      "royalty-free",
      "stock photo",
      "commercial",
      "personal projects",
    ],
  },
  {
    name: "Coolors",
    url: "https://coolors.co/palettes/trending",
    description:
      "Get inspired by thousands of beautiful color schemes and make something cool.",
    keywords: [
      "color palettes",
      "styles",
      "hex values",
      "color schemes",
      "color combinations",
      "design",
      "free",
      "css",
      "generator",
    ],
  },
  {
    name: "The Beginner's Guide to Networking",
    url: "https://thedeveloperbee.hashnode.dev/series/networking",
    description:
      "A multi-step guide to help you become more comfortable with networking, especially if you have never done it before!",
    keywords: ["networking", "connections", "guide", "how-to"],
  },
  {
    name: "Hunter",
    url: "https://hunter.io/",
    description:
      "Hunter lets you find professional email addresses in seconds and connect with the people that matter for your business. Enter a domain or company name to launch the search.",
    keywords: ["networking", "connections", "email", "job search", "tool"],
  },
  {
    name: "Figma",
    url: "https://www.figma.com/",
    description: "A collaborative web application for interface design.",
    keywords: [
      "design",
      "wireframe",
      "brainstorm",
      "ui",
      "user interface",
      "frontend",
      "tool",
    ],
  },
  {
    name: "Frontend Mentor",
    url: "https://www.frontendmentor.io/",
    description:
      "Improve your front-end skills by building real projects. Solve real-world HTML, CSS and JavaScript challenges whilst working to professional designs.",
    keywords: ["html", "css", "javascript", "challenges", "projects"],
  },

  {
    name: "Dribble",
    url: "https://dribbble.com/",
    description:
      "Dribbble is a self-promotion and social networking platform for digital designers and creatives. It serves as a design portfolio platform, jobs and recruiting site and is one of the largest platforms for designers to share their work online.",
    keywords: [
      "design",
      "create",
      "creative",
      "creatives",
      "ui",
      "user interface",
      "wireframe",
      "frontend",
    ],
  },
  {
    name: "Leetcode",
    url: "https://leetcode.com/",
    description:
      "LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.",
    keywords: [
      "technical interview",
      "interview prep",
      "job search",
      "leetcode",
      "coding problems",
      "data structures",
      "algorithms",
      "career",
      "career development",
    ],
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/",
    description:
      "HackerRank is the market-leading technical assessment and remote interview solution for hiring developers.",
    keywords: [
      "technical interview",
      "interview prep",
      "job search",
      "leetcode",
      "coding problems",
      "data structures",
      "algorithms",
      "career development",
      "career",
    ],
  },
  {
    name: "CV Compiler",
    url: "https://cvcompiler.com/",
    description:
      "CV Compiler parses, analyzes, and scores your resume, giving concise recommendations on how it can be improved.",
    keywords: ["job search", "resume", "interview prep", "tool"],
  },
  {
    name: "Codewars",
    url: "https://www.codewars.com/",
    description:
      "Codewars is an educational community for computer programming. On the platform, software developers train on programming challenges known as kata. These discrete programming exercises train a range of skills in a variety of programming languages, and are completed within an online integrated development environment.",
    keywords: [
      "coding challenges",
      "leetcode",
      "coding problems",
      "challenges",
      "career development",
      "javascript",
      "python",
      "r",
      "swift",
      "typescript",
      "c",
      "c++",
      "go",
      "sql",
      "ruby",
      "java",
      "frontend",
      "backend",
      "data science",
      "mobile",
      "game",
      "cybersecurity",
      "career",
    ],
  },
  /* 
  resource format:

  {
    name: "",
    url: "",
    description: "",
    keywords: [""]
  },
  */
];

module.exports = resources;
