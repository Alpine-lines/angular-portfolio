import Address from './address.model';
import Project from "./project.model";

export default interface Client {
  clientId?: string;
  business: string;
  primaryContactname: string
  emailContacts: string[]
  phoneNumbers: number[]
  adress: Address;
  activeProject: Project;
  inactiveprojects: Project[]
}
