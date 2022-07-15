import { countries } from "countries-list";
import { isObject } from "lodash";
import { useEffect, useState } from "react";
import { Dimensions, TextInput, View } from "react-native";
import Selector from "../../../../components/Selector";

export default ({
  setError,
  setValue,
  Input,
  Controller,
  control,
  namePlaceholder = "",
  phonePlaceholder = "",
  defaultNameVal,
  defaultPhoneVal,
  errors,
}) => {
    const [selectedCountryCode, setSelectedCountryCode] = useState(
    `+${countries.NG.phone}`
  );
  const [codes, setCodes] = useState("");

  useEffect(() => {
    for (let code in countries) {
      setCodes([`+${countries[code].phone}`]);
    }
  }, []);

  return (
    <>
      <View
        style={{
          borderBottomColor: errors?.receiversName ? "red" : "#C4C4C4",
          borderWidth: 1,
          width: "100%",
        }}
      >
        <Input
          name={"receiversName"}
          required
          Controller={Controller}
          control={control}
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
            borderBottomColor: errors?.receiversPhone ? "red" : "#C4C4C4",
            borderWidth: 1,
            width: 252,
          }}
        >
          <Input
            name="receiversPhone"
            defaultValue={defaultPhoneVal}
            Controller={Controller}
            control={control}
            phoneNumber
            keyboaredType={"phone-pad"}
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
