import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs";

import { AppApiService } from "../app-api.service";
import { Route } from "../interfaces";

@Injectable()
export class DashboardResolverService implements Resolve<Route[]> {
  constructor(private api: AppApiService) {}

  resolve(): Observable<Route[]> {
    return this.api.getRoutes();
  }
}
