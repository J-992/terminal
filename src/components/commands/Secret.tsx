import React from 'react';
import { AboutWrapper } from "../styles/global.styles";

const Secret: React.FC = () => {
  return (
    <AboutWrapper data-testid="secret">
      <p>Please enter your password to continue.</p>
    </AboutWrapper>
  );
};

export default Secret;
