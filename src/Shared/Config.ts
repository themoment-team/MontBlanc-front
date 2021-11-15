const size = {
  mobile: "640px",
  tablet: "960px",
  laptop: "1080px",
};

const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
};

export const color = {
  systemBlue: "#6A76E9",
  systemLightGreen: "#C4DFDB",
}

export const BASE_URL: string = process.env.NODE_ENV === "production" ? "https://server.the-moment.org/v1/" : "http://13.124.55.247:5000/v1/";

export default device;
