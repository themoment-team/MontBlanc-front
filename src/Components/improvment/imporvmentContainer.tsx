import Improvement from "Api/improvement";

export interface list {
  content: string;
  header: string;
}

export const improvement = () => {
  const res = Improvement.viewImprovment();
  return res;
};

export const heading: string[] = ["실제 개선 사례"];
export const explanation: string[] = [
  "다양한 의견을 남겨주셔서 정말 감사합니다.",
  "여러분들이 남겨주신 의견들을 바탕으로 하나하나 개선해나가고 있습니다.",
  "앞으로도 학교가 불편한 순간이 있다면 자유롭게 의견을 남겨주세요.",
];
