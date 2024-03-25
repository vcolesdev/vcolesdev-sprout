import {
  TaskCardContainerProps,
  TaskCardDeleteBtnProps,
  TaskCardUnderlayProps,
  TaskCardContentProps,
} from "../../types.ts";

/**
 * TaskCardContainer component
 * @param props
 */
const TaskCardContainer = (props: TaskCardContainerProps) => {
  const {
    children,
    nodeRef,
    style,
    attributes,
    listeners,
    classes,
    onClick,
    onMouseEnter,
    onMouseLeave,
  } = props;
  return (
    <div
      className={classes}
      ref={nodeRef}
      style={style}
      onClick={onClick && onClick}
      onMouseEnter={onMouseEnter && onMouseEnter}
      onMouseLeave={onMouseLeave && onMouseLeave}
      {...attributes}
      {...listeners}
    >
      {children}
    </div>
  );
};

/**
 * TaskCardUnderlay component
 * @param props
 */
const TaskCardUnderlay = (props: TaskCardUnderlayProps) => {
  const { classes, nodeRef, style } = props;
  return <div className={classes} ref={nodeRef} style={style} />;
};

/**
 * TaskCardContent component
 * @param children
 * @param classes
 */
const TaskCardContent = ({ children, classes }: TaskCardContentProps) => {
  return <div className={classes}>{children}</div>;
};

/**
 * TaskCardDeleteBtn component
 * @param props
 */
const TaskCardDeleteBtn = (props: TaskCardDeleteBtnProps) => {
  const { children, classes, onClick } = props;
  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export {
  TaskCardContainer,
  TaskCardContent,
  TaskCardUnderlay,
  TaskCardDeleteBtn,
};
