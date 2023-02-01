import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { Record } from '../models/record.model';


@Injectable({
  providedIn: 'root'
})
export class RecordStorageService {
  private records: BehaviorSubject<Record[]>;
  private editRecordId: BehaviorSubject<string>;

  constructor() {
    this.records = new BehaviorSubject(new Array<Record>());
    this.editRecordId = new BehaviorSubject('');
  }

  get editRecordId$() {
    return this.editRecordId.asObservable();
  }

  get records$() {
    return this.records.asObservable();
  }

  setRecordId(id: string) {
    this.editRecordId.next(id);
  }

  set(records: Record[]) {
    this.records.next(records);
  }

  create(record: Record) {
    this.records.next([...this.records.getValue(), record]);
  }

  update(record: Record) {
    let records = this.records.getValue();
    let index = _.findLastIndex(records, item => item.id == record.id);
    records[index] = record;
  }

  delete(id: string) {
    _.remove(this.records.getValue(), record => record.id === id);
    this.records.next(this.records.getValue());
  }
}