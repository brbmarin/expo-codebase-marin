import React, { FC } from "react";

import { SvgIcon, SvgIconProps } from "./svgIcon";

const FlagCH = `<svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3_2430)">
<path d="M0 0.000305176H27V18.0003H0V0.000305176Z" fill="#FF0000"/>
<path d="M18.746 7.22504H15.2311V3.71014H11.7162V7.22504H8.20135V10.7399H11.7162V14.2548H15.2311V10.7399H18.746V7.22504Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_3_2430">
<rect width="27" height="18" rx="2" fill="white"/>
</clipPath>
</defs>
</svg>
`;

export const FlagCHSvg: FC<SvgIconProps> = (props) => (
  <SvgIcon width="27" height="18" xml={FlagCH} {...props} />
);
