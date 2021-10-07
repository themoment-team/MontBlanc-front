import {
  Header,
  Footer,
  AboutPage,
  ChannelTalkHelmet,
  SeoHelmet,
} from "../Components";

const About: React.FC = () => {
  const pageTitle: string = "캠페인 자세히 보기";
  const desc: string =
    "학교가 불편한 순간 캠페인 자세히 보기에서 학교가 불편한 순간에 대해 자세히 알아보세요.";

  return (
    <>
      <SeoHelmet pageTitle={pageTitle} desc={desc} />
      <ChannelTalkHelmet />
      <Header />
      <AboutPage />
      <Footer />
    </>
  );
};

export default About;
