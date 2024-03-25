import { useSortable } from "@dnd-kit/sortable";
import React, { ReactNode } from "react";
import utilities from "./utilities.ts";

const dndStyle = utilities.dnd.fn.style;

export type ReactChildren = React.ReactNode | ReactNode[];

export type DndTransform = {
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
};

export type Id = string | number;

export type Column = {
  id: Id;
  title: string;
};

export type Task = {
  id: Id;
  columnId: Id;
  content: string;
};

export type DndStyle = {
  transition: string | undefined;
  transform: DndTransform | null;
};

export interface TaskCardContainerProps {
  children: React.ReactNode | ReactNode[];
  nodeRef: ReturnType<typeof useSortable>["setNodeRef"];
  style: ReturnType<typeof dndStyle>;
  attributes: ReturnType<typeof useSortable>["attributes"];
  listeners: ReturnType<typeof useSortable>["listeners"];
  classes: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export interface TaskCardProps {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}

export interface TaskCardUnderlayProps {
  classes: string;
  nodeRef: ReturnType<typeof useSortable>["setNodeRef"];
  style: ReturnType<typeof dndStyle>;
}

export interface TaskCardContentProps {
  children: ReactChildren;
  classes: string;
}

export interface TaskCardDeleteBtnProps {
  children: ReactChildren;
  classes: string;
  onClick?: () => void;
}

export interface TaskCardEditProps {
  task: Task;
  updateTask: (id: string | number, content: string) => void;
}
