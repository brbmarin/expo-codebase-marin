import React, { FC } from "react";

import { SvgIcon, SvgIconProps } from "./svgIcon";

const VerticalDots = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0001 5.66667C11.2876 5.66667 12.3334 4.62083 12.3334 3.33333C12.3334 2.04583 11.2876 1 10.0001 1C8.71258 1 7.66675 2.04583 7.66675 3.33333C7.66675 4.62083 8.71258 5.66667 10.0001 5.66667ZM10.0001 12.3333C11.2876 12.3333 12.3334 11.2875 12.3334 10C12.3334 8.7125 11.2876 7.66667 10.0001 7.66667C8.71258 7.66667 7.66675 8.7125 7.66675 10C7.66675 11.2875 8.71258 12.3333 10.0001 12.3333ZM12.3334 16.6667C12.3334 15.3792 11.2876 14.3333 10.0001 14.3333C8.71258 14.3333 7.66675 15.3792 7.66675 16.6667C7.66675 17.9542 8.71258 19 10.0001 19C11.2876 19 12.3334 17.9542 12.3334 16.6667Z" fill="white"/>
</svg>
`;

export const VerticalDotsSvg: FC<SvgIconProps> = (props) => (
  <SvgIcon width="20" height="20" xml={VerticalDots} {...props} />
);