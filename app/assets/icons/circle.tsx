import React, { FC } from "react";

import { SvgIcon, SvgIconProps } from "./svgIcon";

const Circle = `<svg width="175" height="176" viewBox="0 0 175 176" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M172 88C172 134.96 134.152 173 87.5 173C40.848 173 3 134.96 3 88C3 41.0397 40.848 3 87.5 3C134.152 3 172 41.0397 172 88Z" stroke="url(#paint0_linear_4856_24548)" stroke-width="6"/>
<defs>
<linearGradient id="paint0_linear_4856_24548" x1="14.5" y1="159.5" x2="163" y2="16" gradientUnits="userSpaceOnUse">
<stop stop-color="#771691"/>
<stop offset="1" stop-color="#24B5C0"/>
</linearGradient>
</defs>
</svg>
`;

export const CircleSvg: FC<SvgIconProps> = (props) => (
  <SvgIcon width="175" height="176" xml={Circle} {...props} />
);
