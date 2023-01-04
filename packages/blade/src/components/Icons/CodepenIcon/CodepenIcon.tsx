import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const CodepenIcon: IconComponent = ({ size, color }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5572 1.1695C12.398 1.06246 12.2063 1 12 1C11.7937 1 11.602 1.06246 11.4428 1.1695L1.47281 7.64999C1.38089 7.70694 1.29702 7.77966 1.22551 7.86739C1.19674 7.90262 1.17046 7.93971 1.14683 7.97837C1.04567 8.14347 0.997988 8.3279 1 8.51022V15.4898C0.997964 15.6743 1.04683 15.861 1.15053 16.0276C1.17084 16.0604 1.19306 16.0919 1.21709 16.1222C1.29054 16.2148 1.37759 16.2911 1.47336 16.3504L11.4431 22.8307C11.5902 22.9295 11.765 22.9903 11.9534 22.9989C11.9689 22.9996 11.9845 23 12 23C12.0119 23 12.0237 22.9998 12.0356 22.9994C12.2281 22.9926 12.4069 22.9315 12.5569 22.8307L22.5257 16.351C22.6382 16.2816 22.7386 16.1886 22.8193 16.0735C22.9445 15.8945 23.003 15.6889 23 15.486V8.51402C23.003 8.31115 22.9445 8.10548 22.8193 7.92656L22.8137 7.91867C22.8069 7.90913 22.7999 7.89971 22.7927 7.89041C22.7172 7.79198 22.6265 7.7113 22.5262 7.64936L12.5572 1.1695ZM11 3.84269L3.78766 8.53071L7.00001 10.7794L11 7.97936V3.84269ZM13 7.97933V3.84269L20.2124 8.53073L17 10.7794L13 7.97933ZM5.25621 12L3 10.4207V13.5794L5.25621 12ZM18.7438 12L21 10.4207V13.5793L18.7438 12ZM12 9.72066L8.7438 12L12 14.2794L15.2562 12L12 9.72066ZM11 16.0207L7.00001 13.2207L3.78767 15.4693L11 20.1573V16.0207ZM20.2124 15.4693L17 13.2207L13 16.0207V20.1573L20.2124 15.4693Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default CodepenIcon;
