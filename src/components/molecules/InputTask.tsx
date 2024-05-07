import React from "react";
import { StyleSheet, TextInputProps, View } from "react-native";
import { SPACES } from "../../constants/sizes";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

type InputTaskProps = TextInputProps & {
  btnText?: string;
  addTask: (t?: string) => void;
};

export default function InputTask({
  btnText = "Add",
  placeholder = "New Task",
  addTask,
  ...props
}: InputTaskProps) {
  return (
    <View style={styles.container}>
      <Input {...props} placeholder={placeholder} style={styles.input} />
      <Button
        disabled={!props?.value}
        title={btnText ? btnText : ""}
        onPress={() => addTask(props?.value)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderColor: "#aaa",
    marginBottom: SPACES.MD,
    flexDirection: "row",
    paddingHorizontal: SPACES.SM,
  },
  input: {
    flex: 1,
  },
});
