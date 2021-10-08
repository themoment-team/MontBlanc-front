import {
  Header,
  LeaveCommentsPage,
  ChannelTalkHelmet,
  SeoHelmet,
} from '../Components';

const LeaveComments: React.FC = () => {
  const pageTitle: string = '의견 남기기';
  const desc: string =
    '학교가 불편한 순간 의견 남기기에서 여러분의 불편한 순간들을 남겨보세요.';

  return (
    <>
      <SeoHelmet pageTitle={pageTitle} desc={desc} />
      <ChannelTalkHelmet />
      <Header />
      <LeaveCommentsPage />
    </>
  );
};

export default LeaveComments;
