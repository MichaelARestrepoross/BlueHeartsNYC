import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
          <div className="bg-gradient-to-r from-dark-navy to-light-navy shadow-lg shadow-slate-900">
            <div className="p-7 flex flex-row justify-between">
              <Link to={"/"}>
                <div className="font-bold text-2xl text-white inline-block" style={{ fontFamily: 'Orbitron, sans-serif', fontStyle: 'normal' }}>
                  <span className="">B</span>lue
                  <span className="">H</span>earts
                  <span className="">NYC</span>
                </div>
              </Link>
              <div className="flex items-center">
                <Link to={"/homepage"}>
                  <p className="text-4xl">🏙️</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Nav