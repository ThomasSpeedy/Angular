import {Component, AfterViewInit, TemplateRef} from '@angular/core';
import {ViewContainerRef, ComponentFactory, ComponentFactoryResolver} from '@angular/core';
import {Input} from '@angular/core/src/metadata/directives';
import {ViewChild} from '@angular/core/src/metadata/di';

@Component({
  selector: 'ch-circle',
  template: `<div [ngStyle]="{'background-color' : color}"></div>`,
  styles: [`
     div {
       border-radius: 50%;
       border: 1px solid black;
       width: 40px;
       height: 40px;
       display: inline-block;
       margin: 3px;
     }
  `]
})
export class CircleComponent {
  @Input() color = 'black';
  ngOnDestroy() {
    console.log('Destroy circle');
  }
}


@Component({
  selector: 'ch-dynamic-components-demo',
  templateUrl: './dynamic-components-demo.component.html',
  styleUrls: ['./dynamic-components-demo.component.css']
})
export class DynamicComponentsDemoComponent implements AfterViewInit {
  @ViewChild('container', {read: ViewContainerRef}) container;

  @ViewChild('todoContainer', {read: ViewContainerRef}) todoContainer;
  @ViewChild('todoTemplate') todoTemplate;

  repeatCnt = 4;

  circleFactory: ComponentFactory<CircleComponent>;

  constructor(private resolver: ComponentFactoryResolver){
    this.circleFactory = this.resolver.resolveComponentFactory(CircleComponent);
  }
  ngAfterViewInit(){
    this.container.createComponent(this.circleFactory);
    this.container.createComponent(this.circleFactory);
    this.addCircle('white');

    this.moveCircle(1,0);

    const circleRef = this.addCircle('gray');
    this.container.move(circleRef.hostView, 1);

    this.container.remove(this.container.length -1); //constzten Kreis löschen
  }

  ngAfterContentInit() {
    this.todoContainer.createEmbeddedView(this.todoTemplate, {
      todoParam: {
        text: 'Aufräumen',
        done: true
      }
    })
  }


    addCircle(color: string) {
    const circleRef = this.container.createComponent(this.circleFactory, 0);
    circleRef.instance.color = color;
    return circleRef;
  }

  moveCircle(oldIndex, newIndex) {
    const viewRef = this.container.get(oldIndex);
    this.container.move(viewRef, newIndex)
  }
}

