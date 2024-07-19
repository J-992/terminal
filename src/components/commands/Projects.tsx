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
} from "../styles/Projects.styled";
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
        Here ya go <br />
        Check them out!
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
    title: "PLACEHOLDER1",
    desc: "PLACEHOLDERDESC",
    url: "https://matias.me/nsfw",
  },
  {
    id: 2,
    title: "PLACEHOLDER1",
    desc: "PLACEHOLDERDESC",
    url: "https://matias.me/nsfw",
  },
  {
    id: 3,
    title: "PLACEHOLDER1",
    desc: "PLACEHOLDERDESC",
    url: "https://matias.me/nsfw",
  },
  {
    id: 4,
    title: "PLACEHOLDER1",
    desc: "PLACEHOLDERDESC",
    url: "https://matias.me/nsfw",
  },
  {
    id: 5,
    title: "PLACEHOLDER1",
    desc: "PLACEHOLDERDESC",
    url: "https://matias.me/nsfw",
  },
];

export default Projects;
