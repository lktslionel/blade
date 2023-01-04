import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const RadioIcon: IconComponent = ({ size, color }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.63715 5.63693C6.02762 5.24635 6.02752 4.61318 5.63694 4.22272C5.24636 3.83225 4.61319 3.83235 4.22273 4.22293C-0.071475 8.51843 -0.071475 15.4814 4.22273 19.7769C4.61319 20.1675 5.24636 20.1676 5.63694 19.7771C6.02752 19.3867 6.02762 18.7535 5.63715 18.3629C2.12372 14.8484 2.12372 9.15143 5.63715 5.63693ZM19.7772 4.22293C19.3867 3.83235 18.7535 3.83225 18.3629 4.22272C17.9724 4.61318 17.9723 5.24635 18.3627 5.63693C21.8762 9.15143 21.8762 14.8484 18.3627 18.3629C17.9723 18.7535 17.9724 19.3867 18.3629 19.7771C18.7535 20.1676 19.3867 20.1675 19.7772 19.7769C24.0714 15.4814 24.0714 8.51843 19.7772 4.22293ZM8.46665 8.45743C8.85739 8.06712 8.85775 7.43396 8.46744 7.04322C8.07713 6.65248 7.44397 6.65212 7.05323 7.04243C5.73879 8.35541 5.00022 10.1371 5.00022 11.9949C5.00022 13.8528 5.73879 15.6345 7.05323 16.9474C7.44397 17.3377 8.07713 17.3374 8.46744 16.9466C8.85775 16.5559 8.85739 15.9227 8.46665 15.5324C7.52777 14.5946 7.00022 13.322 7.00022 11.9949C7.00022 10.6679 7.52777 9.39527 8.46665 8.45743ZM16.9467 7.05243C16.5559 6.66212 15.9227 6.66248 15.5324 7.05322C15.1421 7.44396 15.1425 8.07712 15.5332 8.46743C16.4721 9.40527 16.9997 10.6779 16.9997 12.0049C16.9997 13.332 16.4721 14.6046 15.5332 15.5424C15.1425 15.9327 15.1421 16.5659 15.5324 16.9566C15.9227 17.3474 16.5559 17.3477 16.9467 16.9574C18.2611 15.6445 18.9997 13.8628 18.9997 12.0049C18.9997 10.1471 18.2611 8.36541 16.9467 7.05243ZM12 8.99994C10.3431 8.99994 9 10.3431 9 11.9999C9 13.6568 10.3431 14.9999 12 14.9999C13.6569 14.9999 15 13.6568 15 11.9999C15 10.3431 13.6569 8.99994 12 8.99994ZM11 11.9999C11 11.4477 11.4477 10.9999 12 10.9999C12.5523 10.9999 13 11.4477 13 11.9999C13 12.5522 12.5523 12.9999 12 12.9999C11.4477 12.9999 11 12.5522 11 11.9999Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default RadioIcon;
