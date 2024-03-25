import classnames from "classnames";

export const styles = {
  taskCard: classnames(
    "task",
    "bg-mainBackgroundColor",
    "p-2.5",
    "h-[100px]",
    "min-h-[100px]",
    "items-center",
    "text-left",
    "rounded-xl",
    "hover:ring-2",
    "hover:ring-inset",
    "hover:ring-rose-500",
    "cursor-grab",
    "relative"
  ),
  taskContent: classnames(
    "my-auto",
    "h-[90%]",
    "w-full",
    "overflow-y-auto",
    "overflow-x-hidden",
    "whitespace-pre-wrap"
  ),
  btnDelete: classnames(
    "stroke-white",
    "absolute",
    "right-4",
    "top-1/2",
    "-translate-y-1/2",
    "bg-columnBackgroundColor",
    "p-2",
    "rounded",
    "opacity-60",
    "hover:opacity-100"
  ),
  isDragging: {
    underlay: classnames(
      "opacity-30",
      "bg-mainBackgroundColor",
      "p-2.5",
      "h-[100px]",
      "min-h-[100px]",
      "items-center",
      "text-left",
      "rounded-xl",
      "border-2",
      "border-rose-500",
      "cursor-grab",
      "relative"
    ),
  },
  isEditing: {
    taskCard: classnames(
      "bg-mainBackgroundColor",
      "p-2.5",
      "h-[100px]",
      "min-h-[100px]",
      "items-center",
      "text-left",
      "rounded-xl",
      "hover:ring-2",
      "hover:ring-inset",
      "hover:ring-rose-500",
      "cursor-grab",
      "relative"
    ),
    textarea: classnames(
      "h-[90%]",
      "w-full",
      "resize-none",
      "border-none",
      "rounded",
      "bg-transparent",
      "text-white",
      "focus:outline-none"
    ),
  },
};
