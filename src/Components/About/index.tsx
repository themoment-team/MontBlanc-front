import { PageExplanation } from "../PageExplanation";
import * as S from "./style";
import Table from "Api/table";
import { useEffect, useState } from "react";

const useAmount = (): [amount: number, date: number] => {
  const [amount, setAmount] = useState({ data: 0 });
  const [date, setDate] = useState({ data: 0 });
  const getAmount = async () => {
    return await Table.amountUncomfortable();
  };

  const getDataSinceProjectStart = async () => {
    return await Table.dateSinceProjectStart();
  };

  useEffect(() => {
    getAmount().then((res) => setAmount(res.data));
    getDataSinceProjectStart().then((res) => setDate(res.data));
  }, []);

  return [amount.data, date.data];
};

const useHeading = (): string[][] => {
  const [amount, date] = useAmount();
  const day: number = date;
  const cnt_comment: number = amount;

  const heading: string[] = [
    `${day}일 동안`,
    `${cnt_comment}개의 불편함이`,
    `모였습니다.`,
  ];
  const explanation: string[] = [""];

  return [heading, explanation];
};

const AboutPage: React.FC = () => {
  const [heading, explanation] = useHeading();
  return (
    <S.AboutBox>
      <PageExplanation heading={heading} explanation={explanation} />
      <S.AboutHeading>학교가 불편한 순간</S.AboutHeading>
      <S.AboutContent>
        <p>
          학교생활이 저희 덕분에 조금이라도 편해졌다면 우리의 노력이 빛을
          발한거겠죠.
        </p>
        <p>우리는 더 적극적으로 들어보고 싶습니다.</p>
        <p>
          재학 여부, 나이, 성별에 상관없이 학교가 불편했던 순간이 있다면
          들려주세요.
        </p>
      </S.AboutContent>
      <S.Hr />
      <h3>참고해주세요</h3>
      <S.AboutContent>
        <ul>
          <li>
            학교가 불편한 순간은 학교가 더욱 더 개선되기 위해 학생들 관점에서
            느끼는 불편한 순간을 기록하는 장소입니다.
          </li>
          <li>
            학교가 불편한 순간에 올라오는 사례들은 학생들이 실제 제출한
            의견이며, 비속어나 욕설, 타인의 개인정보 등 부적절한 표현은 걸러질
            수 있습니다.
          </li>
          <li>
            사용자가 제출한 의견은 프로젝트 페이지 상에 무작위로 노출됩니다.
          </li>
          <li>
            사용자가 의견을 제출할 때, IP 주소 등 개인을 식별할 수 있는 정보는
            일절 저장되지 않습니다.
          </li>
          <li>한번 제출 완료한 의견은 수정 및 삭제할 수 없습니다.</li>
          <li>
            사용자가 제출한 의견은 학교 내부 검토를 통해 반영될 수 있습니다.
          </li>
          <li>
            해당 프로젝트 페이지는 사전 고지 없이 변경되거나 종료될 수 있습니다.
          </li>
        </ul>
      </S.AboutContent>
      <h3>자주 묻는 말</h3>
      <S.AboutContent>
        <ul>
          <li>
            <b>
              내가 제출한 의견이 페이지에서 보이지 않습니다. 어떻게 찾을 수
              있나요?
            </b>
            사용자들이 제출한 의견은 프로젝트 페이지 상에 무작위로 표시됩니다.
          </li>
          <li>
            <b>내 개인정보를 “학교가 불편한 순간”이 수집하나요?</b>
            아닙니다. 프로젝트 상에서는 사용자의 개인 정보를 일절 저장하지
            않습니다.
          </li>
          <li>
            <b>내 의견은 어디에 저장되나요?</b>
            사용자들이 남긴 의견은 해당 페이지 서버에 저장됩니다.
          </li>
          <li>
            <b>학교가 불편한 순간은 이걸로 무엇을 하나요?</b>
            학교가 불편한 순간은 학교 생활에서 겪는 어려움과 불편함을 파악하기
            위한 목적으로 본 프로젝트를 실시하고 있습니다.
            <br />
            취합한 의견을 바탕으로 학생들에게 더 나은 학교생활을 제공할 수
            있도록 노력하겠습니다.
          </li>
          <li>
            <b>등록한 의견을 수정 또는 삭제하고 싶어요.</b>
            의견을 제출한 사용자를 식별할 수 있는 개인정보를 수집하지 않아, 한번
            남긴 의견은 수정 또는 삭제할 수 없으니 주의해 주시길 바랍니다.
          </li>
          <li>
            <b>
              “학교가 불편한 순간” 서비스를 사용하면서 느낀 불편함, 어디에 문의
              해야 하나요?
            </b>
            “official.themoment.team@gmail.com”에 의견을 남겨주시면,
            답변드리겠습니다.
          </li>
        </ul>
      </S.AboutContent>
    </S.AboutBox>
  );
};

export default AboutPage;
