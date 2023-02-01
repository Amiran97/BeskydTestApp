import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { Record } from '../models/record.model';
import { RecordDbService } from './record-db.service';
import { RecordStorageService } from './record-storage.service';

@Injectable({
    providedIn: 'root'
  })
export class RecordFacadeService {
    constructor(
        private recordDb: RecordDbService,
        private recordStorage: RecordStorageService,
        private loader: LoaderService) {
            this.load();
        }

      get record$() {
        return this.recordStorage.records$;
      }

      get editRecordId$() {
        return this.recordStorage.editRecordId$;
      }

      setRecordId(id: string) {
        this.recordStorage.setRecordId(id);
      }

      getById(id: string) : Observable<Record> {
        return this.recordDb.getById(id);
      }
    
      create(data: Record) : Observable<Record> {
        this.loader.setLoading(true);
        return this.recordDb.create(data).pipe(
          tap(data => {
            this.recordStorage.create(data); 
            this.loader.setLoading(false);
          })
        );
      }
      
      update(data: Record) : Observable<Record> {
        this.loader.setLoading(true);
        return this.recordDb.update(data).pipe(
          tap(data => { 
            this.recordStorage.update(data);
            this.loader.setLoading(false);
          })
        );
      }

      delete(id: string) : Observable<string> {
        this.loader.setLoading(true);
        return this.recordDb.delete(id).pipe(
          tap(res => { 
            this.recordStorage.delete(id); 
            this.loader.setLoading(false);
          })
        );
      }

      private load() {
        this.loader.setLoading(true);
        this.recordDb.getAll()
          .subscribe(data => { 
            this.recordStorage.set(data);
            this.loader.setLoading(false);
          });
      }
}