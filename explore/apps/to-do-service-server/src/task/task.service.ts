import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TaskServiceBase } from "./base/task.service.base";

@Injectable()
export class TaskService extends TaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
