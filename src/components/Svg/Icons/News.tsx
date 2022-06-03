import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg {...props} viewBox="0 0 40 40">
      <rect width="40" height="40" rx="8" fill="#2E7AFF" />
      <path
        d="M21.3711 23.0156V14.2266C20.9401 14.319 20.0674 14.4431 19.2877 14.4993H12.4375C12.058 14.4993 11.75 14.8073 11.75 15.1868V15.8743H9.6875C9.308 15.8743 9 16.1823 9 16.5618V20.6868C9 21.0663 9.308 21.3743 9.6875 21.3743H11.75V22.0618C11.75 22.4413 12.058 22.7493 12.4375 22.7493H12.8541L15.6179 30.1165C15.787 30.5579 16.1651 30.8783 16.6299 30.9718C16.722 30.991 16.8141 31.0007 16.9049 31.0007C17.272 31.0007 17.6212 30.8549 17.8715 30.5937L19.5229 28.956C19.945 28.5339 20.0454 27.8753 19.7759 27.3652L17.4686 22.7493H19.2946C20.1591 22.7999 20.8448 22.9032 21.3711 23.0156Z"
        fill="white"
      />
      <path
        opacity="0.48"
        d="M30.8872 9.33202C30.8735 9.30864 30.8611 9.28939 30.8432 9.26739C30.7676 9.17114 30.6727 9.09277 30.5559 9.04739C30.5517 9.04602 30.549 9.04052 30.5449 9.03914C30.5311 9.03502 30.5187 9.04189 30.505 9.03777C30.4431 9.01989 30.3812 8.99927 30.3125 8.99927C30.2657 8.99927 30.2245 9.01714 30.1791 9.02677C30.153 9.03227 30.1282 9.03364 30.1021 9.04189C29.9839 9.08039 29.8821 9.14639 29.801 9.23714C29.7955 9.24264 29.7872 9.24402 29.7817 9.24952C27.6381 11.8524 24.6489 13.5931 21.375 14.2311V23.0187C24.6489 23.6567 27.6381 25.3961 29.7817 27.999C29.7872 28.0059 29.7969 28.0086 29.8037 28.0169C29.8519 28.0705 29.911 28.1131 29.9742 28.1489C29.9949 28.1612 30.0114 28.1791 30.032 28.1887C30.1186 28.2259 30.2121 28.2492 30.3125 28.2492C30.3909 28.2492 30.4679 28.2355 30.5449 28.2094C30.549 28.208 30.5517 28.2025 30.5559 28.2011C30.6727 28.1557 30.7676 28.0787 30.8432 27.9811C30.8597 27.9591 30.8721 27.9399 30.8872 27.9165C30.9532 27.8106 31 27.6937 31 27.5617V9.68677C31 9.55477 30.9532 9.43789 30.8872 9.33202Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
