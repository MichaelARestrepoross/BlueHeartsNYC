import React from 'react'
import { Link } from 'react-router-dom'
import { BsGithub } from "react-icons/bs"
function Footer() {
  return (
    <footer>
      {/* bg-gradient-to-r from-dark-orange  to-orange shadow-lg shadow-slate-400" */}
      <div className="bg-gradient-to-r to-duke-blue to-byz-blue from-powder-blue shadow-lg shadow-slate-400 fixed bottom-0 left-0 right-0">
        <div className="flex flex-row justify-between">
          <Link to={"/"}>
            <div className="p-5 lg:pr-16 font-bold text-2xl text-white inline-block pt-3 pr-10" style={{ fontFamily: 'Orbitron, sans-serif', fontStyle: 'normal' }}>
              BH
            </div>
          </Link>
          <div className="text-white flex flex-row  pt-5">
            <Link to={"/aboutthedevs"}>
              <div className="hover:text-blue-400 lg:mr-10 ">About</div>
            </Link>
            <a
              href={"https://github.com/MichaelARestrepoross/BlueHeartsNYC"}
              target="_blank"
            >
              <BsGithub className="lg:mr-16 mr-3 w-5 h-5 mt-1 ml-10 lg:ml-48 hover:text-purple-400" />
            </a>
          </div>
          <span className="flex flex-row pt-6 pb-4 text-white text-sm pr-4">
            &#169;2024 BlueHearts NYC.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer