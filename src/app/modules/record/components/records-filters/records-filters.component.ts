import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Role } from "../../models/role.enum";
import { Status } from "../../models/status.enum";
import { RecordFacadeService } from "../../services/record-facade.service";
import { RecordsFilterStorageService } from "../../services/records-filter.service";

@Component({
  selector: "app-records-filters",
  templateUrl: "./records-filters.component.pug",
  styleUrls: ["./records-filters.component.scss"],
})
export class RecordsFiltersComponent implements OnInit {

  display = "block";
  isHidden = false;
  eStatus = Status;
  eRole = Role;
  filterForm?: FormGroup;
  get name() { return this.filterForm?.get('name'); }
  get status() { return this.filterForm?.get('status'); }
  get role() { return this.filterForm?.get('role'); }

  constructor(private recordFilterStorage: RecordsFilterStorageService) {
    
  }

  ngOnInit() {
    this.filterForm = new FormGroup({
        name: new FormControl(null, []),
        status: new FormControl(0, []),
        role: new FormControl(0, [])
    });
    this.filterForm.reset();
  }
  
  showControls() {
    this.display = "block";
    this.isHidden = false;
  }
  hideControls() {
    this.display = "none";
    this.isHidden = true;
  }

  nameChange() {
    this.recordFilterStorage.setName(this.name?.getRawValue());
  }
  
  statusChange() {
    this.recordFilterStorage.setStatus(this.status?.getRawValue());
  }

  roleChange() {
    this.recordFilterStorage.setRole(this.role?.getRawValue());
  }
}