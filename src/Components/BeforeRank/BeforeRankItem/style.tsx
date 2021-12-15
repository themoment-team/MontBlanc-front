import styled from "styled-components";
import device from "Shared/Config";

interface ImprovementProps {
  color: string;
}

export const BoxWrapper = styled.div`
  display: flex;
  border: 1px solid;
  width: 990px;
  justify-content: space-between;
  margin-top: 55px;
  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const SeasonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    @media ${device.mobile} {
      width: 400px;
    }
  }
  @media ${device.mobile} {
    width: 100%;
  }
`;

export const ContentBox = styled.div<ImprovementProps>`
  width: 20vw;
  height: 12.8vh;
  margin-left: 45px;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  color: #ffffff;
  margin-top: 14px;
  @media ${device.mobile} {
    width: 400px;
  }
`;
