import React, { FC } from "react";

import { SvgIcon, SvgIconProps } from "./svgIcon";

const BottomBarHighlight = `<svg width="106" height="103" viewBox="0 0 106 103" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.12" cx="53" cy="53" r="53" fill="#D9D9D9"/>
<circle opacity="0.1" cx="53" cy="53" r="33" fill="#D9D9D9"/>
</svg>
`;

export const BottomBarHighlightSvg: FC<SvgIconProps> = (props) => (
  <SvgIcon width="106" height="103" xml={BottomBarHighlight} {...props} />
);
