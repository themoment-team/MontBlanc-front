import React from "react";
import { Header, SeoHelmet, ChannelTalkHelmet } from "../Components";
import NotFoundPage from "../Components/NotFoundPage";

const NotFound: React.FC = () => {
  return (
    <>
      <SeoHelmet pageTitle={"Not Found"} desc={"404 Not Found Error"} />
      <Header />
      <ChannelTalkHelmet />
      <NotFoundPage />
    </>
  );
};

export default NotFound;
