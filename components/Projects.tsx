import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Sprint",
    description:
      "A simple project management tool. Create a project, invite your team members, and start tracking your tasks. Create an account for free now!",
    image: "/images/sprint.png",
    link: "https://sprint-portal.vercel.app",
    github: "",
  },
  {
    name: "Chatalyst",
    description:
      "A real time chat application. Send messages, images, voice recordings in private DMs or group chats.",
    image: "/images/chat.png",
    link: "https://make-it-all.tech",
    github: "",
  },
  {
    name: "Build-a-Bot",
    description:
      "A platform for creating and sharing chatbots. Create your own character and have life like conversations. Powered by Open AI's GPT-3.5 model.",
    image: "/images/bot.png",
    link: "https://build-a-bot.vercel.app",
    github: "",
  },
];

export default function Projects() {
  return (
    <div className="flex items-center justify-center gap-8 p-8 mobile-only:flex-col bg-slate-100">
      {projects.map((project, i) => (
        <Link
          className="flex flex-col justify-between flex-1 desktop-only:w-1/3 h-[20rem] gap-4 p-4 transition-all duration-300 bg-white rounded-lg shadow-lg cursor-pointer group hover:-translate-y-2"
          key={i}
          href={project.link}
        >
          <div className="flex items-center justify-between">
            <h1 className="p-4 text-2xl font-bold">{project.name}</h1>
            <Image
              src={project.image}
              width={60}
              height={60}
              alt="Project Image"
            />
          </div>
          <p className="p-4 text-lg">{project.description}</p>
          <div className="flex justify-center w-full items-ceter">
            <button className="px-4 py-2 font-bold transition-all duration-300 rounded group-hover:bg-theme-blue group-hover:text-white text-theme-blue font-body">
              View
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}
