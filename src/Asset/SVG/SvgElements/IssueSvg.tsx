import React from "react";

class IssueSvg extends React.Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        fill="none"
        viewBox="0 0 14 14"
      >
        <g fill="#3B3E57" clipPath="url(#clip0)">
          <path d="M9.111 3.146A4.788 4.788 0 004.813.465C2.159.465 0 2.61 0 5.25c0 .717.153 1.404.457 2.045l-.45 2.25a.41.41 0 00.482.482l2.277-.45c.307.145.624.256.95.332-.73-3.46 1.892-6.708 5.394-6.763z"></path>
          <path d="M13.542 10.795c.079-.166.147-.335.206-.506h-.015c1.023-3.006-1.13-6.165-4.309-6.318A4.79 4.79 0 004.416 8.75a4.79 4.79 0 004.778 4.785 4.733 4.733 0 002.04-.458c2.493.493 2.299.458 2.356.458a.41.41 0 00.402-.49l-.45-2.25z"></path>
        </g>
        <defs>
          <clipPath id="clip0">
            <path fill="#fff" d="M0 0H14V14H0z"></path>
          </clipPath>
        </defs>
      </svg>
    );
  }
}

export default IssueSvg;
