import React, { FC } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Platform,
  Dimensions,
  StatusBar as StatusBarRN,
  RefreshControlProps,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { StatusBar, StatusBarStyle } from "expo-status-bar";

import { colors } from "~components/theme";
import { RefreshControl } from "react-native";

interface LayoutProps {
  statusStyle: StatusBarStyle;
  children: React.ReactNode;
  scrollView?: boolean;
  noPadding?: boolean;
  withoutSafeArea?: boolean;
  bounces?: boolean;
  scrollViewOptions?: {
    refreshControlerProps?: RefreshControlProps;
    withTopSafeArea?: boolean;
  };
}

export const Layout: FC<LayoutProps> = ({
  statusStyle,
  withoutSafeArea,
  noPadding,
  scrollView,
  scrollViewOptions,
  bounces,
  children,
}) => {
  const screenHeight = Dimensions.get("window").height;
  const { top } = useSafeAreaInsets();
  
  const statusBarHeight =
    Platform.OS === "android" ? StatusBarRN.currentHeight || 0 : 0;

  const height = screenHeight + statusBarHeight;

  const styles = getDynamicStyles(height);

  if (scrollView) {
    return (
      <>
        <View
          style={{
            backgroundColor: colors["gray.900"],
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
        {scrollViewOptions?.withTopSafeArea && (
          <View style={{ width: "100%", height: top }} />
        )}
        {withoutSafeArea ? (
          <ScrollView
            bounces={bounces}
            endFillColor={"#000000"}
            contentContainerStyle={[
              styles.scrollContainer,
              styles.scrollViewHeight,
            ]}
            showsVerticalScrollIndicator={false}
            refreshControl={
              scrollViewOptions?.refreshControlerProps ? (
                <RefreshControl {...scrollViewOptions.refreshControlerProps} />
              ) : undefined
            }
          >
            <StatusBar style={statusStyle} />
            {children}
          </ScrollView>
        ) : (
          <SafeAreaView style={styles.container}>
            <StatusBar style={statusStyle} />

            <ScrollView
              bounces={bounces}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollViewHeight}
              refreshControl={
                scrollViewOptions?.refreshControlerProps ? (
                  <RefreshControl
                    {...scrollViewOptions.refreshControlerProps}
                  />
                ) : undefined
              }
            >
              <View style={[!noPadding && styles.padding, styles.container]}>
                {children}
              </View>
            </ScrollView>
          </SafeAreaView>
        )}
      </>
    );
  }
  return (
    <>
      {withoutSafeArea ? (
        <View style={styles.container}>
          <StatusBar style={statusStyle} />
          {children}
        </View>
      ) : (
        <SafeAreaView style={[styles.container, !noPadding && styles.padding]}>
          <StatusBar style={statusStyle} />
          {children}
        </SafeAreaView>
      )}
    </>
  );
};

const getDynamicStyles = (height: number) =>
  StyleSheet.create({
    scrollViewHeight: {
      minHeight: height,
    },
    scrollContainer: {
      backgroundColor: colors["gray.900"],
    },
    container: {
      flex: 1,
      backgroundColor: colors["gray.900"],
    },
    padding: {
      paddingHorizontal: 16,
    },
  });
