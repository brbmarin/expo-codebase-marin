import React, { FC } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import { Text } from "./text";
//import { Checkbox } from "./checkbox";
import { withColor } from "./communStyles/withColor";
import { withSpacing } from "./communStyles/withSpacing";
import { colors, ColorsKey } from "./theme";

interface InputProps {
  label: string;
  isChecked: boolean;
  noBorder?: boolean;
  option?: React.ReactNode;
  bg?: ColorsKey;
  onChange: () => void;
}

const InputRadio: FC<InputProps> = ({
  label,
  bg,
  isChecked,
  noBorder,
  option,
  onChange,
}) => {
  const dynamicStyles = getDynamicStyles(isChecked, noBorder, bg);

  return (
    <TouchableWithoutFeedback onPress={onChange}>
      <View style={dynamicStyles.container}>
        <View style={{ flex: 1 }}>
          <Text
            color={isChecked ? "white" : "gray.500"}
            fontSize={18}
            fontFamily={isChecked ? "Poppins-Medium" : "Poppins-Regular"}
          >
            {label}
          </Text>
          {option}
        </View>
        {/* <Checkbox isChecked={isChecked} /> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

const getDynamicStyles = (
  isChecked: boolean,
  noBorder?: boolean,
  bg?: ColorsKey
) => {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 8,
      textAlignVertical: "top",
      backgroundColor: bg,
      borderColor: isChecked ? colors.primary : colors["gray.700"],
      borderWidth: noBorder ? 0 : 1.8,
      borderRadius: 12,
      minHeight: 60,
      paddingTop: 16,
      paddingBottom: 16,
      paddingHorizontal: 22,
    },
  });
};

const InputRadioCompose = withSpacing(withColor(InputRadio));

export { InputRadioCompose as InputRadio };
