import React, { FC, useState } from "react";
import { StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Layout } from "~components/layout";
import { NavigatorParamList } from "~navigators/app-navigator";



type InformationScreenProps = NativeStackScreenProps<
  NavigatorParamList,
  "information"
>;

export const InfromationScreen: FC<InformationScreenProps> = ({ navigation }) => {

  return (
    <Layout statusStyle="light">
      
    </Layout>
  );
};

const styles = StyleSheet.create({
  
});
