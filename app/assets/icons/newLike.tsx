import React, { FC } from "react";

import { SvgIcon, SvgIconProps } from "./svgIcon";

const NewLike = `<svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35 28C42.732 28 49 21.732 49 14C49 6.26801 42.732 0 35 0C27.268 0 21 6.26801 21 14C21 21.732 27.268 28 35 28Z" fill="url(#paint0_radial_7171_3362)"/>
<path d="M20.5 48C31.8218 48 41 38.8218 41 27.5C41 16.1782 31.8218 7 20.5 7C9.17816 7 0 16.1782 0 27.5C0 38.8218 9.17816 48 20.5 48Z" fill="url(#paint1_radial_7171_3362)"/>
<path d="M15.325 18C11.8318 18 9 20.8695 9 24.4091C9 30.8182 16.475 36.6447 20.5 38C24.525 36.6447 32 30.8182 32 24.4091C32 20.8695 29.1682 18 25.675 18C23.5358 18 21.6447 19.0761 20.5 20.7232C19.3553 19.0761 17.4642 18 15.325 18Z" fill="white"/>
<defs>
<radialGradient id="paint0_radial_7171_3362" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(33.2568 15.3048) rotate(-11.34) scale(15.995)">
<stop offset="0.07" stop-color="#963DAD"/>
<stop offset="0.28" stop-color="#973FAD"/>
<stop offset="0.43" stop-color="#9D49B0"/>
<stop offset="0.56" stop-color="#A659B5"/>
<stop offset="0.68" stop-color="#B26FBB"/>
<stop offset="0.79" stop-color="#C38CC3"/>
<stop offset="0.89" stop-color="#D6ADCD"/>
</radialGradient>
<radialGradient id="paint1_radial_7171_3362" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.1361 28.5899) scale(20.5)">
<stop stop-color="#1FCAD7"/>
<stop offset="0.14" stop-color="#23CAD7"/>
<stop offset="0.29" stop-color="#2FCDD9"/>
<stop offset="0.44" stop-color="#44D1DC"/>
<stop offset="0.59" stop-color="#61D6E1"/>
<stop offset="0.74" stop-color="#86DEE7"/>
<stop offset="0.89" stop-color="#B3E7EE"/>
</radialGradient>
</defs>
</svg>
`;

export const NewLikeSvg: FC<SvgIconProps> = (props) => (
  <SvgIcon width="49" height="48" xml={NewLike} {...props} />
);
