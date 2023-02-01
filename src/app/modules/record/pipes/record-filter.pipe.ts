import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';
import { Record } from '../models/record.model';

@Pipe({
  name: 'recordFilter'
})
export class RecordFilterPipe implements PipeTransform {

  transform(items: Record[], name: string | null, status: string | null, role: string | null): Record[] {
    let result = items;
    if(name) {
        result = _.filter(result, item => item.name.includes(name));
    }
    if(status) {
        result = _.filter(result, item => item.status === status);
    }
    if(role) {
        result = _.filter(result, item => item.role === role);
    }
    return result;
  }

}