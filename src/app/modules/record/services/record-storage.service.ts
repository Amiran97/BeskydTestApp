import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { Record } from '../models/record.model';


@Injectable({
  providedIn: 'root'
})
export class RecordStorageService {
  private records: BehaviorSubject<Record[]>;
  
  constructor() {
    this.records = new BehaviorSubject(new Array<Record>());
  }

  get records$() {
    return this.records.asObservable();
  }

  set(records: Record[]) {
    this.records.next(records);
  }

  create(record: Record) {
    this.records.next([record, ...this.records.getValue()]);
  }

  update(record: Record) {
    let records = this.records.getValue();
    let index = _.findLastIndex(records, item => item.id == record.id);
    records[index] = record;
  }

  delete(id: number) {
    _.remove(this.records.getValue(), record => record.id === id);
    this.records.next(this.records.getValue());
  }
}