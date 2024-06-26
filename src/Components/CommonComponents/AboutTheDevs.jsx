import { Linkedin } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { Mail } from "lucide-react";

function AboutTheDevs() {
  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dm8xhvx4t/image/upload/v1717689092/new-york-night-skyline-1485446344nIH_pfatvd.jpg')" }}
      >
        <div
          className="text-white py-12 text-center text-5xl font-bold bg-black/20"
          style={{ fontFamily: 'Orbitron, sans-serif', fontStyle: 'normal' }}
        >
          Learn About Our Team
        </div>
        <div className="grid lg:grid-cols-2 md:gap-2 ml-12 pb-24">

          {/* First Team Member */}
          <div className="bg-gray-100 hover:bg-gray-300 rounded-xl mx-10 my-10 shadow-2xl backdrop-brightness-150 backdrop-blur-3xl w-2/3 flex flex-col">
            <div className=" bg-duke-blue rounded-t-lg text-5xl text-white flex items-center justify-center p-4">
              CM
            </div>
            <div className="p-5 flex-grow flex flex-col items-center justify-between text-center">
              <div>
                <div className="text-2xl">Chris Miranda</div>
                <div>Software Engineer</div>
              </div>
              <div className="pt-2 flex flex-row justify-center">
                <a href={"https://github.com/ChrisCodeTrials"} target={"_blank"}>
                  <div className="bg-gray-500 rounded p-1 ml-2 hover:bg-black">
                    <FiGithub strokeWidth={2} className="text-white w-6 h-6" />
                  </div>
                </a>
                <a href={"https://www.linkedin.com/in/c-miranda1"} target={"_blank"}>
                  <div className="bg-blue-500 rounded p-1 ml-2 hover:bg-black">
                    <Linkedin strokeWidth={2} className="text-white w-6 h-6" />
                  </div>
                </a>
                <a href="mailto:ChristopherMiranda@pursuit.org">
                  <div className="bg-green-500 rounded p-1 ml-2 hover:bg-black">
                    <Mail strokeWidth={2} className="text-white w-6 h-6" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Second Team Member */}
          <div className="bg-gray-100 hover:bg-gray-300 rounded-xl mx-10 my-10 shadow-2xl backdrop-brightness-150 backdrop-blur-3xl w-2/3 flex flex-col">
            <div className="bg-byz-blue rounded-t-lg text-5xl text-white flex items-center justify-center p-4">
              MR
            </div>
            <div className="p-5 flex-grow flex flex-col items-center justify-between text-center">
              <div>
                <div className="text-2xl">Michael Restrepoross</div>
                <div>Software Engineer</div>
              </div>
              <div className="pt-2 flex flex-row justify-center">
                <a href={"https://github.com/MichaelARestrepoross"} target={"_blank"}>
                  <div className="bg-gray-500 rounded p-1 ml-2 hover:bg-black">
                    <FiGithub strokeWidth={2} className="text-white w-6 h-6" />
                  </div>
                </a>
                <a href={"https://www.linkedin.com/in/michael-restrepoross"} target={"_blank"}>
                  <div className="bg-blue-500 rounded p-1 ml-2 hover:bg-black">
                    <Linkedin strokeWidth={2} className="text-white w-6 h-6" />
                  </div>
                </a>
                <a href="mailto:MichaelRestrepoross@pursuit.org">
                  <div className="bg-green-500 rounded p-1 ml-2 hover:bg-black">
                    <Mail strokeWidth={2} className="text-white w-6 h-6" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Third Team Member */}
          <div className="bg-gray-100 hover:bg-gray-300 rounded-xl mx-10 my-10 shadow-2xl backdrop-brightness-150 backdrop-blur-3xl w-2/3 flex flex-col">
            <div className="bg-indigo-500 rounded-t-lg text-5xl text-white flex items-center justify-center p-4">
              IA
            </div>
            <div className="p-5 flex-grow flex flex-col items-center justify-between text-center">
              <div>
                <div className="text-2xl">Isiah Arrufat</div>
                <div>Software Engineer</div>
              </div>
              <div className="pt-2 flex flex-row justify-center">
                <a href={"https://github.com/isiahArrufat"} target={"_blank"}>
                  <div className="bg-gray-500 rounded p-1 ml-2 hover:bg-black">
                    <FiGithub strokeWidth={2} className="text-white w-6 h-6" />
                  </div>
                </a>
                <a href={"https://www.linkedin.com/in/isiah-arrufat-508b04123/"} target={"_blank"}>
                  <div className="bg-blue-500 rounded p-1 ml-2 hover:bg-black">
                    <Linkedin strokeWidth={2} className="text-white w-6 h-6" />
                  </div>
                </a>
                <a href="mailto:IsiahArrufat@pursuit.org">
                  <div className="bg-green-500 rounded p-1 ml-2 hover:bg-black">
                    <Mail strokeWidth={2} className="text-white w-6 h-6" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Fourth Team Member */}
          <div className="bg-gray-100 hover:bg-gray-300 rounded-xl mx-10 my-10 shadow-2xl backdrop-brightness-150 backdrop-blur-3xl w-2/3 flex flex-col">
            <div className="bg-blue-400 rounded-t-lg text-5xl text-white flex items-center justify-center p-4">
              MR
            </div>
            <div className="p-5 flex-grow flex flex-col items-center justify-between text-center">
              <div>
                <div className="text-2xl">Marlon Regis</div>
                <div>Software Engineer</div>
              </div>
              <div className="pt-2 flex flex-row justify-center">
                <a href={"https://github.com/MarlonPelau"} target={"_blank"}>
                  <div className="bg-gray-500 rounded p-1 ml-2 hover:bg-black">
                    <FiGithub strokeWidth={2} className="text-white w-6 h-6" />
                  </div>
                </a>
                <a href={"https://www.linkedin.com/in/mrmarlon/"} target={"_blank"}>
                  <div className="bg-blue-500 rounded p-1 ml-2 hover:bg-black">
                    <Linkedin strokeWidth={2} className="text-white w-6 h-6" />
                  </div>
                </a>
                <a href="mailto:marlonregis@pursuit.org">
                  <div className="bg-green-500 rounded p-1 ml-2 hover:bg-black">
                    <Mail strokeWidth={2} className="text-white w-6 h-6" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutTheDevs;
