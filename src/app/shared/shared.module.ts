import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { ToastsComponent } from "./components/toaster/toaster.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LoaderComponent } from "./components/loader/loader.component";

@NgModule({
  imports: [
    CommonModule, 
    RouterModule,
    NgbModule
  ],
  declarations: [
    HeaderComponent,
    ToastsComponent,
    LoaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
  ]
})
export class SharedModule {}