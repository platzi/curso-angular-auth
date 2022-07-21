import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';

export class DataSourceUser extends DataSource<any[]> {

  data = new BehaviorSubject<any[]>([]);
  originalData: any[]= [];

  connect(): Observable<any[]> {
    return this.data;
  }

  init(data: any[]) {
    this.originalData = data;
    this.data.next(data);
  }

  disconnect() { }

}
