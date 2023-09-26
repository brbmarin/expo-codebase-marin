import React, { FC } from "react";

import { SvgIcon, SvgIconProps } from "./svgIcon";

const Mosaic = `<svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.875 10C12.6659 10 10.875 11.7909 10.875 14V30C10.875 32.2091 12.6659 34 14.875 34H30.875C33.0841 34 34.875 32.2091 34.875 30V14C34.875 11.7909 33.0841 10 30.875 10H14.875ZM30.875 12H24.875V17H32.875V14C32.875 12.8954 31.9796 12 30.875 12ZM24.875 23L24.875 19H32.875V23H24.875ZM22.875 23H12.875V14C12.875 12.8954 13.7704 12 14.875 12L22.875 12V23ZM12.875 25V30C12.875 31.1046 13.7704 32 14.875 32H19.875V25H12.875ZM21.875 25V32H30.875C31.9796 32 32.875 31.1046 32.875 30V25H21.875Z" />
</svg>
`;

export const MosaicSvg: FC<SvgIconProps> = (props) => (
  <SvgIcon width="45" height="44" xml={Mosaic} {...props} />
);
