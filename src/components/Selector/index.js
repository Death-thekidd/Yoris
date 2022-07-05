import React, { useCallback, useState } from "react";

import SelectDropdown from "react-native-select-dropdown";
import { Constants } from "../../../constants/db.mock";
import { FontAwesome } from "../Icons";

/**
 * Selector
 * @props Data Array
 * @props defaultButtonText
 * @props buttonTextStyle
 * @props setSelectedItem
 */
export default function Selector({
  data,
  defaultButtonText,
  buttonStyle,
  buttonTextStyle,
  setSelectedItem,
  dropdownIconPosition = "left",
  dropDownIconColor,
  dropDownIconSize = 20,
  defaultValue,
}) {
  const onSelect = useCallback(
    (item, i) => setSelectedItem(item),
    [setSelectedItem]
  );
  return (
    <SelectDropdown
      data={data}
      onSelect={onSelect}
      defaultButtonText={defaultButtonText}
      buttonStyle={{
        borderRadius: 6,
        backgroundColor: Constants.theme.primary,
        ...buttonStyle,
      }}
      buttonTextStyle={{
        fontSize: 13,
        fontWeight: "500",
        ...buttonTextStyle,
      }}
      defaultValue={defaultValue}
      renderDropdownIcon={() => (
        <FontAwesome
          name={"caret-down"}
          size={dropDownIconSize}
          color={dropDownIconColor}
        />
      )}
      dropdownStyle={{
        backgroundColor: Constants.theme.primary,
      }}
      dropdownIconPosition={dropdownIconPosition}
    />
  );
}
