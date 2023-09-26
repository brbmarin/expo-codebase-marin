import React, { FC } from "react";

import { SvgIcon, SvgIconProps } from "./svgIcon";

const Heart = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.25 4C4.69365 4 1 7.73031 1 12.3318C1 20.6637 10.75 28.238 16 30C21.25 28.238 31 20.6637 31 12.3318C31 7.73031 27.3063 4 22.75 4C19.9598 4 17.493 5.39891 16 7.54012C14.507 5.39891 12.0402 4 9.25 4Z" fill="white"/>
</svg>
`;

export const HeartSvg: FC<SvgIconProps> = (props) => (
  <SvgIcon width="32" height="32" xml={Heart} {...props} />
);
