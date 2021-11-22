import {
  Header,
  Footer,
  BeforeRankPage,
  ChannelTalkHelmet,
  SeoHelmet,
} from "../Components";

const BeforeRank: React.FC = () => {
  const pageTitle: string = "지난 TOP3";
  const desc: string =
    "학교가 불편한 순간 TOP3에서 이전의 불편함 TOP3를 확인해보세요.";
  return (
    <>
      <SeoHelmet pageTitle={pageTitle} desc={desc} />
      <ChannelTalkHelmet />
      <Header />
      <BeforeRankPage />
      <Footer />
    </>
  );
};

export default BeforeRank;
