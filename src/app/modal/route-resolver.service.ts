import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import { Observable } from "rxjs";
import {Route} from "../interfaces";
import {AppApiService} from "../app-api.service";

@Injectable()
export class RouteResolverService implements Resolve<Route> {
  constructor(private api: AppApiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Route> {
    return this.api.getRoute(route.params.uuid)
  }
}
