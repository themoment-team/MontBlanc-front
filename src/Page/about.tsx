import { Header, Footer, AboutPage } from "../Components";

const about: React.FC = () => {
  return (
    <>
      <Header state="student" />
      <AboutPage />
      <Footer />
    </>
  );
};

export default about;
