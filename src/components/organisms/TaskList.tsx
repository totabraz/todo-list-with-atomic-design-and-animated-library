import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import TaskCard, { CheckCardContentProps } from "../molecules/TaskCard";

type TaskListProps = {
  data: Array<CheckCardContentProps>;
  toggleTaskStatus: (i?: number, isDone?: boolean) => void;
};

export default function TaskList({ data, toggleTaskStatus }: TaskListProps) {
  const [isScrollEnabled, setScrollEnable] = useState(true);

  const helperToggleStatus = (taskId?: number, isDone?: boolean) => {
    if (isDone === undefined) toggleTaskStatus(taskId);
    else toggleTaskStatus(taskId, isDone);
  };

  const handleScrollStatus = () => {
    setScrollEnable((isEnable) => !isEnable);
  };

  return (
    <View>
      <FlatList
        data={data}
        scrollEventThrottle={1}
        scrollEnabled={isScrollEnabled}
        renderItem={({ item }) => {
          const { title, isDone, taskId } = item;
          return (
            <TaskCard
              title={title}
              isDone={isDone}
              taskId={taskId}
              handleScrollStatus={() => handleScrollStatus()}
              toggleTaskStatus={() => helperToggleStatus(taskId)}
              onSwipeLeft={() => helperToggleStatus(taskId, false)}
              onSwipeRight={() => helperToggleStatus(taskId, true)}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
