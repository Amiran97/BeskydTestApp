import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Record } from "../../models/record.model";
import { RecordFacadeService } from "../../services/record-facade.service";

@Component({
  selector: "app-records-list",
  templateUrl: "./records-list.component.pug",
  styleUrls: ["./records-list.component.scss"],
})
export class RecordsListComponent implements OnInit {

  records$?: Observable<Record[]>;

  constructor(private recordFacede: RecordFacadeService) {

  }

  ngOnInit() {
    this.records$ = this.recordFacede.record$;
  }

}