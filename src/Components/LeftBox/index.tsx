import React, { useState } from "react";
import * as S from "./style";
import * as I from "../../Asset/SVG";
import { PageExplanation } from "Components";
import { HasAdminToken } from "Atom";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import Config from "Shared/Config.json";
import Table from "Api/table";
import { EditModal } from "Components/Modals";

interface LeftBoxProps {
  heading: string[];
  explanation: string[];
}

const useWriteTable = () => {
  const writeTable = async (
    content: string,
    setContent: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    setContent("");
    return await Table.writeTable(content);
  };

  return writeTable;
};

const LeftBox: React.FC<LeftBoxProps> = ({ heading, explanation }) => {
  const [content, setContent] = useState("");
  const [length, setLength] = useState(0);
  const logged = useRecoilValue(HasAdminToken);
  const navigate = useNavigate();
  const path = window.location.pathname;

  const tryWriteTable = useWriteTable();

  const textAreaOnchange = (e: any) => {
    setLength(e.target.value.length);
    setContent(e.target.value);
  };

  return (
    <S.Positioner>
      <PageExplanation heading={heading} explanation={explanation} />
      {logged ? (
        path === Config.LINK.IMPROVEMENT ? (
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
        ) : (
          path === Config.LINK.BEFORERANK && (
            <S.Btn>
              <EditModal
                idx={1}
                state="improvement"
                heading="작성하기"
                ButtonContent={"지난 TOP3 작성하기"}
              />
              <span>
                <I.RightArrow />
              </span>
            </S.Btn>
          )
        )
      ) : path === Config.LINK.COMMENT ? (
        <>
          <S.Form>
            <textarea
              placeholder="자유롭게 의견을 남겨주세요."
              onChange={textAreaOnchange}
              value={content}
            />
            <S.FormBtn
              Length={length}
              onClick={() => {
                length >= 8 && tryWriteTable(content, setContent);
              }}
            >
              등 록
            </S.FormBtn>
          </S.Form>
          <S.Btn onClick={() => navigate(Config.LINK.RANK)}>
            많은 학생들이 공감한
            <br />
            불편함은 무엇일까요?
            <S.LinkTextWrapper>
              <span>Top 30 보러가기</span>
              <I.RightArrow />
            </S.LinkTextWrapper>
          </S.Btn>
        </>
      ) : (
        <S.Btn onClick={() => navigate(Config.LINK.COMMENT)}>
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
