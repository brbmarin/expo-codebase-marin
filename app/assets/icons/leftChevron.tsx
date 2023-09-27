import React, { FC } from "react";

import { SvgIcon, SvgIconProps } from "./svgIcon";

const LeftChevron = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.82305 9.39485C6.48834 9.72955 6.48834 10.2731 6.82305 10.6078L11.9642 15.749C12.2989 16.0837 12.8425 16.0837 13.1772 15.749C13.5119 15.4143 13.5119 14.8707 13.1772 14.536L8.64119 10L13.1745 5.46402C13.5092 5.12931 13.5092 4.58574 13.1745 4.25103C12.8398 3.91632 12.2962 3.91632 11.9615 4.25103L6.82038 9.39217L6.82305 9.39485Z" />
</svg>
`;

export const LeftChevronSvg: FC<SvgIconProps> = (props) => (
  <SvgIcon width="20" height="20" xml={LeftChevron} {...props} />
);
