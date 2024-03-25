import {CSS} from "@dnd-kit/utilities";
import {DndTransform} from "./types.ts";

export default {
  dnd: {
    fn: {
      style: (
        transition: string | undefined,
        transform: DndTransform | null
      ) => ({
        transition,
        transform: CSS.Transform.toString(transform),
      }),
    },
  },
};
