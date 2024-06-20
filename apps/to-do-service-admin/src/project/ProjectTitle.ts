import { Project as TProject } from "../api/project/Project";

export const PROJECT_TITLE_FIELD = "id";

export const ProjectTitle = (record: TProject): string => {
  return record.id?.toString() || String(record.id);
};
