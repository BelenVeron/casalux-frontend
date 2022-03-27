import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text: string = '';
  @Input() type: string = '';
  @Input() link: string = '';
  @Input() like: boolean = false;
  @Output() sendLike: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setLike(): void {
    this.like = !this.like;
    this.sendLike.emit(this.like);
  }

}
