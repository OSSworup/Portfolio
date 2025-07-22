import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F5F7FA] py-5 px-6 border-t border-gray-200">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://github.com/OSSworup"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#1E88E5] hover:text-[#FF5722] text-xl transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/omm-subham-sworup-ojha-b80144338"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#1E88E5] hover:text-[#FF5722] text-xl transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-[#757575]">
          © 2025 Omm Subham Sworup Ojha. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
