import React, { FC } from "react";

import { SvgIcon, SvgIconProps } from "./svgIcon";

const RightChevron = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.2274 10.9243C18.8132 11.5194 18.8132 12.4857 18.2274 13.0808L9.22914 22.2206C8.64332 22.8156 7.69194 22.8156 7.10612 22.2206C6.52029 21.6255 6.52029 20.6592 7.10612 20.0641L15.0452 12.0002L7.1108 3.9362C6.52498 3.34116 6.52498 2.37481 7.1108 1.77978C7.69662 1.18474 8.648 1.18474 9.23382 1.77978L18.2321 10.9196L18.2274 10.9243Z" />
</svg>
`;

export const RightChevronSvg: FC<SvgIconProps> = (props) => (
  <SvgIcon width="24" height="24" xml={RightChevron} {...props} />
);
