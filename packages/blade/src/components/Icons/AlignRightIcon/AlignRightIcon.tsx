import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const AlignRightIcon: IconComponent = ({ size, color }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 5C2.44772 5 2 5.44772 2 6C2 6.55228 2.44772 7 3 7H21C21.5523 7 22 6.55228 22 6C22 5.44772 21.5523 5 21 5H3Z"
        fill={iconColor}
      />
      <Path
        d="M7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H21C21.5523 11 22 10.5523 22 10C22 9.44772 21.5523 9 21 9H7Z"
        fill={iconColor}
      />
      <Path
        d="M2 14C2 13.4477 2.44772 13 3 13H21C21.5523 13 22 13.4477 22 14C22 14.5523 21.5523 15 21 15H3C2.44772 15 2 14.5523 2 14Z"
        fill={iconColor}
      />
      <Path
        d="M7 17C6.44772 17 6 17.4477 6 18C6 18.5523 6.44772 19 7 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H7Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default AlignRightIcon;
