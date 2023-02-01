import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { RecordFacadeService } from './record-facade.service';


@Injectable({
  providedIn: 'root'
})
export class RecordsFilterStorageService {
  private name: BehaviorSubject<string>;
  private status: BehaviorSubject<string>;
  private role: BehaviorSubject<string>;

  constructor(private recordFacade: RecordFacadeService) {
    this.name = new BehaviorSubject('');
    this.status = new BehaviorSubject('');
    this.role = new BehaviorSubject('');
  }


  get name$() {
    return this.name.asObservable();
  }

  get status$() {
    return this.status.asObservable();
  }

  get role$() {
    return this.role.asObservable();
  }

  setName(name: string) {
    this.name.next(name);
  }

  setStatus(status: string) {
    this.status.next(status);
  }

  setRole(role: string) {
    this.role.next(role);
  }
}