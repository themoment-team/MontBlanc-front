import styled from "styled-components";
import device from "Constants/reactive";

export const ImprovmentPageBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 180px auto;
  width: 90vw;
  @media ${device.mobile} {
    flex-direction: column;
    width: 90vw;
    margin-left: 5vw;
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
  width: 435px;
  justify-content: space-between;
  margin-top: 50px;
  padding: 19px 23px;
  color: white;
  font-weight: 700;
  font-size: 16px;
  background-color: #6a76e9;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  @media ${device.mobile} {
    width: 100%;
  }
  svg {
    padding-left: 5px;
  }
  & > button {
    background-color: #6a76e9;
    color: white;
    font-weight: 700;
    font-size: 16px;
    width: 324px;
    text-align: left;
    padding: 0;
  }
`;

export const LinkTextWrapper = styled.div`
  color: white;
  text-decoration: #fff 1px underline;
  padding-top: 3%;
  font-size: 12px;
  font-weight: 600;
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
