//관리자
export const AdminController = {
  login: () => {
    return `/login`;
  },
  logout: () => {
    return `/logout`;
  },
  signup: () => {
    return `/join`;
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
    return `/rank/answer/${answerIdx}`;
  },
  detail2Answer: (uncomfortableIdx: number) => {
    return `/rank/answer/${uncomfortableIdx}`;
  }
};

//실제개선사례
export const ImprovementController = {
  //put 개선사례수정, delete 개선사례삭제
  detailSolved: (improveIdx: number) => {
    return `/solved/${improveIdx}`;
  },
  //get 개선사례보기, post 개선사례작성
  detail2Solved: () => {
    return `/solved`;
  },
};

//게시글
export const TableController = {
  getRankUncomfortable: () => {
    return `/uncomfortable/rank`;
  },
  //post 게시글 작성, get 게시글 보기
  detailUncomfortable: () => {
    return `/uncomfortable`;
  },
  increaseGoods: (uncomfortableIdx: number) => {
    return `/uncomfortable/like/increase/${uncomfortableIdx}`;
  },
  decreaseGoods: (uncomfortableIdx: number) => {
    return `/uncomfortable/like/decrease/${uncomfortableIdx}`;
  },
  amountUncomfortable: () => {
    return `/uncomfortable/amount`;
  },
  dateSinceProjectStart: () => {
    return `/uncomfortable/dateSinceProjectStart`;
  },
};
