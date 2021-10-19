import { SystemCheck, SeoHelmet } from "../Components/index";

const LeaveComments: React.FC = () => {
  const pageTitle: string = "서비스 점검";
  const desc: string = "학교가 불편한 순간이 현재 서비스 점검 중에 있습니다.";

  return (
    <>
      <SeoHelmet pageTitle={pageTitle} desc={desc} />
      <SystemCheck />
    </>
  );
};

export default LeaveComments;
