import {Component, OnInit} from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";

import { ModalViewComponent } from "../modal-view/modal-view.component";
import { Route } from "../../interfaces";

@Component({
  template: ''
})
export class ModalEntryComponent implements OnInit {
  constructor(public dialog: MatDialog, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ data }) => this.openDialog(data));
  }

  private openDialog(route?: Route): void {
    const dialogRef = this.dialog.open(ModalViewComponent, {
      width: '470px',
      data: { route }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate([route ? '../..' : '..'], {relativeTo: this.route});
    });
  }
}
