import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const SettlementsIcon: IconComponent = ({ size, color }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M22.7627 7.87852L14.9662 17.5762C14.8689 17.694 14.7455 17.7924 14.6038 17.8653C14.462 17.9382 14.3051 17.9841 14.1427 18H14.0329C13.7402 17.9996 13.4583 17.9012 13.2422 17.724L9.66245 14.7674L7.60901 17.3495C7.51696 17.4728 7.39509 17.5758 7.25249 17.6509C7.10989 17.726 6.95023 17.7712 6.78544 17.7832H6.67563C6.38532 17.7873 6.105 17.6881 5.89598 17.5072L1.39379 13.8016C1.27627 13.7134 1.1806 13.6041 1.11293 13.4808C1.04527 13.3575 1.00711 13.2228 1.0009 13.0854C0.994696 12.948 1.02058 12.811 1.0769 12.6832C1.13322 12.5553 1.21872 12.4394 1.32791 12.343C1.42616 12.2375 1.54791 12.1517 1.68534 12.0909C1.82278 12.0302 1.97284 11.996 2.1259 11.9904C2.27896 11.9848 2.43163 12.0081 2.57409 12.0586C2.71655 12.1091 2.84565 12.1859 2.95309 12.2839L6.51092 15.1912L13.5168 6.44949C13.6 6.33429 13.7091 6.23596 13.8371 6.1608C13.9651 6.08564 14.1092 6.03532 14.2601 6.01305C14.411 5.99078 14.5655 5.99706 14.7136 6.03149C14.8616 6.06591 15.0001 6.12772 15.12 6.21296C15.25 6.28756 15.361 6.38593 15.4459 6.50164C15.5307 6.61735 15.5874 6.74781 15.6122 6.8845C15.6371 7.0212 15.6296 7.16107 15.5902 7.29498C15.5508 7.4289 15.4804 7.55385 15.3835 7.6617L10.9911 13.0723L13.8242 15.4179L20.896 6.6663C20.98 6.55186 21.0898 6.45441 21.2182 6.3802C21.3467 6.30599 21.4909 6.25664 21.6418 6.23531C21.7927 6.21397 21.9469 6.22113 22.0945 6.25631C22.2421 6.29149 22.38 6.35393 22.4992 6.43963C22.6275 6.5143 22.7371 6.61222 22.8208 6.7271C22.9046 6.84199 22.9606 6.97131 22.9855 7.10677C23.0103 7.24224 23.0033 7.38086 22.9649 7.51376C22.9266 7.64666 22.8577 7.7709 22.7627 7.87852Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default SettlementsIcon;
