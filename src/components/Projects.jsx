import ProjectCard from "./ProjectCard";
import FinTrackr1 from "../assets/FinTrackr/1.png"
import FinTrackr2 from "../assets/FinTrackr/2.png"
import FinTrackr3 from "../assets/FinTrackr/3.png"
import FinTrackr4 from "../assets/FinTrackr/4.png"
import FinTrackr5 from "../assets/FinTrackr/5.png"
import FinTrackr6 from "../assets/FinTrackr/6.png"
import FinTrackr7 from "../assets/FinTrackr/7.png"

import HireWave1 from "../assets/HireWave/1.png"
import HireWave2 from "../assets/HireWave/2.png"
import HireWave3 from "../assets/HireWave/3.png"
import HireWave4 from "../assets/HireWave/4.png"
import HireWave5 from "../assets/HireWave/5.png"
import HireWave6 from "../assets/HireWave/6.png"
import HireWave7 from "../assets/HireWave/7.png"
import HireWave8 from "../assets/HireWave/8.png"
import HireWave9 from "../assets/HireWave/9.png"
import HireWave10 from "../assets/HireWave/10.png"
import HireWave11 from "../assets/HireWave/11.png"
import HireWave12 from "../assets/HireWave/12.png"

import UserPanel1 from "../assets/UserPanel/1.png"
import UserPanel2 from "../assets/UserPanel/2.png"
import UserPanel3 from "../assets/UserPanel/3.png"
import UserPanel4 from "../assets/UserPanel/4.png"
import UserPanel5 from "../assets/UserPanel/5.png"

import TMS1 from "../assets/Task management system/1.png"
import TMS2 from "../assets/Task management system/2.png"
import TMS3 from "../assets/Task management system/3.png"


const FinTrackrImages=[FinTrackr1, FinTrackr2, FinTrackr3, FinTrackr4, FinTrackr5, FinTrackr6, FinTrackr7];
const HireWaveImages=[HireWave1, HireWave2, HireWave3, HireWave4, HireWave5, HireWave6, HireWave7, HireWave8, HireWave9, HireWave10, HireWave11, HireWave12];
const UserPanelImages=[UserPanel1, UserPanel2, UserPanel3, UserPanel4, UserPanel5];
const TaskManagerImages=[TMS1, TMS2, TMS3];

export default function Projects() {
  const majorProjects = [
  {
    images: FinTrackrImages,
    title: "FinTrackr",
    shortDescription: "A full-stack finance planner with recurring logic & secure auth.",
    fullDescription:
      "FinTrackr is a MERN-based finance planner where users can track income, expenses, and recurring transactions. It features JWT + bcrypt auth, CRUD for transactions, auto-recurring logic with node-cron, and a responsive UI built with Tailwind, React Query, and React Hook Form.",
    techStack:
      "React, Vite, TailwindCSS, React Query, Node.js, Express, MongoDB, JWT, node-cron",
    links: {
      github: "https://github.com/OSSworup/mern-finance-planner",
      live: "https://mern-finance-planner-frontend.onrender.com",
    },
    keyLearnings: [
      "Built backend cron logic for recurring entries",
      "Secure auth with JWT & bcrypt",
      "Used React Query and Hook Form for smooth UX",
      "Handled user-specific data isolation",
    ],
    isMajor: true,
  },


{
  images: HireWaveImages,
  title: "HireWave",
  shortDescription: "A role-based job portal for students and employers.",
  fullDescription:
    "HireWave is a full-stack job portal connecting students and employers. Employers can post jobs, manage applicants, and review resumes. Students can build profiles, apply to jobs, and track application statuses. Uses Cloudinary for file uploads and JWT for role-based authentication.",
  techStack:
    "React, Tailwind CSS, Node.js, Express.js, MongoDB, JWT, Cloudinary",
  links: {
    github: "https://github.com/OSSworup/HireWave-Job-portal",
    live: "", 
  },
  keyLearnings: [
    "Built role-based login and route protection",
    "Used Cloudinary for profile and resume uploads",
    "Handled student-employer workflow and dashboard logic",
    "Implemented job application tracking with status updates",
  ],
  isMajor: true,
}

  ];

  const minorProjects = [
    {
      images: UserPanelImages, 
      title: "User Panel",
      shortDescription: "A basic user management app with Node.js and vanilla frontend.",
      fullDescription:
        "A simple full-stack application where users can sign up, log in, view and update their profile (username and phone number), and delete their account. Built using Node.js, Express, and MongoDB on the backend, with plain HTML, CSS, and JavaScript for the frontend. Designed to practice connecting a basic UI with backend logic.",
      techStack: "Node.js, Express, MongoDB, HTML, CSS, JavaScript",
      links: {
        github: "https://github.com/OSSworup/user-crud-app", 
        live: "", 
      },
      keyLearnings: [
        "Implemented user authentication and profile management",
        "Connected vanilla JS frontend with backend REST API",
        "Handled CRUD operations using Express and MongoDB",
        "Practiced full-stack app structure with basic UI",
      ],
      isMajor: false,
    },
    
    {
      images: TaskManagerImages, 
      title: "Task Management System",
      shortDescription: "Backend-only project for secure task CRUD with JWT auth.",
      fullDescription:
        "A Node.js and Express-based backend project where users can securely manage tasks. Each user can register, log in, and perform CRUD operations on their own tasks. Features include task filtering by status, secure password change, and access control using JWT tokens. No frontend—tested via Postman.",
      techStack: "Node.js, Express.js, MongoDB, JWT, bcrypt, dotenv",
      links: {
        github: "https://github.com/OSSworup/Task-Management-System",
        live: "", 
      },
      keyLearnings: [
        "Built REST APIs for task and user management",
        "Used JWT for user authentication and protected routes",
        "Implemented secure password handling with bcrypt",
        "Practiced API testing using Postman and real-world routing structure",
      ],
      isMajor: false,
    }


  ];

return (
  <section id="projects" className="bg-[#FAFAFA] py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-extrabold text-[#212121] text-center mb-4">Projects</h2>
    <div className="w-20 h-1 bg-[#FF5722] mx-auto rounded mb-12"></div>

    {/*Major Projects */}
    <div className="mb-20">
      <h3 className="text-2xl font-semibold text-[#212121] mb-6 pl-4 relative">
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#FF5722] rounded-sm"></span>
        <span className="ml-6">🚀 Major Projects</span>
      </h3>
      <div className="grid md:grid-cols-2 gap-10">
        {majorProjects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>

    {/* Minor Projects */}
    <div>
      <h3 className="text-xl font-semibold text-[#212121] mb-6 pl-4 relative">
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-[#FF5722] rounded-sm"></span>
        <span className="ml-6">🛠️ Minor Projects</span>
      </h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {minorProjects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-gray-200 p-5 shadow hover:shadow-md transition"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

);

}
