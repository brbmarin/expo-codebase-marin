import React, { FC, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Layout } from "~components/layout";
import { NavigatorParamList } from "~navigators/app-navigator";
import { Height } from "~components/Height";
import { Birth } from "~components/Birth";



type InformationScreenProps = NativeStackScreenProps<
  NavigatorParamList,
  "information"
>;

export const InfromationScreen: FC<InformationScreenProps> = ({ navigation }) => {

  return (
    <Layout statusStyle="light">
      <View>
        <Text style={styles.title}>Informations</Text>
        <Text style={styles.txtBirth}>Place of birth</Text>
        <Birth />
        <Text style={styles.txtHeight}>Height</Text>
        <Height />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 30,
    fontFamily: "Popins-SemidBold",
    fontWeight: "bold",
    paddingBottom: 20,
  },
  txtBirth: {
    color: "white",
    fontSize: 13,
    paddingBottom: 6,
  },
  txtHeight: {
    color: "white",
    fontSize: 13,
    paddingTop: 15,
    paddingBottom: 6,
  }
});
