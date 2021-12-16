import styled from "styled-components";
import device from "Shared/Config";

interface ImprovementProps {
  color: string;
}

export const BoxWrapper = styled.div`
  display: flex;
  width: 990px;
  justify-content: space-between;
  margin-top: 55px;
`;

export const SeasonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 470px;
  height: 630px;
  border: 3px solid ${(props) => props.color};
  border-radius: 30px;
  color: ${(props) => props.color};
  p {
    font-size: 30px;
    line-height: 43px;
    font-weight: 700;
    margin-left: 45px;
  }
`;

export const ContentBox = styled.div<ImprovementProps>`
  width: 385px;
  height: 120px;
  margin-top: 15px;
  margin-left: 45px;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
`;
