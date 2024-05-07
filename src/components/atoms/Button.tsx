import React from "react";
import { ButtonProps, Button as RNButton, StyleSheet } from "react-native";
import { SPACES } from "../../constants/sizes";

export default function Button(props: ButtonProps) {
  return <RNButton {...props} />;
}

const styles = StyleSheet.create({
  textButton: {
    paddingHorizontal: SPACES.XS,
  },
});
