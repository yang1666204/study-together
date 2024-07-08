import { Tag as TTag } from "../api/tag/Tag";

export const TAG_TITLE_FIELD = "id";

export const TagTitle = (record: TTag): string => {
  return record.id?.toString() || String(record.id);
};
