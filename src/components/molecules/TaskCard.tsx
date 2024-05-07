import Checkbox from "expo-checkbox";
import { StyleSheet, View } from "react-native";
import { SPACES } from "../../constants/sizes";
import AnimationSwipe from "../atoms/AnimationSwipe";
import Text from "../atoms/Text";
import BehindTaskResult from "./BehindTaskResult";

export type CheckCardContentProps = {
  taskId?: number;
  title?: string;
  isDone?: boolean;
};

type CheckCardProps = CheckCardContentProps & {
  handleScrollStatus?: () => void;
  toggleTaskStatus: () => void;
  onSwipeRight?: () => void;
  onSwipeLeft?: () => void;
};

export default function TaskCard({
  title,
  isDone,
  taskId,
  toggleTaskStatus,
  handleScrollStatus,
  onSwipeRight,
  onSwipeLeft,
}: CheckCardProps) {
  return (
    <View style={styles.taskCardContainer}>
      <BehindTaskResult />
      <AnimationSwipe
        key={taskId}
        handleScrollStatus={handleScrollStatus}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      >
        <View style={styles.cardContainer}>
          <Checkbox value={isDone} onValueChange={toggleTaskStatus} />
          <Text
            text={title}
            style={[styles.title, isDone ? styles.isDone : {}]}
          />
          <Text text={`#${taskId}`} style={styles.position} />
        </View>
      </AnimationSwipe>
    </View>
  );
}

const styles = StyleSheet.create({
  checkbox: { color: "#d5d5d5" },
  isDone: {
    color: "#a3a3a3",
    textDecorationColor: "#000",
    textDecorationLine: "line-through",
  },
  title: {
    flex: 1,
    paddingHorizontal: SPACES.SM,
    paddingVertical: SPACES.XS,
    fontSize: 16,
    fontWeight: "bold",
  },
  position: { fontSize: 16, paddingHorizontal: 5, color: "#555555" },
  cardContainer: {
    paddingHorizontal: SPACES.SM,
    paddingVertical: SPACES.XS,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#d5d5d5",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    zIndex: 2,
    backgroundColor: "white",
  },
  taskCardContainer: {
    position: "relative",
    marginBottom: SPACES.XL,
  },
});
