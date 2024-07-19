import { EduIntro, EduList, Wrapper } from "../styles/global.styles";


const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Education:</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "BASc - Honours Mechanical Engineering",
    desc: "University of Waterloo | 2022 ~ Present",
  },
];

export default Education;
