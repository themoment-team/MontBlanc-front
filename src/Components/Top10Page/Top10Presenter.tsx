import { useEffect, useState } from "react";
import { PageExplanation } from "../PageExplanation";
import { Link } from "react-router-dom";
<<<<<<< HEAD:src/Components/Top10Page/Top10Page.tsx
import { LeftBox, ApiResult } from "../../Constants/GlobalStyle/Detail";
=======
import { LeftBox } from "../../Constants/GlobalStyle/LeftBox";
>>>>>>> 400afa8e0cf0cf19892dd54b5463898dff1500e7:src/Components/Top10Page/Top10Presenter.tsx
import axios from "axios";
import GoodBtn from "../GoodBtn/GoodBtnPresenter";
import * as S from "./styled";

// list 인터페이스
interface list {
  map(arg0: (top10: any) => JSX.Element): import("react").ReactNode;
  boardIdx: number;
  content: string;
  goods: number;
}

const heading: string[] = ["학교가 불편한 순간", "TOP 10"];
const explanation: string[] = [
  "공감이 되는 의견이 있다면 좋아요를 눌러주세요.",
  "좀 더 적극적으로 개선할 수 있도록 노력하겠습니다.",
];

const Top10Page: React.FC = () => {
  const [list, setList] = useState<list | null>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchList = async () => {
    try {
      setList(null);
      setLoading(true);
      setError(null);
      const response = await axios.get(
<<<<<<< HEAD:src/Components/Top10Page/Top10Page.tsx
        "http://192.168.0.4:5000/v1/uncomfortable"
      );
      setList(response.data.list);
    } catch (e) {
=======
        "https://jsonplaceholder.typicode.com/users"
      );
      setList(response.data.list);
    } catch (e) {
      console.log(e.response.status);
>>>>>>> 400afa8e0cf0cf19892dd54b5463898dff1500e7:src/Components/Top10Page/Top10Presenter.tsx
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchList();
  }, []);

  // return

<<<<<<< HEAD:src/Components/Top10Page/Top10Page.tsx
  if (loading) return <ApiResult>로딩중..</ApiResult>;
  if (error) return <ApiResult>에러가 발생했습니다.</ApiResult>;
  if (!list) return <ApiResult>리스트가 없슴다.</ApiResult>;
=======
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!list) return null;
>>>>>>> 400afa8e0cf0cf19892dd54b5463898dff1500e7:src/Components/Top10Page/Top10Presenter.tsx

  return (
    <S.TopTenWrapper>
      <LeftBox>
        <PageExplanation heading={heading} explanation={explanation} />
        <S.Btn>
          <Link to="/Leave_opinion">의견 남기기</Link>
        </S.Btn>
      </LeftBox>
      <S.RightBox>
        {list.map((top10) => (
          <S.TenIssues>
            <span>
              <span>{top10.boardIdx}위</span>
              <article>{top10.content}</article>
            </span>
            <span>
              <button>답변보기</button>
              <GoodBtn Background={false} Goods={top10.goods} />
            </span>
          </S.TenIssues>
        ))}
      </S.RightBox>
    </S.TopTenWrapper>
  );
};

export default Top10Page;
