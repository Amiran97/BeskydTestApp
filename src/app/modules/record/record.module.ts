
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RecordsListComponent } from './components/records-list/records-list.component';
import { RecordRoutingModule } from './record-router.module';
import { RecordAddEditComponent } from './components/record-add-edit/record-add-edit.component';
import { RecordItemComponent } from './components/record-item/record-item.component';
import { RecordsFiltersComponent } from './components/records-filters/records-filters.component';
import { RecordFilterPipe } from './pipes/record-filter.pipe';

@NgModule({
  declarations: [
    RecordsListComponent,
    RecordAddEditComponent,
    RecordItemComponent,
    RecordsFiltersComponent,
    RecordFilterPipe
  ],
  imports: [
    CommonModule,
    RecordRoutingModule,
    ReactiveFormsModule
  ]
})
export class RecordModule { }