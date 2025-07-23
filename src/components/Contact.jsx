import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-b from-white to-[#F0F2F5] py-20 px-6 shadow-inner">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-[24px] font-bold text-[#212121] mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-10">
          Open to job opportunities, collaborations, or professional conversations — let’s connect.
        </p>

        <div className="bg-white rounded-xl shadow-md p-8 sm:p-10 text-left">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <FaEnvelope className="mt-1 text-[#1E88E5]" />
              <div>
                <p className="text-gray-700 font-medium">Email</p>
                <a
                  href="mailto:ossworupojha@gmail.com"
                  className="text-[#1E88E5] hover:text-[#FF5722] break-words"
                >
                  ossworupojha@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaGithub className="mt-1 text-[#1E88E5]" />
              <div>
                <p className="text-gray-700 font-medium">GitHub</p>
                <a
                  href="https://github.com/OSSworup"
                  className="text-[#1E88E5] hover:text-[#FF5722] break-words"
                >
                  https://github.com/OSSworup
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaLinkedin className="mt-1 text-[#1E88E5]" />
              <div>
                <p className="text-gray-700 font-medium">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/omm-subham-sworup-ojha-b80144338"
                  className="text-[#1E88E5] hover:text-[#FF5722] break-words"
                >
                  https://linkedin.com/in/omm-subham-sworup-ojha-b80144338
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="/Resume.pdf"
              download
              className="inline-block bg-[#FF5722] hover:bg-[#E64A19] text-white px-6 py-3 rounded-md font-semibold transition"
            >
              Download Resume
            </a>
            <p className="text-sm text-gray-500 mt-4">
              📍 Bhubaneswar, India — Open to remote & relocation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
