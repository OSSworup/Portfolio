import img from "../assets/profile.jpg";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[60vh] flex items-center bg-gradient-to-b from-[#E3F2FD] to-[#FFFFFF] py-20 px-6 text-[#212121] pt-23">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img
          src={img}
          alt="Your Name"
          className="w-[126px] h-[130px] rounded-full shadow-md"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-[36px] font-bold">Omm Subham Sworup Ojha</h1>
          <h2 className="text-[20px] text-[#424242]">Full Stack Web Developer</h2>
          <p className="text-[16px] text-[#757575] mt-2">
            Turning ideas into full-stack web apps with React, Node, and MongoDB — currently open to junior dev roles and internships.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center mt-4 bg-[#FF5722] hover:bg-[#E64A19] text-white px-5 py-2 rounded "
            aria-label="View My Work">
            View My Work <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}