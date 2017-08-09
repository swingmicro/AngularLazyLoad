import { Component, ViewEncapsulation } from '@angular/core';
import { Compiler, Injector, ViewChild, ViewContainerRef,Directive,forwardRef, Input,ComponentFactoryResolver,ComponentFactory,OnChanges  } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app',
    templateUrl: './app.html',
    styleUrls: [ './app.css' ],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent { }

@Directive({
  selector: '[iits-loader]'
})
export class IITSLoaderDirective implements OnChanges {
  @Input() comp: string;
  @Input() context: any;
  componentRef;
  init = false;

  constructor(
    private vcRef: ViewContainerRef, 
    private resolver: ComponentFactoryResolver) { }

  ngOnChanges() {
    if (!this.comp || this.init) return;
    
    var factories = Array.from(this.resolver['_factories'].keys());
    var factoryClass = factories.find((x: any) => x.name === this.comp);
    const factory = this.resolver.resolveComponentFactory(factoryClass);
    const compRef = this.vcRef.createComponent(factory);

    for(var i in this.context){
      if(this.context.hasOwnProperty(i)){
        compRef._component[i] = this.context[i];
      }
    }


    if (this.componentRef) {
      this.componentRef.destroy();
    }

    this.componentRef = compRef;
    this.init = true;
  }
  
  public ngOnDestroy(){
    if (this.componentRef) {
        this.componentRef.destroy();
        this.componentRef = null;
    }
  }
}

