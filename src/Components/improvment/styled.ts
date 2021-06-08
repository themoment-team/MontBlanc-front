import styled from "styled-components";
import device from "Constants/reactive";

export const ImprovmentPageBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 180px auto;
  width: 70vw;
  @media ${device.mobile} {
    flex-direction: column;
    width: 90vw;
  }
`;

export const LeftBox = styled.div`
  height: fit-content;
  position: sticky;
  top: 180px;
  margin-right: 30px;
  @media ${device.mobile} {
    position: initial;
    margin-bottom: 30px;
    margin-right: 0;
  }
`;

export const Btn = styled.button`
  display: flex;
  width: 324px;
  justify-content: space-between;
  margin-top: 50px;
  padding: 19px 23px;
  color: white;
  font-weight: 700;
  font-size: 14px;
  background-color: #434c9c;
  @media ${device.mobile} {
    width: 100%;
  }
  a {
    align-self: center;
    font-size: 12px;
    font-weight: 500;
    color: white;
    text-decoration: underline;
  }
  svg {
    padding-left: 5px;
  }
`;

export const AltImprovementItem = styled.div`
  width: 33.4vw;
  text-align: center;
  color: #434C9C;
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
`
