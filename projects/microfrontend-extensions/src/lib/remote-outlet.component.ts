import {Component, Input} from '@angular/core';
import {RemoteOutletConfig} from "./remote-outlet-config";

@Component({
  selector: 'remote-outlet',
  templateUrl: './remote-outlet.component.html'
})
export class RemoteOutletComponent {
  @Input()
  config?: RemoteOutletConfig;

  trackByName(index: number, item: { remoteName: string }) {
    return item.remoteName;
  }
}
