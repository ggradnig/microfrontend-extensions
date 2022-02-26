import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RemoteOutletComponent} from "./remote-outlet.component";
import {RemoteComponentRenderer} from "./remote-component-renderer";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    RemoteOutletComponent,
    RemoteComponentRenderer
  ],
  exports: [
    RemoteOutletComponent
  ]
})
export class RemoteModule {
}
