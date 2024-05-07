import Checkbox from "expo-checkbox";
import { StyleSheet, View } from "react-native";
import { SPACES } from "../../constants/sizes";

export default function BehindTaskResult() {
  return (
    <View style={[styles.behind]}>
      <Checkbox value={true} />
      <Checkbox value={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  behind: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "transparent",
    zIndex: -1,
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.2,
    paddingHorizontal: SPACES.SM + 5,
    paddingVertical: SPACES.XS + 5,
  },
});
