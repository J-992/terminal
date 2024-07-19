import { Wrapper } from "../styles/global.styles";

type Props = {
  children: string;
};

const GeneralOutput: React.FC<Props> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);
export default GeneralOutput;
