import styled from "styled-components";
import device from "Shared/Config";

interface ImprovementProps {
  color: string;
}

export const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${device.mobile} {
    flex-direction: column;
  }
`;
export const ContentBox = styled.div<ImprovementProps>`
  width: 20.052083333333332vw;
  height: 12.8068303094984vh;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  color: #ffffff;
  margin-top: 14px;
  @media ${device.mobile} {
    width: 400px;
  }
`;

export const SeasonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 24vw;
  height: 67vh;
  border: 3px solid ${(props) => props.color};
  border-radius: 30px;
  margin-top: 55px;
  color: ${(props) => props.color};
  p {
    font-size: 30px;
    line-height: 43px;
    width: 20vw;
    height: 129px;
    margin: 0;
    @media ${device.mobile} {
      width: 400px;
    }
  }
  @media ${device.mobile} {
    width: 100%;
  }
`;

export const Title = styled.div`
  font-size: 30px;
  line-height: 43px;
  width: 20vw;
  height: 129px;
  @media ${device.mobile} {
    width: 400px;
  }
`;
