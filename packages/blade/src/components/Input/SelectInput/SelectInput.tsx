import { BaseInput } from '../BaseInput';
import type { BaseInputProps } from '../BaseInput';
import type { IconComponent } from '~components/Icons';
import { ChevronDownIcon, ChevronUpIcon } from '~components/Icons';
type SelectInputProps = Pick<
  BaseInputProps,
  | 'label'
  | 'labelPosition'
  | 'necessityIndicator'
  | 'validationState'
  | 'helpText'
  | 'errorText'
  | 'successText'
  | 'placeholder'
  | 'name'
  | 'isDisabled'
  | 'isRequired'
  | 'prefix'
  | 'suffix'
  | 'autoFocus'
> & {
  icon?: IconComponent;
};

const SelectInput = (props: SelectInputProps): JSX.Element => {
  /**
   * @TODO handle expanded state with Dropdown
   */
  const isPopupExpanded = false;

  const { icon, ...baseInputProps } = props;

  return (
    <BaseInput
      {...baseInputProps}
      id="ip"
      leadingIcon={icon}
      hasPopup
      isPopupExpanded={isPopupExpanded}
      /**
       * @TODO Pass the popup id by taking it from Dropdown
       */
      popupId="123"
      isReadOnly
      trailingIcon={isPopupExpanded ? ChevronUpIcon : ChevronDownIcon}
    />
  );
};

export default SelectInput;
