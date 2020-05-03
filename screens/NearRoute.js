import { Appbar } from "react-native-paper";
import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export default function NearRoute() {
  return (
    <Appbar.Header style={styles.appBar}>
      <Appbar.Content title="Near Checkpoints" subtitle="Subtitle" />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: Colors.NearScreen.primaryColor,
  },
});
