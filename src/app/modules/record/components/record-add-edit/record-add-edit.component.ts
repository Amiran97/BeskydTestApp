import { Component, OnDestroy, OnInit } from "@angular/core";
import { RecordFacadeService } from "../../services/record-facade.service";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { Status } from "../../models/status.enum";
import { Role } from "../../models/role.enum";
import * as _ from "lodash";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-record-add-edit",
  templateUrl: "./record-add-edit.component.pug",
  styleUrls: ["./record-add-edit.component.scss"],
})
export class RecordAddEditComponent implements OnInit, OnDestroy {

  private getRecordIdSub?: Subscription;
  private getByIdSub?: Subscription;
  private updateSub?: Subscription;
  private createSub?: Subscription;

  display = "none";
  recordForm?: FormGroup;
  eStatus = Status;
  eRole = Role;
  id?: string;
  isEdit: boolean = false;

  get name() { return this.recordForm?.get('name'); }
  get address() { return this.recordForm?.get('address'); }
  get amount() { return this.recordForm?.get('amount'); }
  get status() { return this.recordForm?.get('status'); }
  get role() { return this.recordForm?.get('role'); }

  constructor(private recordFacade: RecordFacadeService,
    private toaster: ToasterService) {

  }

  ngOnInit(): void {
    this.recordForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required, 
        Validators.maxLength(32),
      ]),
      address: new FormControl(null, [
        Validators.required, 
        Validators.maxLength(100),
      ]),
      amount: new FormControl(null, [
        Validators.required,
        Validators.min(1)
      ]),
      status: new FormControl(0, [
        Validators.required
      ]),
      role: new FormControl(0, [
        Validators.required
      ])
    });
    this.recordForm.reset();
    this.getRecordIdSub = this.recordFacade.editRecordId$.subscribe(id => {
      if(id) {
        this.getByIdSub = this.recordFacade.getById(id).subscribe(record => {
          this.name?.setValue(record.name);
          this.address?.setValue(record.address);
          this.amount?.setValue(record.amount);
          this.status?.setValue(record.status);
          this.role?.setValue(record.role);
          this.id = record.id;
          this.isEdit = true;
          this.openModal();
        });
      }
    })
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.recordForm?.reset();
    if(this.isEdit) {
      this.isEdit = false;
      this.recordFacade.setRecordId('');
    }
    this.display = "none";
  }

  onSubmit() {
    if(this.recordForm?.valid) {
      if(this.isEdit && this.id) {
        let result = _.clone(this.recordForm.getRawValue());
        result['id'] = this.id;
        this.updateSub = this.recordFacade.update(result).subscribe(result => {
          this.isEdit = false;
          this.recordFacade.setRecordId('');
          this.toaster.showSuccess('Record updated!');
        });
      } else {
        this.createSub = this.recordFacade.create(this.recordForm.getRawValue()).subscribe(result => {
          this.toaster.showSuccess('Record created!');
        });
      }
      this.recordForm.reset();
      this.display = "none";
    }
  }

  ngOnDestroy(): void {
    this.getRecordIdSub?.unsubscribe();
    this.getByIdSub?.unsubscribe();
    this.createSub?.unsubscribe();
    this.updateSub?.unsubscribe();
  }
}