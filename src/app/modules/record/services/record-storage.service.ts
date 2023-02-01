import { Injectable } from '@angular/core';
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
    this.records.next(this.records.value.map(item => item.id === record.id ? record : item));
  }

  delete(id: string) {
    this.records.next(this.records.getValue().filter(record => record.id !== id));
  }
}