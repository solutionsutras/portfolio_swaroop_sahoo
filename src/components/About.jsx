import React from "react";
import {
  FaHtml5,
  FaConnectdevelop,
  FaBriefcase,
  FaBullseye,
} from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import me from "../assets/me.png";
import resume from "../assets/resume_swaroop_sahoo.pdf";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div name="about" id="about" className="w-full bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-5/6">
          <div className="max-w-[1200px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>

          <div className="max-w-[1200px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>A freelance IT Consultant and Solution Architect.</p>
            </div>
            <div className="text-lg">
              <p>
                {" "}
                The best I would describe myself as a logical and creative
                thinker who enjoys learning new languages, frameworks, and
                technologies in general. With more than 15 years of experience
                in the field, I am excited to be part of the future of the
                technology industry and my outstanding technical skills will
                play an essential role in achieving that. The satisfaction of
                solving problems is what drives me to be a better programmer.
              </p>
            </div>
          </div>

          <div className="max-w-[1200px] w-full grid sm:grid-cols-1 gap-8 p-10 pt-2">
            <div></div>
            <div className="text-2xl">
              <p>
                I am a perfection-oriented tech-phobic software engineering
                expert with more than 15 years of experience in the field.
              </p>
            </div>

            <div className="flex items-center gap-5">
              <div className="min-w-[30px]">
                <FaBriefcase size={30} />
              </div>
              <p className="mt-3">
                During my Job in a Bangalore based MNC, I have mainly worked in
                backend systems Mainframe (COBOL, DB2, VSAM, JCL, CICS, DYL280,
                HPS and PowerBuilder, Endeavor, ISPF etc.) for 8 years in BFSI
                Domain. ALso I have lead a team of 4 for 6 months during the
                above work period.
              </p>
            </div>

            <div className="flex items-center gap-5">
              <div className="min-w-[30px]">
                <FaHtml5 size={30} />
              </div>
              <p className="mt-3">
                Shifted myself to front end/ web technologies in 2014. And I
                worked in couple of start-ups in Bhubaneswar for around 1 year
                to introduce me into the new technologies and started working as
                a freelance web developer.
              </p>
            </div>

            <div className="flex items-center gap-5">
              <div className="min-w-[30px]">
                <FaConnectdevelop size={30} />
              </div>
              <p className="mt-3">
                Then as a Freelancer I delivered several projects across skills
                like HTML, React JS, React Native, MERN Stack, Next JS, PHP,
                Laravel, Google Cloud, Docker, Github etc. I am well skilled and
                experienced in Requirement Gathering, System Analysis and
                Architecture Designing. Also I have strong skills and experience
                in Requirement Gathering, System Analysis and Architecture
                Designing. Rich experience in creating SRS, BSD, TSD, Timesheet,
                Test Cases etc. I am capable to lead a technical team and
                execute small to large scale projects.
              </p>
            </div>
          </div>
          <div>
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              <span className="mr-2">
                <FaFilePdf size={25} className="ml-3" />
              </span>
              My Resume
            </a>
            {/* <Link
              // onClick={onButtonClick}
              href={resume}
              smooth
              duration={500}
              target="_blank"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            ></Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
