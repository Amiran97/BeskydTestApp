import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "record",
    loadChildren: () => import('./modules/record/record.module').then(m => m.RecordModule) 
  },
  {
    path: "**",
    redirectTo: 'record'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
