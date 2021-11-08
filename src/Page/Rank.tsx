import {
  RankPage,
  Header,
  Footer,
  ChannelTalkHelmet,
  SeoHelmet,
} from "../Components";

const Rank: React.FC = () => {
  const pageTitle: string = "Rank";
  const desc: string =
    "학교가 불편한 순간 Rank 페이지에서 가장 공감을 많이 받은 불편함을 확인해보세요.";

  return (
    <>
      <SeoHelmet pageTitle={pageTitle} desc={desc} />
      <ChannelTalkHelmet />
      <Header />
      <RankPage />
      <Footer />
    </>
  );
};

export default Rank;
