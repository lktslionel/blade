import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const RefreshCwIcon: IconComponent = ({ size, color }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M10.229 4.19962C12.9081 3.59344 15.7109 4.40415 17.6527 6.34695C17.6601 6.35434 17.6676 6.36162 17.6752 6.36877L20.5257 9H17C16.4477 9 16 9.44772 16 10C16 10.5523 16.4477 11 17 11H23C23.5523 11 24 10.5523 24 10V4C24 3.44772 23.5523 3 23 3C22.4477 3 22 3.44772 22 4V7.63919L19.0559 4.92171C16.6291 2.50142 13.1313 1.49238 9.78761 2.24893C6.4387 3.00667 3.71272 5.42955 2.5673 8.66642C2.38306 9.18707 2.65577 9.7585 3.17642 9.94274C3.69706 10.127 4.26849 9.85426 4.45273 9.33362C5.36907 6.74412 7.54986 4.80581 10.229 4.19962Z"
        fill={iconColor}
      />
      <Path
        d="M2 16.3608V20C2 20.5523 1.55228 21 1 21C0.447715 21 0 20.5523 0 20V14C0 13.4477 0.447715 13 1 13H7C7.55228 13 8 13.4477 8 14C8 14.5523 7.55228 15 7 15H3.47424L6.32478 17.6313C6.3324 17.6384 6.3399 17.6457 6.34729 17.6531C8.28912 19.5959 11.0919 20.4066 13.771 19.8004C16.4502 19.1942 18.6309 17.2559 19.5473 14.6664C19.7315 14.1458 20.303 13.8731 20.8236 14.0573C21.3442 14.2415 21.617 14.813 21.4327 15.3336C20.2873 18.5705 17.5613 20.9934 14.2124 21.7511C10.8687 22.5077 7.37096 21.4986 4.94411 19.0783L2 16.3608Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default RefreshCwIcon;
