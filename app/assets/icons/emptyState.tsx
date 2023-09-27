import React, { FC } from "react";

import { SvgIcon, SvgIconProps } from "./svgIcon";

const EmptyState = `<svg width="375" height="404" viewBox="0 20 375 404" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.16" d="M268.972 362.805C346.436 318.081 372.808 218.737 327.877 140.913C282.945 63.0887 183.724 36.2556 106.26 80.9793C28.7967 125.703 2.42431 225.047 47.356 302.871C92.2876 380.695 191.509 407.528 268.972 362.805Z" fill="#1D1C1C" stroke="url(#paint0_linear_5000_21395)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="13 24"/>
<path opacity="0.48" d="M200.115 343.462C267.244 336.434 315.94 276.066 308.88 208.624C301.82 141.182 241.678 92.2071 174.548 99.2345C107.419 106.262 58.7233 166.631 65.7833 234.072C72.8433 301.514 132.986 350.489 200.115 343.462Z" fill="#1D1C1C" stroke="url(#paint1_linear_5000_21395)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="13 24"/>
<path d="M187.5 309.959C235.825 309.959 275 270.56 275 221.959C275 173.358 235.825 133.959 187.5 133.959C139.175 133.959 100 173.358 100 221.959C100 270.56 139.175 309.959 187.5 309.959Z" fill="#1D1C1C" stroke="url(#paint2_linear_5000_21395)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="13 24"/>
<defs>
<linearGradient id="paint0_linear_5000_21395" x1="136.701" y1="403.943" x2="241.689" y2="36.6152" gradientUnits="userSpaceOnUse">
<stop stop-color="#952AB0"/>
<stop offset="1" stop-color="#168F98"/>
</linearGradient>
<linearGradient id="paint1_linear_5000_21395" x1="96.312" y1="331.181" x2="281.518" y2="110.262" gradientUnits="userSpaceOnUse">
<stop stop-color="#952AB0"/>
<stop offset="1" stop-color="#168F98"/>
</linearGradient>
<linearGradient id="paint2_linear_5000_21395" x1="114.5" y1="293.459" x2="263" y2="149.959" gradientUnits="userSpaceOnUse">
<stop stop-color="#952AB0"/>
<stop offset="1" stop-color="#168F98"/>
</linearGradient>
</defs>
</svg>`;

export const EmptyStateSvg: FC<SvgIconProps> = (props) => (
  <SvgIcon height={400} width={400} xml={EmptyState} {...props} />
);
