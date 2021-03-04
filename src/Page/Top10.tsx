import { Top10Page, Header, Footer } from "../Components/index";

const Top10: React.FC = () => {
  return (
    <>
      <Header state="student" /> <Top10Page /> <Footer />
    </>
  );
};

export default Top10;
