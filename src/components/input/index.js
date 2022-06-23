import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";

export default function Input({
  placeholder,
  style,
  setValue,
  value,
  ...rest
}) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={(text) => setValue(text)}
      style={[style, {}]}
      {...rest}
    />
  );
}
