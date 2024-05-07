import React, { useState } from "react";
import { CheckCardContentProps } from "../components/molecules/TaskCard";
import TAddTask from "../components/templates/TAddTask";

export default function AddTaskPage() {
  const [tasks, setTasks] = useState<Array<CheckCardContentProps>>([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = (newTask?: string) => {
    const taskId = tasks.length + 1;
    if (newTask) {
      setTasks((prev) => [...prev, { title: newTask, isDone: false, taskId }]);
      setInputValue("");
    }
  };

  const toggleTaskStatus = (taskIdPosition?: number, isDone?: boolean) => {
    if (taskIdPosition) {
      const index = Number(taskIdPosition) - 1;
      setTasks((prev) => {
        const updState = [...prev];
        const checkIsDone =
          isDone === undefined ? !updState[index].isDone : isDone;
        updState[index] = { ...updState[index], isDone: checkIsDone };
        return updState;
      });
    }
  };

  return (
    <TAddTask
      inputValue={inputValue}
      data={tasks}
      setInputValue={setInputValue}
      addTask={addTask}
      toggleTaskStatus={toggleTaskStatus}
    />
  );
}
