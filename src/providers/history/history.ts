import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HistoryRecord } from '../../models/historyRecord';

/*
  Generated class for the HistoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistoryProvider {

  private historyArray: Array<HistoryRecord> = [];
  constructor(private storage: Storage) {
    //load data from persistent
    this.storage.get('history').then(
      (value) => {
        if (value) {
          this.historyArray = JSON.parse(value);
        } 
      }
    )
  }

  public saveToStorage(from: string, to: string): void {
    let item = new HistoryRecord(from, to);
    this.historyArray.push(item);
    this.storage.set('history', JSON.stringify(this.historyArray));
  }

  public getFromStorage() {
    return this.historyArray;
  }
}
