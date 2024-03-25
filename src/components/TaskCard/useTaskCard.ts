import React, { useState } from "react";
import TaskCardModule from "./module.ts";
import utilities from "../../utilities.ts";

/**
 * useTaskCard.ts
 * Hook for the TaskCard component
 */
export default function useTaskCard() {
  const { taskCardData } = TaskCardModule;
  const dndStyle = utilities.dnd.fn.style;

  // Detect when the mouse is over a task
  const [mouseIsOver, setMouseIsOver] = useState(false);

  // Detect whether the task is in edit mode
  const [editMode, setEditMode] = useState(false);

  /**
   * toggleEditMode()
   * Toggle the edit mode of the task, currently editing...
   */
  const toggleEditMode = () => {
    setEditMode((prevState) => !prevState);
    setMouseIsOver(false);
  };

  /**
   * handleKeyDown()
   * @param e
   * Handle key down event for the task card
   */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.shiftKey) toggleEditMode();
  };

  return {
    dndStyle,
    editMode,
    handleKeyDown,
    mouseIsOver,
    setEditMode,
    setMouseIsOver,
    taskCardData,
    toggleEditMode,
  };
}
