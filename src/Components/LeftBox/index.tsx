import React from "react";
import * as S from "./style";
import * as I from "../../Asset/SVG";
import { PageExplanation } from "Components";
import { HasAdminToken } from "Atom";
import { useRecoilValue } from "recoil";
import { useHistory } from "react-router-dom";
import Config from "Constants/Config.json";
import { EditModal } from "Components/Modals";

interface LeftBoxProps {
  heading: string[];
  explanation: string[];
}

const LeftBox: React.FC<LeftBoxProps> = ({ heading, explanation }) => {
  const logged = useRecoilValue(HasAdminToken);
  const history = useHistory();

  return (
    <S.Positioner>
      <PageExplanation heading={heading} explanation={explanation} />
      {logged ? (
        window.location.pathname === "/rank" ? (
          <></>
        ) : (
          <S.Btn>
            <EditModal
              idx={1}
              state="improvement"
              heading="작성하기"
              ButtonContent={"실제 개선 사례 작성하기"}
            />
            <span>
              <I.RightArrow />
            </span>
          </S.Btn>
        )
      ) : (
        <S.Btn onClick={() => history.push(Config.LINK.COMMENT)}>
          학교가 불편한 순간을
          <br /> 자유롭게 남겨주세요.
          <S.LinkTextWrapper>
            <span>의견 남기기</span>
            <I.RightArrow />
          </S.LinkTextWrapper>
        </S.Btn>
      )}
    </S.Positioner>
  );
};

export default LeftBox;
