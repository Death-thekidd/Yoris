import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";

export default function Input({ setValue, value, ...rest }) {
  return (
    <TextInput
      value={value}
      onChangeText={(text) => setValue(text)}
      {...rest}
    />
  );
}
