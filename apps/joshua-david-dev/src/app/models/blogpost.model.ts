import { AdditionalResources } from "./AdditionalResources.model";
import { Sources } from "./Sources.model";

export default interface BlogPost {
  postId?: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  authorName: string;
  authorId?: string;
  AdditionalResources?: AdditionalResources;
  sources: Sources;
};
