import styled from "styled-components";
import device from "Constants/constants";

export const ImprovementPageBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 180px auto;
  width: 90vw;
  @media ${device.laptop} {
    margin: 180px 10px;
  }
  @media ${device.mobile} {
    flex-direction: column;
    width: 90vw;
    margin-left: 5vw;
  }
`;

export const AltImprovementItem = styled.div`
  width: 40vw;
  text-align: center;
  color: #6a76e9;
  font-size: 1.82rem;
  font-weight: 500;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  small {
    font-size: 0.8rem;
  }
  @media ${device.laptop} {
    font-size: 1.5rem;
    small {
      font-size: 0.75rem;
    }
  }
  @media ${device.mobile} {
    margin-top: 10%;
    width: 80%;
    font-size: 1.3rem;
    small {
      font-size: 0.65rem;
    }
  }
`;
