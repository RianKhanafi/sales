import { IConsProps } from "module/common/type";
import * as React from "react";

function ArrowOpenSVG(props: React.SVGProps<SVGSVGElement> & IConsProps) {
  const { width = 24, height = 24, fill = "#2B3A2E" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3 17.2748C13.1 17.0748 13.004 16.8331 13.012 16.5498C13.0207 16.2665 13.125 16.0248 13.325 15.8248L16.15 12.9998H5C4.71667 12.9998 4.479 12.9038 4.287 12.7118C4.09567 12.5205 4 12.2831 4 11.9998C4 11.7165 4.09567 11.4788 4.287 11.2868C4.479 11.0955 4.71667 10.9998 5 10.9998H16.15L13.3 8.1498C13.1 7.9498 13 7.71214 13 7.4368C13 7.16214 13.1 6.9248 13.3 6.7248C13.5 6.5248 13.7377 6.4248 14.013 6.4248C14.2877 6.4248 14.525 6.5248 14.725 6.7248L19.3 11.2998C19.4 11.3998 19.471 11.5081 19.513 11.6248C19.5543 11.7415 19.575 11.8665 19.575 11.9998C19.575 12.1331 19.5543 12.2581 19.513 12.3748C19.471 12.4915 19.4 12.5998 19.3 12.6998L14.7 17.2998C14.5167 17.4831 14.2877 17.5748 14.013 17.5748C13.7377 17.5748 13.5 17.4748 13.3 17.2748Z"
        fill={fill}
      />
      <path
        d="M23 6V18"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}

export default ArrowOpenSVG;
