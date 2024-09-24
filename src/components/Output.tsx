import About from "./commands/About";
import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import Education from "./commands/Education";
import Email from "./commands/Email";
import GeneralOutput from "./commands/GeneralOutput";
import Gui from "./commands/Gui";
import Help from "./commands/Help";
import Welcome from "./commands/Welcome";
import History from "./commands/History";
import Projects from "./commands/Projects";
import Socials from "./commands/Socials";
import { OutputContainer, UsageDiv } from "./styles/global.styles";
import { termContext } from "./Terminal";
import { useContext } from "react";
import React from "react";
import UserInfo from "./commands/UserInfo";
import Themes from "./commands/Themes";
import Secret from "./commands/Secret";

type Props = {
  index: number;
  cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg } = useContext(termContext);
  const specialCmds = ["projects", "socials", "theme", "echo"];

  // return 'Usage: <cmd>' if command arg is not valid
  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv data-testid="usage-output">Usage: {cmd}</UsageDiv>;

  return (
    <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
      {
        {
          about: <About />,
          clear: <Clear />,
          echo: <Echo />,
          education: <Education />,
          email: <Email />,
          gui: <Gui />,
          help: <Help />,
          history: <History />,
          projects: <Projects />,
          pwd: <GeneralOutput>C:/j-992.github.io/terminal</GeneralOutput>,
          socials: <Socials />,
          theme: <Themes />,
          welcome: <Welcome />,
          whoami: <UserInfo />,
          secret: <Secret />,
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
