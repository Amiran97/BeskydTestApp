import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Record } from '../models/record.model';
import { RecordDbService } from './record-db.service';
import { RecordStorageService } from './record-storage.service';

@Injectable({
    providedIn: 'root'
  })
export class RecordFacadeService {
    constructor(
        private recordDb: RecordDbService,
        private recordStorage: RecordStorageService) {
            this.load();
        }
    
      get record$() {
        return this.recordStorage.records$;
      }

      getById(id: string) : Observable<Record> {
        return this.recordDb.getById(id);
      }
    
      create(data: Record) : Observable<Record> {
        return this.recordDb.create(data).pipe(
          tap(data => this.recordStorage.create(data))
        );
      }
      
      update(data: Record) : Observable<Record> {
        return this.recordDb.update(data).pipe(
          tap(data => this.recordStorage.update(data))
        );
      }

      delete(id: string) : Observable<string> {
        return this.recordDb.delete(id).pipe(
          tap(res => this.recordStorage.delete(id))
        );
      }

      private load() {
        this.recordDb.getAll()
          .subscribe(data => this.recordStorage.set(data));
      }
}