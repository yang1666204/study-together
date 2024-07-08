import { Task as TTask } from "../api/task/Task";

export const TASK_TITLE_FIELD = "id";

export const TaskTitle = (record: TTask): string => {
  return record.id?.toString() || String(record.id);
};
