
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RecordsListComponent } from './components/records-list/records-list.component';
import { RecordRoutingModule } from './record-router.module';

@NgModule({
  declarations: [
    RecordsListComponent
  ],
  imports: [
    CommonModule,
    RecordRoutingModule,
    ReactiveFormsModule
  ]
})
export class RecordModule { }