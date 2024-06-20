import * as graphql from "@nestjs/graphql";
import { TagResolverBase } from "./base/tag.resolver.base";
import { Tag } from "./base/Tag";
import { TagService } from "./tag.service";

@graphql.Resolver(() => Tag)
export class TagResolver extends TagResolverBase {
  constructor(protected readonly service: TagService) {
    super(service);
  }
}
