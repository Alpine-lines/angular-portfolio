export interface Sources {
  sources: Source[];
}

export interface Source {
  type: SourceTypes.Documentation | SourceTypes.ApiReference | SourceTypes.FossProjectBoilerplate | SourceTypes.PluralsightCourse;
  title: string;
  authorId: string;
  authorName: string;
  externalUrl: string;
  displayLocal?: boolean;
}

export enum SourceTypes {
  Documentation,
  ApiReference,
  ProfessionalPublication,
  PeerReviewedPublication,
  YoutubeVideo,
  PluralsightCourse,
  EdxMooc,
  CourseraMooc,
  FossProjectBoilerplate,
  SaaSProviderBoilerplate,
  CloudProviderBoilerplate
}
