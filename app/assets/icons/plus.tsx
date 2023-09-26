import React, { FC } from "react";

import { SvgIcon, SvgIconProps } from "./svgIcon";

const Plus = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V5Z" fill="#545454"/>
<path d="M19 11C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13L5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11L19 11Z" fill="#545454"/>
</svg>
`;

export const PlusSvg: FC<SvgIconProps> = (props) => (
  <SvgIcon width="24" height="24" xml={Plus} {...props} />
);
