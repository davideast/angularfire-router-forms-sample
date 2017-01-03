import { Component, OnInit, Input, ElementRef, OnChanges } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {

  @Input() visible = false;
  @Input() content = "";
  @Input() position: { x: number; y: number } = { x: 0, y: 0 };

  constructor(private el: ElementRef) { }

  ngOnInit() {

  }

  ngOnChanges() {
    // const element = this.el.nativeElement as HTMLElement;
    // element.style.top = `${this.position.x}px`;
    // element.style.left = `${this.position.y}px`;
  }

}
