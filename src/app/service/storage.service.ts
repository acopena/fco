import { Injectable } from '@angular/core';
import { ApiService } from '../service/api.service';

@Injectable()
export class StorageService {
  private readonly storage: any;

  constructor(private api: ApiService) {
    this.storage = localStorage;
  }

  retrieve(key: string): any {
    const item = this.storage.getItem(key);

    if (item && item !== 'undefined') {
      return JSON.parse(this.storage.getItem(key));
    }

    return undefined;
  }

  store(key: string, value: any): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  retrieveDivions(): any {
    const item = this.storage.getItem('DivisionList');

    if (item && item !== 'undefined') {
      return JSON.parse(this.storage.getItem('DivisionList'));
    } else {
      this.api.get('division/GetDivisionByType?typeId=2').subscribe((data) => {
        this.storage.store('DivisionList', data);
        return data;
      });
    }
    return undefined;
  }
}
