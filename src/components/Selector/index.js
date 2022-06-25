import React, { useCallback, useState } from "react";

import SelectDropdown from "react-native-select-dropdown";
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
        backgroundColor: "#C3AD60",
        ...buttonStyle,
      }}
      buttonTextStyle={{
        fontSize: 13,
        fontWeight: "500",
        ...buttonTextStyle,
      }}
      renderDropdownIcon={() => (
        <FontAwesome
          name={"caret-down"}
          size={dropDownIconSize}
          color={dropDownIconColor}
        />
      )}
      dropdownIconPosition={dropdownIconPosition}
    />
  );
}
