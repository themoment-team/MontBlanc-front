import {
  Header,
  Footer,
  ImprovmentPage,
  ChannelTalkHelmet,
  SeoHelmet,
} from "../Components";

const improvment: React.FC = () => {
  const pageTitle: string = "실제 개선 사례";
  const desc: string =
    "학교가 불편한 순간 실제 개선 사례에서 개선된 불편함들을 확인하세요.";

  return (
    <>
      <SeoHelmet pageTitle={pageTitle} desc={desc} />
      <ChannelTalkHelmet />
      <Header />
      <ImprovmentPage />
      <Footer />
    </>
  );
};

export default improvment;
