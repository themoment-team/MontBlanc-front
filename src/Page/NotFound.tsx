import React from "react";
import { Header, SeoHelmet, ChannelTalkHelmet, NotFoundPage } from "../Components";

const NotFound: React.FC = () => {
  const pageTitle: string = "Not Found";
  const desc: string = "404 Not Found Error";
  
  return (
    <>
      <SeoHelmet pageTitle={pageTitle} desc={desc} />
      <Header />
      <ChannelTalkHelmet />
      <NotFoundPage />
    </>
  );
};

export default NotFound;

