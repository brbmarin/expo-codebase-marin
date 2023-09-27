import React, { FC } from "react";

import { SvgIcon, SvgIconProps } from "./svgIcon";

const FlagFR = `<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H24V18H0V0Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.8 0H24V18H16.8V0Z" fill="#F50100"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H8.4V18H0V0Z" fill="#2E42A5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.2 0H16.8V18H7.2V0Z" fill="#F7FCFF"/>
</svg>
`;

export const FlagFRSvg: FC<SvgIconProps> = (props) => (
  <SvgIcon width="24" height="18" xml={FlagFR} {...props} />
);
