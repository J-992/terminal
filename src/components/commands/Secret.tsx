import {
    AboutWrapper,
    HighlightAlt,
    HighlightSpan,
  } from "../styles/global.styles";
  
  const Secret: React.FC = () => {
    return (
      <AboutWrapper data-testid="about">
        <p>
          Hi, my name is <HighlightSpan>Jaffer Razavi</HighlightSpan>!
        </p>
        <p>
          I'm <HighlightAlt>a Mechanical Engineering student</HighlightAlt> based in Toronto,
          Ontario.
        </p>
        <p>
          [PLACEHOLDER]
        </p>
      </AboutWrapper>
    );
  };
  
  export default Secret;
  