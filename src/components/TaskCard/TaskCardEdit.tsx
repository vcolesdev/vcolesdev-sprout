import TaskCard from "./TaskCard.tsx";
import useTaskCard from "./useTaskCard.ts";
import { styles } from "./styles.ts";
import { useSortable } from "@dnd-kit/sortable";
import { TaskCardEditProps } from "../../types.ts";

const TaskCardEdit = ({ task, updateTask }: TaskCardEditProps) => {
  const { dndStyle, editMode, handleKeyDown, taskCardData, toggleEditMode } =
    useTaskCard();

  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable(taskCardData(task, editMode));

  return (
    <TaskCard.Container
      classes={styles.isEditing.taskCard}
      nodeRef={setNodeRef}
      style={dndStyle(transition, transform)}
      attributes={attributes}
      listeners={listeners}
    >
      <textarea
        className={styles.isEditing.textarea}
        value={task.content}
        autoFocus
        placeholder="Task content here"
        onBlur={() => toggleEditMode()}
        onChange={(e) => updateTask(task.id, e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      ></textarea>
    </TaskCard.Container>
  );
};

export default TaskCardEdit;
