import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        opacity="0.48"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2501 3.90742C11.3616 2.14525 10.7132 0.568236 10.2501 0C16.5605 2.75818 16.5396 9.18117 15.7403 12.0479C17.6959 11.2511 18.0192 9.37909 17.9364 8.5427C18.5638 9.28332 19.9666 11.1208 20.5582 12.5459C21.2977 14.3272 21.3425 17.1812 18.8327 19.9393C16.8249 22.1459 14.7453 23.6383 12.0234 24C13.7041 22.4485 15.8748 22.1804 16.7039 20.4948C17.533 18.8093 16.3453 16.0511 14.0821 13.9441C12.2714 12.2586 12.5657 10.6369 12.9392 10.0367C12.6031 10.1644 11.6574 10.7837 10.5639 12.2394C9.4703 13.6951 9.71979 16.2809 9.98123 17.3919C8.9056 16.9015 8.71139 15.8085 8.74874 15.3232C8.21093 15.7574 7.12185 17.1199 7.06807 19.0966C7.01429 21.0733 11.03 23.1891 12.0234 24C8.95579 23.7212 4.62551 19.8244 3.5947 17.6026C2.56389 15.3807 2.92243 13.3121 4.28937 10.8986C5.01728 9.61349 6.26623 8.3392 7.4847 7.09602C8.5544 6.00461 9.60062 4.93718 10.2501 3.90742Z"
      />
      <path d="M12.0195 24.0001C13.8262 23.6409 16.0809 21.9883 16.704 20.4948C17.5331 18.8093 16.3455 16.0511 14.0822 13.9442C12.2715 12.2586 12.5658 10.6369 12.9393 10.0367C12.6032 10.1644 11.6575 10.7838 10.564 12.2395C9.47042 13.6952 9.71991 16.281 9.98134 17.3919C8.90572 16.9015 8.71151 15.8085 8.74885 15.3233C8.21104 15.7574 7.12197 17.1199 7.06819 19.0966C6.99929 21.629 10.2925 23.6011 12.0195 24.0001Z" />
    </Svg>
  );
};

export default Icon;
