import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { SharedModule } from './shared/shared.module';

const dbConfig: DBConfig  = {
  name: 'RecordDb',
  version: 1,
  objectStoresMeta: [{
    store: 'record',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'address', keypath: 'address', options: { unique: false } }, 
      { name: 'amount', keypath: 'amount', options: { unique: false } }, 
      { name: 'status', keypath: 'status', options: { unique: false } }, 
      { name: 'role', keypath: 'role', options: { unique: false } }
    ]
  }]
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgxIndexedDBModule.forRoot(dbConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
