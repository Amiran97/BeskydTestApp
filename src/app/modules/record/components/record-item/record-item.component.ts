import { Component, Input, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { Record } from "../../models/record.model";
import { RecordFacadeService } from "../../services/record-facade.service";


@Component({
  selector: "app-record-item",
  templateUrl: "./record-item.component.pug",
  styleUrls: ["./record-item.component.scss"],
})
export class RecordItemComponent implements OnDestroy {
  @Input() record?: Record;
  private deleteSub?: Subscription;

  constructor(private recordFacade: RecordFacadeService,
    private toaster: ToasterService) {
  }

  deleteRecord() {
    if(this.record) {
      this.deleteSub = this.recordFacade.delete(this.record.id).subscribe(result => {
        this.toaster.showSuccess('Record deleted!');
      });
    }
  }

  editRecord() {
    if(this.record) {
      this.recordFacade.setRecordId(this.record.id);
    }
  }

  ngOnDestroy(): void {
    this.deleteSub?.unsubscribe();
  }
}