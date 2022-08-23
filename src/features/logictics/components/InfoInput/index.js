import { countries } from "countries-list";
import { useEffect } from "react";
import { useState } from "react";
import { Dimensions, TextInput, View } from "react-native";
import Selector from "../../../../components/Selector";

export default ({
  setValues,
  namePlaceholder = "",
  phonePlaceholder = "",
  defaultNameVal,
  defaultPhoneVal,
  error,
  setError,
  selectedCountryCode,
  setSelectedCountryCode,
}) => {
  /*   const [selectedCountryCode, setSelectedCountryCode] = useState(
    `+${countries.NG.phone}`
  ); */
  const codes = [];
  useEffect(() => {
    for (let code in countries) {
      codes.push(`+${countries[code].phone}`);
    }
  }, []);

  return (
    <>
      <View
        style={{
          borderBottomColor: error.receiversName ? "red" : "#C4C4C4",
          borderWidth: 1,
          width: "100%",
        }}
      >
        <TextInput
          onChangeText={(text) => {
            setError({});

            setValues((states) => ({
              ...states,
              dropOff: { ...states?.dropOff, receiversName: text },
            }));
          }}
          defaultValue={defaultNameVal}
          placeholder={namePlaceholder}
          placeholderTextColor={"white"}
          style={{
            borderRadius: 5,
            marginVertical: 5,
            color: "#fff",
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Selector
          buttonStyle={{
            backgroundColor: "transparent",
            width: "25%",
          }}
          dropDownIconColor={"#C4C4C4"}
          data={codes}
          setSelectedItem={setSelectedCountryCode}
          buttonTextStyle={{
            color: "#C4C4C4",
          }}
          dropDownIconSize={15}
          defaultButtonText={`+${countries.NG.phone}`}
        />

        <View
          style={{
            borderBottomColor: error.receiversPhone ? "red" : "#C4C4C4",
            borderWidth: 1,
            width: 252,
          }}
        >
          <TextInput
            defaultValue={defaultPhoneVal}
            onChangeText={(text) => {
              setError({});
              setValues((states) => ({
                ...states,
                dropOff: {
                  ...states.dropOff,
                  receiversPhone: selectedCountryCode + text,
                },
              }));
            }}
            placeholder={phonePlaceholder}
            placeholderTextColor={"white"}
            style={{
              borderRadius: 5,
              marginVertical: 5,
              color: "#fff",
            }}
            keyboardType={"number-pad"}
          />
        </View>
      </View>
    </>
  );
};
