import styled from "styled-components";
import device from "Shared/Config";

export const BeforeRankPage = styled.div`
  height: 100vh;
  margin: 180px 5vw;
  display: flex;
  justify-content: space-between;
  width: 90vw;

  @media ${device.mobile} {
    flex-direction: column;
    height: 180vh;
    justify-content: flex-start;
  }
`;

export const RightBox = styled.div`
  width: 51vw;
  @media ${device.mobile} {
    margin-top: 30px;
    width: 100%;
  }
`;

export const SeasonSelect = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid #8b8b8b;
  align-items: flex-end;
  height: 57px;
  padding-bottom: 15px;
  color: #6a76e9;
  span {
    font-size: 40px;
    line-height: 57px;
    font-weight: bold;
    margin: 0;
  }
  svg {
    margin-left: 36px;
    cursor: pointer;
  }
  @media ${device.mobile} {
    p {
      display: none;
    }
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const SeasonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 24vw;
  height: 67vh;
  border: 3px solid #a4adff;
  border-radius: 30px;
  margin-top: 55px;
  @media ${device.mobile} {
    width: 100%;
  }
`;

export const Title = styled.div`
  font-size: 30px;
  line-height: 43px;
  color: #a4adff;
  width: 20vw;
  height: 129px;
  @media ${device.mobile} {
    width: 400px;
  }
`;

export const ContentBox = styled.div`
  width: 20.052083333333332vw;
  height: 12.8068303094984vh;
  background: #a4adff;
  border-radius: 10px;
  color: #ffffff;
  margin-top: 14px;
  @media ${device.mobile} {
    width: 400px;
  }
`;

export const SeasonBox2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 24vw;
  height: 67.2358591248666vh;
  border: 3px solid #6c91ef;
  border-radius: 30px;
  margin-top: 55px;

  @media ${device.mobile} {
    width: 100%;
  }
`;

export const ContentBox2 = styled.div`
  width: 20.052083333333332vw;
  height: 12.8068303094984vh;
  background: #6c91ef;
  border-radius: 10px;
  color: #ffffff;
  margin-top: 14px;
  @media ${device.mobile} {
    width: 400px;
  }
`;

export const Title2 = styled.div`
  width: 20vw;
  font-size: 30px;
  line-height: 43px;
  color: #6c91ef;
  height: 129px;
  @media ${device.mobile} {
    width: 400px;
  }
`;
