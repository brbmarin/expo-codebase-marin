import React, { FC, useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";

import { Text } from "~components/text";
import { PenSvg } from "~assets/icons/pen";

import { withColor } from "./communStyles/withColor";
import { colors, ColorsKey } from "./theme";
import { Dimensions } from "react-native";

interface TextAreaPropsBase {
  value: string;
  maxHeight?: number;
  label?: string;
  placeholder?: string;
  placeholderColor?: string;
  maxLength?: number;
  bg?: ColorsKey;
}

type TextAreaPropsDisabled = TextAreaPropsBase & {
  isDisabled: true;
  onPress?: () => void;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
};

type TextAreaPropsEnabled = TextAreaPropsBase & {
  isDisabled?: false;
  onPress?: () => void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

type TextAreaProps = TextAreaPropsDisabled | TextAreaPropsEnabled;

const TextArea: FC<TextAreaProps> = ({
  label,
  maxLength,
  placeholder,
  placeholderColor,
  bg,
  value,
  isDisabled,
  onPress,
  setValue,
  maxHeight
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const dynamicStyles = getDynamicStyles(isFocused, bg, label);

  const characterRemaining = (maxLength || 0) - value.length;
  const onChangeText = (text: string) => {
    if (setValue) {
      setValue(text);
    }
  };

  const onTextAreaPress = () => {
    setIsFocused(true);
    if (onPress) {
      onPress();
    }
  };

  return (
    <View>
      <TextInput
        editable={isDisabled}
        multiline
        maxLength={maxLength || 9999}
        onChangeText={(text) => onChangeText(text)}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor || "#fff"}
        value={value}
        style={[dynamicStyles.textArea, { maxHeight: maxHeight }]}
        onFocus={onTextAreaPress}
        onBlur={() => setIsFocused(false)}
      />
      {label && (
        <View style={dynamicStyles.labelContainer}>
          <Text
            color="gray.400"
            numberOfLines={1}
            fontFamily="Poppins-Medium"
            fontSize={12}
            style={{ width: Dimensions.get("window").width - 100 }}
          >
            {label}
          </Text>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <PenSvg />
          </View>
        </View>
      )}
      {maxLength && (
        <Text color="gray.500" textAlign="right" mt={8}>
          {characterRemaining} caractères restant
        </Text>
      )}
    </View>
  );
};

const getDynamicStyles = (isFocused: boolean, bg?: string, label?: string) =>
  StyleSheet.create({
    container: {
      position: "relative",
    },
    textArea: {
      textAlignVertical: "top",
      backgroundColor: bg,
      borderColor: isFocused ? colors.primary : colors["gray.700"],
      borderWidth: 1.8,
      borderRadius: 12,
      fontSize: 16,
      minHeight: 188,
      paddingTop: label ? 48 : 26,
      paddingBottom: 10,
      paddingHorizontal: 22,
      color: colors.white,
    },
    labelContainer: {
      flexDirection: "row",
      borderTopWidth: 1.8,
      borderTopColor: isFocused ? colors.primary : colors["gray.700"],
      justifyContent: "space-between",
      position: "absolute",
      paddingTop: 26,
      backgroundColor: bg,
      marginHorizontal: 22
    },
  });

const TextAreaWithColor = withColor(TextArea);

export { TextAreaWithColor as TextArea };
