import React from "react";
import { ErrorWrapper } from "./style";
import { Link } from "react-router-dom";
import * as I from "../../Asset/SVG/index";

const index: React.FC = () => {
  return (
    <ErrorWrapper>
      <I.NotFoundSvg />
      <h1>페이지를 찾을 수 없어요!</h1>
      <p>
        페이지가 존재하지 않거나, 사용할 수 없는 페이지 입니다.
        <br />
        입력하신 주소가 정확하신지 다시 한 번 확인해주세요.
      </p>
      <Link to="/">홈으로 이동</Link>
    </ErrorWrapper>
  );
};

export default index;
