import { Helmet } from "react-helmet";

interface SeoHelmetProps {
  pageTitle: string;
  desc: string;
}

const SeoHelmet: React.FC<SeoHelmetProps> = ({ pageTitle, desc }) => {
  return (
    <Helmet>
      <title>학교가 불편한 순간{" | " + pageTitle}</title>
      <meta name="description" content={desc} />
    </Helmet>
  );
};

export default SeoHelmet;
