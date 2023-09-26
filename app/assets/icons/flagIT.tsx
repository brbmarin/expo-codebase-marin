import React, { FC } from "react";

import { SvgIcon, SvgIconProps } from "./svgIcon";

const FlagIT = `<svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3_2724)">
<path d="M18.0001 -0.000244141L0 -0.000244141L0 17.9997H27V-0.000244141L18.0001 -0.000244141Z" fill="white"/>
<path d="M0 0L8.99982 0V18.0002H0L0 0Z" fill="#6DA544"/>
<path d="M18.0002 0L27 0V18.0002H18.0002V0Z" fill="#D80027"/>
</g>
<defs>
<clipPath id="clip0_3_2724">
<rect width="27" height="18" rx="2" fill="white"/>
</clipPath>
</defs>
</svg>
`;

export const FlagITSvg: FC<SvgIconProps> = (props) => (
  <SvgIcon width="27" height="18" xml={FlagIT} {...props} />
);
