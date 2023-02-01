import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Record } from '../models/record.model';

@Injectable({
  providedIn: 'root'
})
export class RecordDbService {

  constructor(private dbService: NgxIndexedDBService) { }

  getAll() : Observable<Record[]> {
    return this.dbService.getAll('record');
  }

  getById(id: string) : Observable<Record> {
    return this.dbService.getByID('record', id);
  }

  create(item: Record) : Observable<Record> {
    return this.dbService.add('record', item);
  }

  update(item: Record) : Observable<Record> {
    return this.dbService.update('record', item);
  }

  delete(id: string) : Observable<any> {
    return this.dbService.delete('record', id);
  }
}