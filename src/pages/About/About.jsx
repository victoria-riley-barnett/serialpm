import React from "react";

const stack = [
  {
    area: "Frontend",
    detail: "React 18, Vite, React Router, Tailwind CSS, Framer Motion",
  },
  {
    area: "Backend",
    detail: "Node.js, Express, Socket.IO, JWT auth, bcrypt, Multer uploads",
  },
  {
    area: "Database",
    detail: "MySQL with a normalised schema (18 tables) accessed via mysql2",
  },
  {
    area: "Internationalisation",
    detail: "i18next with English and Spanish locale bundles",
  },
];

const About = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      <div className="container relative z-10 mx-auto px-4 py-24">
        <h1 className="mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-center text-5xl font-bold text-transparent">
          About SerialPM
        </h1>
        <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-gray-300">
          SerialPM is a multi-tenant project management application: teams sign
          up, create an organisation, invite colleagues, and then plan projects,
          break them into tasks, and talk to each other in real time.
        </p>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {stack.map((item) => (
            <div
              key={item.area}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h2 className="mb-2 text-xl font-semibold text-gray-100">
                {item.area}
              </h2>
              <p className="text-gray-300">{item.detail}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-3xl text-center text-sm text-gray-400">
          SerialPM began as a university capstone project over a single
          semester, with Victoria Barnett as team lead. This repository is a
          cleaned-up public copy of that work: teammates&rsquo; names and
          photographs, and the development key committed to the original tree,
          have been removed.
        </p>
      </div>
    </div>
  );
};

export default About;
