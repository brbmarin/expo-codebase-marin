import React, { FC } from "react";
import { Switch as SwitchRN } from "react-native";

import { colors } from "./theme";

interface SwitchProps {
  isEnabled: boolean;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Switch: FC<SwitchProps> = ({ isEnabled, onChange }) => {
  return (
    <SwitchRN
      trackColor={{ false: colors["accent.100"], true: colors.primary }}
      thumbColor={colors.white}
      ios_backgroundColor={colors["gray.100"]}
      onValueChange={onChange}
      value={isEnabled}
    />
  );
};
