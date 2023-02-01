import { Component } from "@angular/core";
import { RecordFacadeService } from "../../services/record-facade.service";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { Status } from "../../models/status.enum";
import { Role } from "../../models/role.enum";

@Component({
  selector: "app-record-add",
  templateUrl: "./record-add.component.pug",
  styleUrls: ["./record-add.component.scss"],
})
export class RecordAddComponent {

  display = "none";
  recordForm: FormGroup;
  eStatus = Status;
  eRole = Role;

  get name() { return this.recordForm?.get('name'); }
  get address() { return this.recordForm?.get('address'); }
  get amount() { return this.recordForm?.get('amount'); }
  get status() { return this.recordForm?.get('status'); }
  get role() { return this.recordForm?.get('role'); }

  constructor(private recordFacade: RecordFacadeService) {
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
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.recordForm.reset();
    this.display = "none";
  }

  onSubmit() {
    if(this.recordForm?.valid) {
      this.recordFacade.create(this.recordForm.getRawValue()).subscribe(result => {
        
      });
      this.recordForm.reset();
      this.display = "none";
    }
  }
}