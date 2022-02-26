import {ChangeDetectorRef, Compiler, Directive, Injector, Input, OnInit, ViewContainerRef} from '@angular/core';
import {RemoteOutletConfig} from "./remote-outlet-config";
import {loadRemoteModule} from "@angular-architects/module-federation";

@Directive({
  selector: '[remoteComponentRenderer]'
})
export class RemoteComponentRenderer implements OnInit {
  @Input()
  remoteComponentRenderer!: RemoteOutletConfig[number];

  constructor(
    private viewContainerRef: ViewContainerRef,
    private injector: Injector,
    private compiler: Compiler,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    return this.renderComponent();
  }

  private async renderComponent() {
    const module = await loadRemoteModule({...this.remoteComponentRenderer, type: 'module', exposedModule: './Module'})
    const factory = await this.compiler.compileModuleAsync(module[this.remoteComponentRenderer.module]);
    const moduleRef = factory.create(this.injector);

    try {
      const cmpModule = await loadRemoteModule({
        ...this.remoteComponentRenderer,
        type: 'module',
        exposedModule: './Component'
      })
      const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(cmpModule[this.remoteComponentRenderer.component]);
      this.viewContainerRef.createComponent(componentFactory, undefined, moduleRef.injector);
      this.cdr.detectChanges();
    } catch (e) {
      console.error(e);
    }
  }
}
