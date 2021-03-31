import { PageExplanation } from "../PageExplanation";
import { Link } from "react-router-dom";
import { LeftBox } from "../../Styles/LeftBox";
import styled from "styled-components";

const heading: string = "실제 개선 사례";
const explanation: string[] = [
  "다양한 의견을 남겨주셔서 정말 감사합니다.",
  "여러분들이 남겨주신 의견들을 바탕으로 하나하나 개선해나가고 있습니다.",
  "앞으로도 학교가 불편한 순간이 있다면 자유롭게 의견을 남겨주세요.",
];

const ImprovmentPage: React.FC = () => {
  return (
    <LeftBox>
      <PageExplanation heading={heading} explanation={explanation} />
      <Btn>
        학교가 불편한 순간을
        <br /> 자유롭게 남겨주세요.
        <Link to="/Leave_opinion">의견 남기기</Link>
      </Btn>
    </LeftBox>
  );
};

const Btn = styled.button`
  display: flex;
  width: 440px;
  justify-content: space-between;
  margin-top: 50px;
  padding: 26px 31px;
  color: white;
  font-weight: 700;
  font-size: 20px;
  background-color: #434c9c;
  a {
    align-self: center;
    font-size: 16px;
    font-weight: 500;
    color: white;
  }
`;

export default ImprovmentPage;
