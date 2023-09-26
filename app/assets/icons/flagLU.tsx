import React, { FC } from "react";

import { SvgIcon, SvgIconProps } from "./svgIcon";

const FlagLU = `<svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3_2450)">
<path d="M0 0.000305176H27V17.9999H0V0.000305176Z" fill="white"/>
<path d="M0 0.000305176H27V6.00016H0V0.000305176Z" fill="#D80027"/>
<path d="M0 12H27V17.9998H0V12Z" fill="#338AF3"/>
</g>
<defs>
<clipPath id="clip0_3_2450">
<rect width="27" height="18" rx="2" fill="white"/>
</clipPath>
</defs>
</svg>
`;

export const FlagLUSvg: FC<SvgIconProps> = (props) => (
  <SvgIcon width="27" height="18" xml={FlagLU} {...props} />
);
