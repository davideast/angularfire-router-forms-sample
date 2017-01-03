import { Directive, ComponentRef, ViewContainerRef, ComponentFactoryResolver, HostListener, OnInit, Input } from '@angular/core';
import { PopoverComponent } from './popover.component';

@Directive({
  selector: '[app-popover]'
})
export class PopoverDirective implements OnInit {

  @Input() appPopoverContent: string;

  protected PopoverComponent = PopoverComponent;
  protected popover: ComponentRef<PopoverComponent>;
  protected visible = false;

  constructor(protected viewContainerRef: ViewContainerRef,
              protected resolver: ComponentFactoryResolver) {}

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(PopoverComponent);
    this.popover = this.viewContainerRef.createComponent(factory);
    this.popover.instance.content = this.appPopoverContent;
  }

  @HostListener('mouseover', ['$event'])
  onMouseOver(event: MouseEvent) {
    this.popover.instance.visible = true;
    this.popover.instance.position = {
      x: event.clientX - 100,
      y: event.clientY + 10
    };
  }

  @HostListener('mouseout', ['$event.target'])
  onMouseOut() {
    this.popover.instance.visible = false;
  }

}

