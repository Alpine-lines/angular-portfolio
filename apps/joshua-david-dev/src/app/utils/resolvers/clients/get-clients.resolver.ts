import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import Client from "src/app/models/project.model";
import { ClientService } from "src/app/services/clients/client.service";;

@Injectable({ providedIn: 'root' })
export class ClientsResolver implements Resolve<Client[]> {
  constructor(private clientService: ClientService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.clientService.getAll();
  }
}
