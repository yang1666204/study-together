import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TaskService } from "./task.service";
import { TaskControllerBase } from "./base/task.controller.base";

@swagger.ApiTags("tasks")
@common.Controller("tasks")
export class TaskController extends TaskControllerBase {
  constructor(protected readonly service: TaskService) {
    super(service);
  }
}
