import PropTypes from "prop-types";
export const SpriteSVG = ({ name }) => {
  switch (name) {
    case "favorite":
      return (
        <svg id="icon-favorite" viewBox="0 0 32 32">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.6667"
            d="M27.787 6.148c-1.327-1.328-3.161-2.149-5.187-2.149s-3.859 0.821-5.187 2.149l-1.413 1.413-1.413-1.413c-1.325-1.315-3.151-2.128-5.166-2.128-4.051 0-7.335 3.284-7.335 7.335 0 2.015 0.813 3.841 2.128 5.167l11.786 11.784 11.787-11.787c1.328-1.327 2.149-3.161 2.149-5.187s-0.821-3.859-2.149-5.187l-0-0z"
          ></path>
        </svg>
      );
    case "close":
      return (
        <svg id="icon-close" viewBox="0 0 32 32">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.4"
            d="M24 8l-16 16M8 8l16 16"
          ></path>
        </svg>
      );

    case "select":
      return (
        <svg id="icon-chevron-down" viewBox="0 0 32 32">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="3.2"
            d="M8 12l8 8 8-8"
          ></path>
        </svg>
      );

    default:
      return "SVG not found";
  }
};

SpriteSVG.propTypes = {
  name: PropTypes.oneOf(["favorite", "close", "select"]).isRequired,
};
