import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProjectServiceBase } from "./base/project.service.base";

@Injectable()
export class ProjectService extends ProjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
