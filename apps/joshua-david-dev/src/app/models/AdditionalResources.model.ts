export interface AdditionalResources {
  resource: Resource[];
}

export interface Resource {
  title: string;
  externalURL: string;
  partner?: boolean
}
