import { useRef } from "react";
import { useState } from "react";
import { TextInput } from "react-native";

export default ({ value }) => {
  const input = useRef();
  return (
    <TextInput
      style={{
        backgroundColor: "#4E4E4E",
        borderWidth: 1,
        borderColor: "#fff",
        width: 48,
        height: 48,
        borderRadius: 50,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
        color: "#FFFFFF",
      }}
      maxLength={1}
      textContentType={"oneTimeCode"}
      keyboardType={"number-pad"}
      value={value}
    />
  );
};