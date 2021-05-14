import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MatSort } from "@angular/material/sort";

import { Route } from "../interfaces";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['address', 'mask', 'gateway', 'interface'];
  dataSource: MatTableDataSource<Route> = new MatTableDataSource();

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ data })=> this.dataSource.data = data);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}
