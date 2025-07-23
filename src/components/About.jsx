export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#F5F5F5] to-[#FDFDFD] py-20 px-6"
    >
      <div className="max-w-5xl mx-auto text-center bg-[#FAFAFA] rounded-2xl shadow-md p-6">
        <h2 className="text-[28px] font-bold text-[#212121] mb-4">About Me</h2>
        <div className="w-16 h-1 bg-[#FF5722] mx-auto mb-6 rounded"></div>

        <div className="max-w-[700px] mx-auto px-4 sm:px-6">
          <p className="text-base sm:text-lg text-[#424242] leading-relaxed sm:leading-[1.75] mb-6 sm:mb-10 text-left sm:text-justify">
            I'm a{" "}
            <span className="font-semibold text-[#FF5722]">
              self-taught full-stack developer
            </span>{" "}
            with a degree in Computer Science and experience building real-world
            applications. I enjoy crafting clean UIs with React and building robust
            backends using Node.js and Express. Currently enhancing my frontend skills
            with real-world projects. Eager to join a team where I can learn fast,
            build cool stuff, and ship production-ready features.
          </p>
        </div>

        <h3 className="text-[22px] font-semibold text-[#212121] mb-6">
          Tech Stack & Tools
        </h3>

        <div className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-[#FF5722] mb-2">Languages</h4>
              <p className="text-sm text-[#424242]">JavaScript (ES6+), HTML, CSS</p>
            </div>

            <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-[#FF5722] mb-2">Frontend</h4>
              <p className="text-sm text-[#424242]">
                React, React Router, Context API, react-hook-form
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-[#FF5722] mb-2">
                State Management
              </h4>
              <p className="text-sm text-[#424242]">
                useReducer, TanStack Query
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-[#FF5722] mb-2">Backend</h4>
              <p className="text-sm text-[#424242]">
                Node.js, Express, MongoDB (Mongoose)
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-[#FF5722] mb-2">Other Skills</h4>
              <p className="text-sm text-[#424242]">
                REST APIs, Cron Jobs, JWT Auth, Error Handling
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-[#FF5722] mb-2">
                Tools & Deployment
              </h4>
              <p className="text-sm text-[#424242]">
                Git, GitHub, Vercel, Render
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
