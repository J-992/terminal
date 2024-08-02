import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/global.styles";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Jaffer Razavi</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Mechanical Engineering student</HighlightAlt> at the University of Waterloo!
      </p>
      <p>
        I made this terminal-based website after getting inspired by playing around with SSH clients for OverTheWire's Bandit Games.
        I lost focus from my initial portfolio website using VanillaJS (and faced a creative block), so I ended up making this and threw the GUI on the backburner.
      </p>
    </AboutWrapper>
  );
};

export default About;
