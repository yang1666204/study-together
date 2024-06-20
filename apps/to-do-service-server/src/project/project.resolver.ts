import * as graphql from "@nestjs/graphql";
import { ProjectResolverBase } from "./base/project.resolver.base";
import { Project } from "./base/Project";
import { ProjectService } from "./project.service";

@graphql.Resolver(() => Project)
export class ProjectResolver extends ProjectResolverBase {
  constructor(protected readonly service: ProjectService) {
    super(service);
  }
}
