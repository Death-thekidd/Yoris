import { memo } from "react";
import { TextInput } from "react-native";
import { useForm } from "react-hook-form";

export default () => {
  return {
    Input: memo(
      ({ name, required, phoneNumber, Controller, control, ...rest }) => (
        <Controller
          rules={{
            required,
            ...(phoneNumber && {
              pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
            }),
          }}
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput onChangeText={onChange} value={value} {...rest} />
          )}
        />
      )
    ),
  };
};
