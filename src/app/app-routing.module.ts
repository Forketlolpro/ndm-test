import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardResolverService } from "./dashboard/dashboard-resolver.service";
import { ModalEntryComponent } from "./modal/modal-entry/modal-entry.component";
import { RouteResolverService } from "./modal/route-resolver.service";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: { data: DashboardResolverService },
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: 'create',
        component: ModalEntryComponent
      },
      {
        path: 'edit/:uuid',
        resolve: { data: RouteResolverService },
        component: ModalEntryComponent,
      }
    ]
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    DashboardResolverService,
    RouteResolverService
  ]
})
export class AppRoutingModule { }
