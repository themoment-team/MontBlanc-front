//관리자
export const AdminController = {
  login: () => {
    return `/login`;
  },
  logout: () => {
    return `/logout`;
  },
  signup: () => {
    return `/signup`;
  },
  //회원탈퇴
  withdrawal: () => {
    return `/withdrawal`;
  },
};

//답변
export const AnswerController = {
  //put 답변수정, delete 답변삭제, post 답변작성
  detailAnswer: (answerIdx: number) => {
    return `/top10/answer/${answerIdx}`;
  },
};

//실제개선사례
export const ImprovementController = {
  //get 개선사례보기, post 개선사례작성
  detailSolved: (improveIdx: number) => {
    return `/admin/solved/${improveIdx}`;
  },
  //put 개선사례수정, delete 개선사례삭제
  detail2Solved: () => {
    return `/solved`;
  },
};

//게시글
export const TableController = {
  viewTop10Uncomfortable: () => {
    return `/uncomfortable/top10`;
  },
  //post 게시글 작성, get 게시글 보기
  detailUncomfortable: () => {
    return `/uncomfortable`;
  },
  AddGoods: (boardIdx: number) => {
    return `/uncomfortable/${boardIdx}`;
  },
  cancelGoods: (boardIdx: number) => {
    return `/uncomfortable/cancel/${boardIdx}`;
  },
};
