import React, { FC } from "react";

import { SvgIcon, SvgIconProps } from "./svgIcon";

const NewError = `<svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z" fill="url(#paint0_linear_7171_1521)"/>
<path d="M20 21V14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.0001 24C19.6679 24 19.3496 24.1476 19.1162 24.3825C18.8828 24.6173 18.7538 24.9353 18.7579 25.2654C18.7703 25.9421 19.3193 26.4877 20.0001 26.5C20.6947 26.5 21.2578 25.9404 21.2578 25.25C21.2578 24.5596 20.6947 24 20.0001 24Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_7171_1521" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
<stop stop-color="#DB1444"/>
<stop offset="1" stop-color="#820B0B"/>
</linearGradient>
</defs>
</svg>

`;

export const NewErrorSvg: FC<SvgIconProps> = (props) => (
  <SvgIcon width="41" height="40" xml={NewError} {...props} />
);
