
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RecordsListComponent } from './components/records-list/records-list.component';
import { RecordRoutingModule } from './record-router.module';
import { RecordAddComponent } from './components/record-add/record-add.component';
import { RecordItemComponent } from './components/record-item/record-item.component';

@NgModule({
  declarations: [
    RecordsListComponent,
    RecordAddComponent,
    RecordItemComponent
  ],
  imports: [
    CommonModule,
    RecordRoutingModule,
    ReactiveFormsModule
  ]
})
export class RecordModule { }