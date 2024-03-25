import TaskCardEdit from "./TaskCardEdit.tsx";
import DeleteIcon from "../../icons/DeleteIcon.tsx";
import useTaskCard from "./useTaskCard.ts";
import { useSortable } from "@dnd-kit/sortable";
import { TaskCardProps } from "../../types.ts";
import { styles } from "./styles.ts";
import {
  TaskCardContainer,
  TaskCardContent,
  TaskCardDeleteBtn,
  TaskCardUnderlay,
} from "./components.tsx";

/**
 * TaskCard()
 * @param props
 * TaskCard component
 */
function TaskCard(props: TaskCardProps) {
  let taskCard;
  const { task, deleteTask, updateTask } = props;

  // useTaskCard()
  // Functions and utilities for the component
  const {
    dndStyle,
    editMode,
    mouseIsOver,
    setMouseIsOver,
    taskCardData,
    toggleEditMode,
  } = useTaskCard();

  // useSortable()
  // This hook is used to make the task card draggable
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable(taskCardData(task, editMode));

  // Default card component
  const defaultCard = (
    <TaskCard.Container
      attributes={attributes}
      listeners={listeners}
      classes={styles.taskCard}
      nodeRef={setNodeRef}
      style={dndStyle(transition, transform)}
      onClick={() => toggleEditMode()}
      onMouseEnter={() => setMouseIsOver(true)}
      onMouseLeave={() => setMouseIsOver(false)}
    >
      <TaskCard.Content classes={styles.taskContent}>
        {task.content}
      </TaskCard.Content>
      {/** Show delete button when mouseover **/}
      {mouseIsOver && (
        <TaskCard.BtnDelete
          classes={styles.btnDelete}
          onClick={() => deleteTask(task.id)}
        >
          <TaskCard.IconDelete />
        </TaskCard.BtnDelete>
      )}
    </TaskCard.Container>
  );

  // The card to show when being edited
  const editingCard = <TaskCardEdit task={task} updateTask={updateTask} />;

  // The card to show underneath the active draggable card
  const draggingCard = (
    <TaskCardUnderlay
      classes={styles.isDragging.underlay}
      nodeRef={setNodeRef}
      style={dndStyle(transition, transform)}
    />
  );

  if (isDragging) {
    taskCard = draggingCard;
  } else if (editMode) {
    taskCard = editingCard;
  } else {
    taskCard = defaultCard;
  }

  return taskCard;
}

TaskCard.Container = TaskCardContainer;
TaskCard.IconDelete = DeleteIcon;
TaskCard.BtnDelete = TaskCardDeleteBtn;
TaskCard.Content = TaskCardContent;

export default TaskCard;
