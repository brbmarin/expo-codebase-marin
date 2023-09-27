import React, { FC, useState } from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";

import { withColor } from "./communStyles/withColor";
import { colors, ColorsKey } from "./theme";

// TODO: [GENERAL] Remove all types "false" or "true" and add default data
// TODO: Change the logic of input Props Disabled & Enabled

interface InputPropsBase extends TextInputProps {
  value: string;
  bg?: ColorsKey;
  onPressIn?: () => void;
}

type InputDisabled = InputPropsBase & {
  isDisabled: true;
  setValue?: (value: string) => void;
};

type InputEnabled = InputPropsBase & {
  isDisabled?: false;
  setValue: (value: string) => void;
};

type InputProps = InputDisabled | InputEnabled;

const Input: FC<InputProps> = (props) => {
  const { bg, value, setValue } = props;

  const [isFocused, setIsFocused] = useState(false);

  const dynamicStyles = getDynamicStyles({
    bg,
    isFocused, 
    isDisabled: !props.isDisabled, 
  });

  return (
    <TextInput
      {...props}
      editable={!props.isDisabled}
      maxLength={props.maxLength || 99}
      onChangeText={setValue}
      onFocus={(e) => {
        !props.isDisabled && setIsFocused(true);
        if (props?.onFocus)
          props?.onFocus(e);
      }}
      onBlur={() => setIsFocused(false)}
      value={value}
      style={[dynamicStyles.input, props.style]}
      onPressIn={props.onPressIn}
    />
  );
};

const getDynamicStyles = (props: {
  isFocused: boolean,
  isDisabled: boolean,
  bg?: ColorsKey,
}) =>
  StyleSheet.create({
    input: {
      fontSize: 18,
      textAlignVertical: "center",
      backgroundColor: props.bg,
      borderColor: props.isFocused ? colors.primary : colors["gray.700"],
      borderWidth: 1.8,
      borderRadius: 12,
      minHeight: 60,
      paddingTop: 16,
      paddingBottom: 16,
      paddingHorizontal: 22,
      color: props.isDisabled ? colors["gray.400"] : colors.white,
      fontFamily: "Poppins-Regular",
    },
  });

const InputWithColor = withColor(Input);

export { InputWithColor as Input };
