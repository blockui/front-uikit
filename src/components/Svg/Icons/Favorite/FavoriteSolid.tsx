import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 22C11.6603 21.9996 11.3287 21.8985 11.0481 21.7099C6.89215 18.9312 5.09258 17.026 4.09999 15.8349C1.98472 13.2958 0.972031 10.6891 1.00059 7.86615C1.0339 4.63125 3.669 2 6.8747 2C9.20573 2 10.8202 3.29323 11.7604 4.37031C11.7902 4.40409 11.827 4.43117 11.8684 4.44973C11.9097 4.46829 11.9546 4.4779 12 4.4779C12.0454 4.4779 12.0903 4.46829 12.1316 4.44973C12.173 4.43117 12.2098 4.40409 12.2396 4.37031C13.1798 3.29219 14.7943 2 17.1253 2C20.331 2 22.9661 4.63125 22.9994 7.86667C23.028 10.6901 22.0142 13.2969 19.9 15.8354C18.9074 17.0266 17.1079 18.9318 12.9519 21.7104C12.6713 21.8988 12.3396 21.9997 12 22Z" />
    </Svg>
  );
};

export default Icon;
