import {Task} from "../../types.ts";

export default {
  // Task card data object
  taskCardData: (task: Task, disabled: boolean) => ({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: disabled, // Disable dragging when editing the column title
  }),
} as const;
