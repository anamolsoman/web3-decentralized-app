import background from "../assets/background.svg";
import "./Layout.css";
const Layout = ({ children }) => {
  return (
    <div>
      {" "}
      <div className="relative min-h-screen layout">
        <p className="absolute bottom-5 right-5 text-white">
          Developed By{" "}
          <b>
            <u>
              <a href="https://www.linkedin.com/in/anamol-soman/">
                Anamol Soman
              </a>
            </u>
          </b>
        </p>
        <img src={background} className="background-image"></img>
        <div className="absolute bottom-40 right-80 z-10 ">
          <div className="bg-transparent p-6 rounded-lg  w-150">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
