import type { Dictionary } from './types';

export const en = {
  "title": "Alessandro Rizzo — Full Stack Software Developer",
  "description": "Alessandro Rizzo, Full Stack Software Developer based in Trento. Frontend and backend development, software design and personal projects.",
  "location": "Trento, Italy",
  "photoAlt": "Portrait of Alessandro Rizzo",
  "introduction": "I am a full stack software developer with a degree in Computer Science from the Università di Trento. I develop frontend and backend applications, with a particular interest in software design and application architecture.",
  "biography": [
    "I currently work at Argentea S.r.l. (Zucchetti Group), where I contribute to the development and modernisation of a complex business management platform. My work includes refactoring, technology upgrades and improvements to the user experience, as well as helping the team improve its development tools and processes.",
    "Previously, at Job Informatica, I worked on production management applications for Electrolux.",
    "I also spend time developing personal projects, exploring new technologies and experimenting with software solutions."
  ],
  "showMore": "Show more",
  "showLess": "Show less",
  "newTab": " (opens in a new tab)",
  "headerSocial": "Social profiles",
  "footerSocial": "Social profiles and projects",
  "skipToContent": "Skip to content",
  "duration": {
    "year": "year",
    "years": "years",
    "month": "month",
    "months": "months",
    "conjunction": "and",
    "label": "Duration"
  },
  "timeline": {
    "technologies": "Technologies used",
    "experience": "Work Experience",
    "education": "Education",
    "present": "Present",
    "current": "Current",
    "details": "Details",
    "close": "Close",
    "officialWebsite": "Official website"
  },
  "technologies": {
    "title": "Technologies",
    "browse": "Technologies: horizontally scrollable list"
  },
  "motory": {
    "personalProject": "Personal Project",
    "name": "Motory",
    "mockupAlt": "The Motory application on a MacBook and iPhone, showing vehicle management and maintenance records.",
    "tagline": "Your car's story",
    "description": "An application to keep track of your vehicle’s history, manage maintenance and plan future work.",
    "visit": "Discover Motory"
  },
  "copyright": "All rights reserved.",
  "role": "Full Stack Software Developer",
  "languageLabel": "Language",
  "entries": {
    "argentea": {
      "role": "Full Stack Software Developer",
      "logoAlt": "Argentea — pay smart, feel good. — Zucchetti Group",
      "paragraphs": [
        "At Argentea S.r.l. (Zucchetti Group), I contribute to the development and modernisation of a complex business management platform through refactoring, technology upgrades and interface improvements.",
        "I also help improve development tools and workflows, contributing to the adoption of more modern processes for code management and team collaboration."
      ]
    },
    "job-informatica": {
      "role": "Frontend Developer",
      "paragraphs": [
        "At Job Informatica, I contributed to the frontend development of business applications for Electrolux, focused on managing and monitoring production processes.",
        "I worked on web interfaces and integration with application services, gaining experience in developing software for industrial environments."
      ]
    },
    "unitn": {
      "role": "Bachelor's Degree in Computer Science",
      "documentLabel": "Read thesis",
      "paragraphs": [
        "During my university studies, I took part in the SportTech project, contributing to the development of a management platform for the SanbàPolis sports centre in Trento, used by Aquila Basket and Trentino Volley.",
        "My work focused on designing and implementing data management: from building a relational database and developing a video editing system with FFmpeg to managing IoT sensor data using InfluxDB and dedicated web services."
      ]
    },
    "itt": {
      "role": "Upper Secondary School Diploma",
      "paragraphs": [
        "During secondary school, I helped develop ErasmusReview, a group project for managing and evaluating work placements and Erasmus experiences.",
        "The platform supported different user types, including students, schools and companies, and made it possible to organise training placements and collect structured evaluations of participants’ experiences.",
        "The application was developed in PHP with a MySQL database, following an MVC architecture."
      ]
    }
  }
} as const satisfies Dictionary;
