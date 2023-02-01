import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { ToastsComponent } from "./components/toaster/toaster.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule, 
    RouterModule,
    NgbModule
  ],
  declarations: [
    HeaderComponent,
    ToastsComponent
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
  ]
})
export class SharedModule {}