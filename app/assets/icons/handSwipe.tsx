import React, { FC } from "react";

import { SvgIcon, SvgIconProps } from "./svgIcon";

const HandSwipe = `<svg width="45" height="47" viewBox="0 0 45 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 21C13 19.343 11.657 18 10 18C8.343 18 7 19.343 7 21V31C7 39.284 13.716 46 22 46C30.284 46 37 39.284 37 31V23C37 21.343 35.657 20 34 20C32.343 20 31 21.343 31 23V21C31 19.343 29.657 18 28 18C26.343 18 25 19.343 25 21V19C25 17.343 23.657 16 22 16C20.343 16 19 17.343 19 19V5C19 3.343 17.657 2 16 2C14.343 2 13 3.343 13 5V28V21Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<path d="M35 15V1M35 1L38 4M35 1L32 4" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

export const HandSwipeSvg: FC<SvgIconProps> = (props) => (
  <SvgIcon width="45" height="47" xml={HandSwipe} {...props} />
);
