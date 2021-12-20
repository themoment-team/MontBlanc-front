import styled from "styled-components";

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
  width: 340px;
  height: 75px;
  margin-top: 15px;
  margin-left: 45px;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
  padding: 25px 22px 20px 22px;
  button {
    // 모달을 위한 button style 입니다.
    width: 100%;
    height: 100%;
    background: transparent;
  }
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  margin-bottom: 5px;
`;

export const Answer = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #fff;
`;

export const BoxContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RankContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContentRank = styled.div<ContentProps>`
  width: 30px;
  height: 30px;
  margin-right: 15px;
  background-color: #fff;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.color};
`;

export const Likes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 17px;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  svg {
    margin-right: 5px;
  }
`;
