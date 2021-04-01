import { PageExplanation } from "../PageExplanation";
import { LeftBox } from "../../Styles/LeftBox";

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
    <LeftBox>
      <PageExplanation heading={heading} explanation={explanation} />
    </LeftBox>
  );
};

export default AboutPage;
