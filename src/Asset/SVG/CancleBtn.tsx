import React from "react";

class CancleBtn extends React.PureComponent {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        fill="none"
        viewBox="0 0 35 35"
      >
        <circle cx="17.5" cy="17.5" r="17.5" fill="#F1F1F1"></circle>
        <path
          stroke="#ADADAD"
          strokeLinecap="round"
          strokeWidth="2.5"
          d="M23.657 23.657L12.343 12.343M23.657 12.343L12.343 23.657"
        ></path>
      </svg>
    );
  }
}

export default CancleBtn;
