import { useRef } from "react";
import { useState } from "react";
import { TextInput } from "react-native";
import { Constants } from "../../../constants/db.mock";

export default ({ value }) => {
  const input = useRef();
  return (
    <TextInput
      style={{
        backgroundColor: "#4E4E4E",
        borderWidth: 1,
        borderColor: Constants.theme.gray,
        width: 48,
        height: 48,
        borderRadius: 50,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
        color: Constants.theme.light,
      }}
      maxLength={1}
      textContentType={"oneTimeCode"}
      keyboardType={"number-pad"}
      value={value}
    />
  );
};
