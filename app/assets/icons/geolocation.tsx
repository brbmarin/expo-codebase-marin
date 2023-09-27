import React, { FC } from "react";

import { SvgIcon, SvgIconProps } from "./svgIcon";

const Geolocation = `<svg width="375" height="294" viewBox="0 0 375 294" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<path opacity="0.08" d="M292.597 248.482C392.667 228.81 426.735 185.112 368.691 150.88C310.648 116.649 182.472 104.846 82.4026 124.518C-17.6666 144.19 -51.735 187.888 6.30868 222.12C64.3524 256.351 192.528 268.154 292.597 248.482Z" fill="#1D1C1C" stroke="url(#paint0_linear_5152_22124)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="12 22"/>
<path opacity="0.16" d="M270.524 220.479C349.577 204.934 376.49 170.403 330.637 143.353C284.784 116.303 183.528 106.976 104.476 122.521C25.4233 138.066 -1.48996 172.597 44.3632 199.647C90.2163 226.697 191.472 236.024 270.524 220.479Z" fill="#1D1C1C" stroke="url(#paint1_linear_5152_22124)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="13 24"/>
<path opacity="0.48" d="M200.207 193.79C266.936 191.586 315.342 172.657 308.324 151.51C301.306 130.363 241.522 115.007 174.793 117.21C108.064 119.414 59.6583 138.343 66.6762 159.49C73.6942 180.637 133.478 195.993 200.207 193.79Z" fill="#1D1C1C" stroke="url(#paint2_linear_5152_22124)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="13 24"/>
<path d="M187.5 165C232.511 165 269 154.255 269 141C269 127.745 232.511 117 187.5 117C142.489 117 106 127.745 106 141C106 154.255 142.489 165 187.5 165Z" fill="#1D1C1C" stroke="url(#paint3_linear_5152_22124)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="13 24"/>
<path d="M155.2 141.592H220.8V75.992H155.2V141.592Z" fill="url(#pattern0)"/>
<defs>
<linearGradient id="paint0_linear_5152_22124" x1="121.726" y1="266.577" x2="138.575" y2="93.4447" gradientUnits="userSpaceOnUse">
<stop stop-color="#952AB0"/>
<stop offset="1" stop-color="#168F98"/>
</linearGradient>
<linearGradient id="paint1_linear_5152_22124" x1="135.54" y1="234.778" x2="148.859" y2="97.9675" gradientUnits="userSpaceOnUse">
<stop stop-color="#952AB0"/>
<stop offset="1" stop-color="#168F98"/>
</linearGradient>
<linearGradient id="paint2_linear_5152_22124" x1="97.023" y1="189.939" x2="126.177" y2="79.6929" gradientUnits="userSpaceOnUse">
<stop stop-color="#952AB0"/>
<stop offset="1" stop-color="#168F98"/>
</linearGradient>
<linearGradient id="paint3_linear_5152_22124" x1="119.506" y1="160.5" x2="141.999" y2="86.268" gradientUnits="userSpaceOnUse">
<stop stop-color="#952AB0"/>
<stop offset="1" stop-color="#168F98"/>
</linearGradient>
</defs>
</svg>`;

export const GeolocationSvg: FC<SvgIconProps> = (props) => (
  <SvgIcon height={400} width={400} xml={Geolocation} {...props} />
);
