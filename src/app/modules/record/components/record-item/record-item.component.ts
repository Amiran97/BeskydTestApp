import { Component, Input } from "@angular/core";
import { Record } from "../../models/record.model";
import { RecordFacadeService } from "../../services/record-facade.service";


@Component({
  selector: "app-record-item",
  templateUrl: "./record-item.component.pug",
  styleUrls: ["./record-item.component.scss"],
})
export class RecordItemComponent {
  @Input() record?: Record;

  constructor(private recordFacade: RecordFacadeService) {
  }

  deleteRecord() {
    if(this.record) {
      this.recordFacade.delete(this.record.id).subscribe(result => {});
    }
  }
}