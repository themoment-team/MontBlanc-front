import { PageExplanation } from "../PageExplanation";
import styled from "styled-components";

const day: number = 100;
const cnt_comment: number = 120;

const heading: string[] = [
  `${day}일 동안`,
  `${cnt_comment}개의 불편함이`,
  `모였습니다.`,
];
const explanation: string[] = ["학교가 불편한 순간"];

const AboutPage: React.FC = () => {
  return (
    <AboutBox>
      <PageExplanation heading={heading} explanation={explanation} />
    </AboutBox>
  );
};

const AboutBox = styled.div`
  margin: 230px 30px 0 9.5%;
  width: 100%;
  height: 100%;
`;

export default AboutPage;
