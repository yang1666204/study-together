import { Module } from "@nestjs/common";
import { ProjectModuleBase } from "./base/project.module.base";
import { ProjectService } from "./project.service";
import { ProjectController } from "./project.controller";
import { ProjectResolver } from "./project.resolver";

@Module({
  imports: [ProjectModuleBase],
  controllers: [ProjectController],
  providers: [ProjectService, ProjectResolver],
  exports: [ProjectService],
})
export class ProjectModule {}
