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
  //post 작성, put 수정, delete 삭제, get 게시글+답변보기
  detailAnswer: (boardIdx: number) => {
    return `/answer/${boardIdx}`;
  },
};

//실제개선사례
export const ImprovementController = {
  writeSolved: () => {
    return `/admin/solved`;
  },
  //put 개선사례수정, delete 개선사례삭제
  detailSolved: (improveIdx: number) => {
    return `/admin/solved/${improveIdx}`;
  },
  viewSolved: () => {
    return `solved`;
  },
};

//게시글
export const TableController = {
  //post 게시글 작성, get 게시글 보기
  detailUncomfortable: () => {
    return `/uncomfortable`;
  },
  detailGoods: (boardIdx: number) => {
    return `/uncomfortable/${boardIdx}`;
  },
  cancelGoods: (boardIdx: number) => {
    return `/uncomfortable/cancel/${boardIdx}`;
  },
};
