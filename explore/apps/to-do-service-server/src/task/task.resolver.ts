import * as graphql from "@nestjs/graphql";
import { TaskResolverBase } from "./base/task.resolver.base";
import { Task } from "./base/Task";
import { TaskService } from "./task.service";

@graphql.Resolver(() => Task)
export class TaskResolver extends TaskResolverBase {
  constructor(protected readonly service: TaskService) {
    super(service);
  }
}
