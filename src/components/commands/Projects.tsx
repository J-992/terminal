import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/global.styles";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4", "5"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        Check them out! Private codebases will not be accessible.
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "EMG Prosthetic Arm",
    desc: "IN PROGRESS - Converts AO read from endusers forearm into signals used to control a prosthetic arm.",
    url: "https://github.com/J-992/emg-arm",
  },
  {
    id: 2,
    title: "PLACEHOLDER1",
    desc: "PLACEHOLDERDESC",
    url: "https://matias.me/nsfw",
  },
  {
    id: 3,
    title: "Drawing Robot",
    desc: "This is what it sounds like. It's a drawing robot.",
    url: "https://github.com/J-992/drawing-robot",
  },
  {
    id: 4,
    title: "PWR Isotope Production System (IPS) design & feasibility",
    desc: "A feasibility study and R&D done at Framatome to design an IPS for Pressurized Water Reactors. Please reach out for more information.",
    url: "",
  },
  {
    id: 5,
    title: "GlobalReach",
    desc: "IN PROGRESS - AI based commercial detection using a Raspberry PI 5. Please reach out for more information as this project is still private.",
    url: "https://matias.me/nsfw",
  },
];

const projects2 = [
  {
    id: 6,
    title: "EMG Prorrrsthetic Arm",
    desc: "IN PROGRESS - Converts AO read from endusers forearm into signals used to control a prosthetic arm.",
    url: "https://github.com/J-992/emg-arm",
  },
  {
    id: 7,
    title: "PLACEHOLDER1",
    desc: "PLACEHOLDERDESC",
    url: "https://matias.me/nsfw",
  },
  {
    id: 8,
    title: "Drawing Robot",
    desc: "This is what it sounds like. It's a drawing robot.",
    url: "https://github.com/J-992/drawing-robot",
  },
  {
    id: 9,
    title: "PWR Isotope Production System (IPS) design & feasibility",
    desc: "A feasibility study and R&D done at Framatome to design an IPS for Pressurized Water Reactors. Please reach out for more information.",
    url: "",
  },
  {
    id: 10,
    title: "GlobalReach",
    desc: "IN PROGRESS - AI based commercial detection using a Raspberry PI 5. Please reach out for more information as this project is still private.",
    url: "https://matias.me/nsfw",
  },
];


export default Projects;
