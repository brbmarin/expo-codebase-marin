import React, { FC } from "react";

import { SvgIcon, SvgIconProps } from "./svgIcon";

const Send = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.79908 9.00083H9.73979M4.79908 9.00083L3 14.8467C7.30356 13.5952 11.3619 11.6182 15 9.00083C11.3622 6.38306 7.30407 4.40559 3.00066 3.15366L4.79842 9.00083H4.79908Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

export const SendSvg: FC<SvgIconProps> = (props) => (
  <SvgIcon width="18" height="18" color="#00000000" xml={Send} {...props} />
);
