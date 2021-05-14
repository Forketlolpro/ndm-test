import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

import { ApiResponse, Route } from "./interfaces";

const URL = 'http://localhost:3333/api/';

@Injectable()
export class AppApiService {

  constructor(private http: HttpClient) { }

  getRoutes(): Observable<Route[]> {
    return this.http.get<ApiResponse>(URL + 'routes')
      .pipe(map(data => data.payload.routes));
  }

  getRoute(uuid: string) {
    return this.http.get<ApiResponse>(URL + 'routes/' + uuid)
      .pipe(map(data => data.payload.route));
  }

  createRoute(route: Route): Observable<ApiResponse> {
    let { uuid, ...data} = route
    return this.http.post<ApiResponse>(URL + 'routes', data);
  }

  editRoute(route: Route): Observable<ApiResponse> {
    let { uuid, ...data} = route
    return this.http.put<ApiResponse>(URL + 'routes/' + uuid, data);
  }

  deleteRoute(uuid: string) {
    return this.http.delete<ApiResponse>(URL + 'routes/' + uuid);
  }
}
