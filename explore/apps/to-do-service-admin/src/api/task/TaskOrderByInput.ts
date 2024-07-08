import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
