import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

export const Height = () => {

  const [size, setSize] = useState(180)
  const [isPickerActive, setIsPickerActive] = useState(false);
  const sizeOptions = []

  for (let i = 110; i <= 220; i++) {
    sizeOptions.push({ label: `${i} cm`, value: i.toString() })
  }

  const pickerSelectStyles =  StyleSheet.create({
    inputIOS: {
      width: "100%",
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 2,
      borderColor: isPickerActive ? "#885CC0" : "#2E2E2E",
      borderRadius: 10,
      color: "white",
      backgroundColor: "#1F1F1F",
    }
  });

  return (
    <RNPickerSelect 
      placeholder={{}}
      onValueChange={value => setSize(value)}
      items={sizeOptions}
      value={size}
      darkTheme={true}
      doneText=""
      InputAccessoryView={null}
      style={pickerSelectStyles}
    />
  )
}

