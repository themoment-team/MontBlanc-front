import React from "react";

class EditBtn extends React.PureComponent {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="45"
        fill="none"
        viewBox="0 0 45 45"
      >
        <circle cx="22.5" cy="22.5" r="22.5" fill="#F1F1F1"></circle>
        <path
          stroke="#ADADAD"
          strokeWidth="1.5"
          d="M27.954 12.414a2 2 0 012.829 0l1.803 1.803a2 2 0 010 2.829L19.533 30.098a2 2 0 01-1.414.586h-3.803v-3.803a2 2 0 01.586-1.414l13.052-13.053z"
          clipRule="evenodd"
        ></path>
        <path
          stroke="#ADADAD"
          strokeWidth="1.5"
          d="M25.895 14.474l4.631 4.631"
        ></path>
      </svg>
    );
  }
}

export default EditBtn;
