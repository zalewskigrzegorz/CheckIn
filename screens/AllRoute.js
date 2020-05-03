import { Appbar } from "react-native-paper";
import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export default function AllRoute() {
  return (
    <Appbar.Header style={styles.appBar}>
      <Appbar.Content title="All available Checkpoints" subtitle="Subtitle" />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: Colors.AllScreen.primaryColor,
  },
});
