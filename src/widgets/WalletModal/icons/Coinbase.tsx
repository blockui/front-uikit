import React from "react";
import Svg from "../../../../../uikit/src/components/Svg/Svg";
import { SvgProps } from "../../../../../uikit/src/components/Svg";

const Icon: React.FC<SvgProps> = (props) => {
  return (
      <Svg viewBox="0 0 96 96" {...props}>
          <path d="M0 21.5327C0 9.64052 9.64052 0 21.5327 0H74.4673C86.3595 0 96 9.64052 96 21.5327V74.4673C96 86.3595 86.3595 96 74.4673 96H21.5327C9.64052 96 0 86.3595 0 74.4673V21.5327Z" fill="#0A59FF"/>
          <path d="M81.8692 48C81.8692 66.7054 66.7054 81.8692 48 81.8692C29.2946 81.8692 14.1309 66.7054 14.1309 48C14.1309 29.2946 29.2946 14.1309 48 14.1309C66.7054 14.1309 81.8692 29.2946 81.8692 48Z" fill="white"/>
          <path d="M37.0094 39.7009C37.0094 38.2143 38.2145 37.0093 39.701 37.0093H56.2991C57.7856 37.0093 58.9907 38.2143 58.9907 39.7009V56.299C58.9907 57.7855 57.7856 58.9906 56.2991 58.9906H39.701C38.2145 58.9906 37.0094 57.7855 37.0094 56.299V39.7009Z" fill="#0A59FF"/>
      </Svg>
  );
};

export default Icon;
