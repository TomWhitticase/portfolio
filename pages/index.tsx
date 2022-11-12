import Header from "./components/Header";
import Footer from "./components/Footer";
import SubHeader from "./components/SubHeader";
import Skill from "./components/Skill";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faEnvelope,
  faUser,
  faArrowUpRightFromSquare,
  faCogs,
  faLightbulb,
  faHandshakeSimple,
  faMessage,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="">
      <title>Tom Whitticase</title>
      <Header></Header>
      <div className="pt-16 bg-[url('/images/CircuitBoard.svg')] dark:bg-[url('/images/CircuitBoard-dark.svg')] bg-no-repeat bg-cover bg-fixed">
        <div id="home" className="">
          <div className="flex flex-row p-4 gap-20 flex-wrap justify-center items-center">
            <div className="w-auto p-4 flex flex-col items-start">
              <h1 className="">Hello there!</h1>
              <h1 className="text-green-light">I'm Tom.</h1>

              <h2 className="text-3xl text-left text-gray-light">
                I am a <span className="text-orange">full stack</span> developer
                <span className="">|</span>
              </h2>

              <div className="flex flex-col">
                <a href="#about" className="m-4">
                  <button className="btn-1 rounded-full">
                    About Me <FontAwesomeIcon icon={faArrowDown} />
                  </button>
                </a>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/tom-whitticase/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="icon" />
                  </a>
                  <a href="https://github.com/TomWhitticase" target="_blank">
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                  </a>
                  <a href="mailto: tom.pe.wh@gmail.com" target="_blank">
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                  </a>
                  <a href="https://www.instagram.com/tom.p.w/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} className="icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="my-auto mx-8">
              <img
                className="rounded-2xl shadow-lg object-cover w-72"
                src="images/tombeachmalaga.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      <SubHeader icon={faUser} text={"About Me"}></SubHeader>

      <div className="w-screen bg-[url('/images/mountains.svg')] bg-no-repeat bg-cover bg-fixed shadow-lg">
        <div className="flex flex-row gap-10 flex-wrap justify-center">
          <div className="flex desktop-only:flex-row mobile-only:flex-col gap-10 py-16">
            <img
              className="object-cover w-64 rounded-lg m-auto"
              src="images/topofmountain.jpg"
            />
            <div className="flex flex-col justify-between items-between gap-4 p-4 w-full">
              <div className="flex flex-col gap-4 desktop-only:max-w-[20rem]">
                <h3>
                  I am a second year undergraduate Computer Science student
                  studying at
                  <a
                    href="https://www.lboro.ac.uk/"
                    target="_blank"
                    className="text-green-dark font-bold mx-1"
                  >
                    Loughborough University
                  </a>
                  in the UK. I am passionate about programming and I am always
                  teaching myself new skills. I am currently looking for a
                  placement year starting summer 2023.
                </h3>
                <h3>
                  I love making and playing electric guitars. I enjoy skiing and
                  archery.
                </h3>
              </div>

              <a
                target="_blank"
                href="https://docs.google.com/document/d/1VDgQEV572j5iIcepGR9uKMEozhZUkPmv02rsyr3mDLI/edit?usp=sharing"
              >
                <button className="btn-1">
                  Resume
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="mx-1"
                  ></FontAwesomeIcon>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <SubHeader icon={faCogs} text={"Skills"}></SubHeader>

      <div className="bg-green-light py-16 px-4">
        <h2 className="text-center p-4 pt-8 text-white">Languages</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Skill text={"HTML"} imageSrc={"images/html-5.png"}></Skill>
          <Skill text={"CSS"} imageSrc={"images/css-3.png"}></Skill>
          <Skill text={"JavaScript"} imageSrc={"images/js.png"}></Skill>
          <Skill text={"TypeScript"} imageSrc={"images/typescript.png"}></Skill>
          <Skill text={"PHP"} imageSrc={"images/php.png"}></Skill>
          <Skill text={"SQL"} imageSrc={"images/database.png"}></Skill>
          <Skill text={"Python"} imageSrc={"images/python.png"}></Skill>
          <Skill text={"Java"} imageSrc={"images/java.webp"}></Skill>
          <Skill text={"C#"} imageSrc={"images/c-sharp.png"}></Skill>
        </div>

        <h2 className="text-center p-4 pt-8 text-white">Frameworks</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Skill text={"NodeJS"} imageSrc={"images/node-js.png"}></Skill>
          <Skill text={"NextJS"} imageSrc={"images/nextjs.png"}></Skill>
          <Skill text={"ReactJS"} imageSrc={"images/react.png"}></Skill>
          <Skill text={"JQuery"} imageSrc={"images/jquery.png"}></Skill>
          <Skill text={"TailwindCSS"} imageSrc={"images/tailwind.png"}></Skill>
          <Skill text={"Bootstrap"} imageSrc={"images/bootstrap.png"}></Skill>
        </div>

        <h2 className="text-center p-4 pt-8 text-white">Tools</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Skill text={"VS Code"} imageSrc={"images/vscode.png"}></Skill>
          <Skill
            text={"Visual Studio"}
            imageSrc={"images/visualstudio.png"}
          ></Skill>
          <Skill text={"Unity"} imageSrc={"images/unity.png"}></Skill>
          <Skill text={"Github"} imageSrc={"images/github.png"}></Skill>
          <Skill text={"Git"} imageSrc={"images/git.png"}></Skill>
          <Skill text={"Figma"} imageSrc={"images/figma.png"}></Skill>
        </div>
      </div>
      <SubHeader icon={faLightbulb} text={"Projects"}></SubHeader>

      <div className="wrapper bg-[url('/images/Hexagon.svg')] dark:bg-[url('/images/Hexagon-dark.svg')] bg-fixed bg-cover bg-no-repeat">
        <div className="py-8">
          <Projects></Projects>
        </div>
      </div>

      <SubHeader icon={faHandshakeSimple} text={"Contact Me"}></SubHeader>

      <div
        id="contact"
        className="bg-[url('/images/polygons.svg')]  bg-fixed bg-cover bg-no-repeat"
      >
        <form
          id="contact-form"
          className="flex flex-col justify-center items-center gap-8 child:max-w-[48rem] p-4"
        >
          <div className="relative w-full">
            <input
              type="text"
              id="name"
              required
              placeholder="Name"
              className="w-full p-2 pl-8 shadow-lg"
            />

            <FontAwesomeIcon
              icon={faUser}
              className="absolute top-[50%] -translate-y-[50%] left-2"
            ></FontAwesomeIcon>
          </div>

          <div className="relative w-full">
            <input
              type="email"
              id="emailAddress"
              required
              placeholder="Email Address"
              className="w-full p-2 pl-8 shadow-lg"
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute top-[50%] -translate-y-[50%] left-2"
            ></FontAwesomeIcon>
          </div>

          <div className="relative w-full">
            <textarea
              id="message"
              rows={4}
              required
              placeholder="Message"
              className="w-full p-2 pl-8 shadow-lg"
            ></textarea>
            <FontAwesomeIcon
              icon={faMessage}
              className="absolute top-4 left-2"
            ></FontAwesomeIcon>
          </div>
          <div>
            <button className="btn-1" type="submit">
              Send <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
            </button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </main>
  );
}

/*
Ask Dawid:
  shadow around sub header



*/
