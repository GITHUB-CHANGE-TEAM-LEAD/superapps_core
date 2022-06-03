import React from "react";
import BaseControl, { ControlData, ControlProps } from "./BaseControl";
import ButtonTabComponent, {
  ButtonTabOption,
} from "components/ads/ButtonTabComponent";

class IconTabControl extends BaseControl<IconTabControlProps> {
  selectOption = (value: string, isUpdatedViaKeyboard = false) => {
    const { defaultValue, propertyValue } = this.props;
    if (propertyValue === value) {
      this.updateProperty(
        this.props.propertyName,
        defaultValue,
        isUpdatedViaKeyboard,
      );
    } else {
      this.updateProperty(this.props.propertyName, value, isUpdatedViaKeyboard);
    }
  };
  render() {
    const { options, propertyValue } = this.props;
    return (
      <ButtonTabComponent
        options={options}
        selectButton={this.selectOption}
        values={[propertyValue]}
      />
    );
  }

  static getControlType() {
    return "ICON_TABS";
  }

  static canDisplayValueInUI(config: ControlData, value: any): boolean {
    if (
      (config as IconTabControlProps)?.options
        ?.map((x: { value: string }) => x.value)
        .includes(value)
    )
      return true;
    return false;
  }
}

export interface IconTabControlProps extends ControlProps {
  options: ButtonTabOption[];
  defaultValue: string;
}

export default IconTabControl;
