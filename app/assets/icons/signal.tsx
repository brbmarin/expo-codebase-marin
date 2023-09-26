import React, { FC } from "react";

import { SvgIcon, SvgIconProps } from "./svgIcon";

const Signal = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.87292 4V5.33333M3.87292 20V14.6667M3.87292 14.6667L6.33515 14.0507C8.18795 13.5876 10.1453 13.8026 11.8534 14.6569L11.9494 14.7049C13.6233 15.5415 15.5376 15.7648 17.3591 15.336L20.1271 14.6853C19.7881 11.5838 19.7866 8.45471 20.1227 5.35289L17.3583 6.00356C15.5369 6.4319 13.6229 6.20827 11.9494 5.37156L11.8534 5.32356C10.1453 4.46929 8.18795 4.25426 6.33515 4.71733L3.87292 5.33333M3.87292 14.6667V5.33333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const SignalSvg: FC<SvgIconProps> = (props) => (
  <SvgIcon width="24" height="24" color="#00000000" xml={Signal} {...props} />
);
