import { TaskWhereInput } from "./TaskWhereInput";

export type TaskListRelationFilter = {
  every?: TaskWhereInput;
  some?: TaskWhereInput;
  none?: TaskWhereInput;
};
