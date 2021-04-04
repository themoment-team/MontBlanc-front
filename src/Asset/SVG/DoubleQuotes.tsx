import React from "react";

class DoubleQuotes extends React.Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="58"
        height="50"
        fill="none"
        viewBox="0 0 58 50"
      >
        <g fill="#fff" filter="url(#filter0_d)">
          <path d="M15.289 41.055c6.384 0 11.424-5.176 11.424-11.56 0-6.383-5.243-11.56-11.626-11.56-.064 0-.16.01-.224.01 2.524-2.01 5.694-3.22 9.164-3.22a2.883 2.883 0 002.881-2.89c0-1.596-1.027-2.89-2.623-2.89C12.953 8.945 4 18.165 4 29.495v.008c0 6.38 4.907 11.552 11.289 11.552zM42.364 41.055c6.384 0 11.434-5.176 11.434-11.56 0-6.383-5.24-11.56-11.624-11.56-.064 0-.158.01-.222.01 2.524-2.01 5.696-3.22 9.166-3.22A2.884 2.884 0 0054 11.835c0-1.596-1.043-2.89-2.64-2.89-11.331 0-20.3 9.22-20.3 20.55v.008c0 6.38 4.923 11.552 11.305 11.552z"></path>
        </g>
        <defs>
          <filter
            id="filter0_d"
            width="58"
            height="58"
            x="0"
            y="0"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dy="4"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
    );
  }
}

export default DoubleQuotes;
