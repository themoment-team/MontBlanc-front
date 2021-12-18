import styled from "styled-components";
import device from "Shared/Config";

interface ContentProps {
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

export const ContentBox = styled.div<ContentProps>`
  width: 385px;
  height: 120px;
  margin-top: 15px;
  margin-left: 45px;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
  button {
    width: 100%;
    height: 100%;
    background: transparent;
  }
`;

export const ContentRank = styled.div<ContentProps>`
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 50px;
  margin-top: 25px;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.color};
`;
