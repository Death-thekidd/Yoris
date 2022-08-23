import React, { useCallback, useState } from 'react';

import SelectDropdown from "react-native-select-dropdown";
import { FontAwesome } from './icons';

export default function Selector({
    data,
    defaultButtonText,
    buttonStyle,
    buttonTextStyle,
    setSelectedItem,
    dropdownIconPosition = "right",
    dropDownIconColor = "#fff",
    dropDownIconSize = 25,
}) {
  const onSelect = useCallback(
    (item, i) => setSelectedItem(item),
    [setSelectedItem]
  );
  return (
    <SelectDropdown 
      data={data}
      defaultButtonText={defaultButtonText}
      buttonStyle={{
        backgroundColor: "#C3AD60",
        ...buttonStyle
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