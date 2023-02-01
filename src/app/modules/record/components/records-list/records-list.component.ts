import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Record } from "../../models/record.model";
import { RecordFacadeService } from "../../services/record-facade.service";
import { RecordsFilterStorageService } from "../../services/records-filter.service";

@Component({
  selector: "app-records-list",
  templateUrl: "./records-list.component.pug",
  styleUrls: ["./records-list.component.scss"],
})
export class RecordsListComponent implements OnInit {

  records$?: Observable<Record[]>;
  nameFilter$?: Observable<string>;
  statusFilter$?: Observable<string>;
  roleFilter$?: Observable<string>;
  
  constructor(private recordFacede: RecordFacadeService,
    private recordsFilterStorage: RecordsFilterStorageService) {

  }

  ngOnInit() {
    this.records$ = this.recordFacede.record$;
    this.nameFilter$ = this.recordsFilterStorage.name$;
    this.statusFilter$ = this.recordsFilterStorage.status$;
    this.roleFilter$ = this.recordsFilterStorage.role$;
  }
}