import React, { FC } from "react";

import { SvgIcon, SvgIconProps } from "./svgIcon";

const FlagBE = `<svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3_2720)">
<path d="M0 0H27V18H0V0Z" fill="#FDDA25"/>
<path d="M0 0H9V18H0V0Z" fill="black"/>
<path d="M18 0H27V18H18V0Z" fill="#EF3340"/>
</g>
<defs>
<clipPath id="clip0_3_2720">
<rect width="27" height="18" rx="2" fill="white"/>
</clipPath>
</defs>
</svg>
`;

export const FlagBESvg: FC<SvgIconProps> = (props) => (
  <SvgIcon width="27" height="18" xml={FlagBE} {...props} />
);
