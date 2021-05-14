import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup } from "@angular/forms";

import { RouteInterfaces, Route, MASKS } from "../../interfaces";
import { AppApiService } from "../../app-api.service";

@Component({
  selector: 'app-modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.scss']
})
export class ModalViewComponent implements OnInit {
  readonly interfaces = RouteInterfaces;
  readonly masks = MASKS;
  serverError = '';
  isEditing = false;

  form: FormGroup = new FormGroup({
    address: new FormControl(''),
    mask: new FormControl(''),
    gateway: new FormControl(''),
    interface: new FormControl(''),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { route?: Route },
    public dialogRef: MatDialogRef<ModalViewComponent>,
    private api: AppApiService) {
    this.isEditing  = !!data.route;
  }

  ngOnInit(): void {
    this.initForm();
  }

  save() {
    const value: Route = { uuid: this.data.route?.uuid, ...this.form.value };
    const response = this.isEditing ? this.api.editRoute(value) : this.api.createRoute(value);

    response.subscribe(response => {
      if (response.successful) {
        this.dialogRef.close()
      } else {
        this.serverError = response.message;
      }
    })
  }

  delete() {
    this.api.deleteRoute(this.data.route!.uuid).subscribe(() => this.dialogRef.close())
  }

  private initForm() {
    this.form.reset(this.data.route);
  }
}
