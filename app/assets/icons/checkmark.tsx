import React, { FC } from "react";

import { SvgIcon, SvgIconProps } from "./svgIcon";

const Checkmark = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 8.5625L10.125 15.4375L7 12.3125" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

export const CheckmarkSvg: FC<SvgIconProps> = (props) => (
  <SvgIcon width="24" height="24" xml={Checkmark} {...props} />
);
